(function (global, factory) {
    typeof exports === 'object' && typeof module !== 'undefined' ? factory(exports, require('@angular/animations'), require('@angular/forms'), require('@angular/router'), require('@angular/common'), require('@angular/core'), require('rxjs'), require('rxjs/operators')) :
    typeof define === 'function' && define.amd ? define('angular-bootstrap-md', ['exports', '@angular/animations', '@angular/forms', '@angular/router', '@angular/common', '@angular/core', 'rxjs', 'rxjs/operators'], factory) :
    (factory((global['angular-bootstrap-md'] = {}),global.ng.animations,global.ng.forms,global.ng.router,global.ng.common,global.ng.core,global.rxjs,global.rxjs.operators));
}(this, (function (exports,animations,forms,router,common,i0,rxjs,operators) { 'use strict';

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */
    var MDBBadgeComponent = /** @class */ (function () {
        function MDBBadgeComponent(_el, _renderer) {
            this._el = _el;
            this._renderer = _renderer;
        }
        /**
         * @return {?}
         */
        MDBBadgeComponent.prototype.ngOnInit = /**
         * @return {?}
         */
            function () {
                var _this = this;
                this._renderer.addClass(this._el.nativeElement, 'badge');
                if (this.color) {
                    /** @type {?} */
                    var customClassArr = this.color.split(' ');
                    customClassArr.forEach(( /**
                     * @param {?} el
                     * @return {?}
                     */function (el) {
                        _this._renderer.addClass(_this._el.nativeElement, el);
                    }));
                }
            };
        MDBBadgeComponent.decorators = [
            { type: i0.Component, args: [{
                        selector: 'mdb-badge',
                        template: "<span class=\"{{class}} {{classInside}}\">\n  <ng-content></ng-content>\n</span>\n",
                        encapsulation: i0.ViewEncapsulation.None,
                        changeDetection: i0.ChangeDetectionStrategy.OnPush,
                        styles: [".badge{box-shadow:0 2px 5px 0 rgba(0,0,0,.16),0 2px 10px 0 rgba(0,0,0,.12);border-radius:.125rem;color:#fff!important}.badge-pill{border-radius:10rem;padding-right:.6rem;padding-left:.6rem}.badge-primary{background-color:#4285f4!important;color:#fff!important}.badge-danger{background-color:#ff3547!important;color:#fff!important}.badge-warning{background-color:#fb3!important;color:#fff!important}.badge-success{background-color:#00c851!important;color:#fff!important}.badge-info{background-color:#33b5e5!important;color:#fff!important}.badge-default{background-color:#2bbbad!important;color:#fff!important}.badge-secondary{background-color:#a6c!important;color:#fff!important}.badge-dark{background-color:#212121!important;color:#fff!important}.badge-light{background-color:#e0e0e0!important;color:#000!important}"]
                    }] }
        ];
        /** @nocollapse */
        MDBBadgeComponent.ctorParameters = function () {
            return [
                { type: i0.ElementRef },
                { type: i0.Renderer2 }
            ];
        };
        MDBBadgeComponent.propDecorators = {
            default: [{ type: i0.Input }, { type: i0.HostBinding, args: ['class.badge-default',] }],
            primary: [{ type: i0.Input }, { type: i0.HostBinding, args: ['class.badge-primary',] }],
            success: [{ type: i0.Input }, { type: i0.HostBinding, args: ['class.badge-success',] }],
            info: [{ type: i0.Input }, { type: i0.HostBinding, args: ['class.badge-info',] }],
            warning: [{ type: i0.Input }, { type: i0.HostBinding, args: ['class.badge-warning',] }],
            danger: [{ type: i0.Input }, { type: i0.HostBinding, args: ['class.badge-danger',] }],
            pill: [{ type: i0.Input }, { type: i0.HostBinding, args: ['class.badge-pill',] }],
            classInside: [{ type: i0.Input }],
            color: [{ type: i0.Input }],
            class: [{ type: i0.Input }]
        };
        return MDBBadgeComponent;
    }());

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */
    var BadgeModule = /** @class */ (function () {
        function BadgeModule() {
        }
        BadgeModule.decorators = [
            { type: i0.NgModule, args: [{
                        declarations: [MDBBadgeComponent],
                        exports: [MDBBadgeComponent]
                    },] }
        ];
        return BadgeModule;
    }());

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */
    var MdbBreadcrumbComponent = /** @class */ (function () {
        function MdbBreadcrumbComponent() {
        }
        MdbBreadcrumbComponent.decorators = [
            { type: i0.Component, args: [{
                        selector: 'mdb-breadcrumb',
                        template: "<ol class=\"breadcrumb list-inline list-unstyled {{customClass}} text-{{textTransform}}\">\n  <ng-content></ng-content>\n</ol>\n",
                        changeDetection: i0.ChangeDetectionStrategy.OnPush
                    }] }
        ];
        MdbBreadcrumbComponent.propDecorators = {
            customClass: [{ type: i0.Input }],
            textTransform: [{ type: i0.Input }]
        };
        return MdbBreadcrumbComponent;
    }());

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */
    var MdbBreadcrumbItemComponent = /** @class */ (function () {
        function MdbBreadcrumbItemComponent(_el, _renderer) {
            this._el = _el;
            this._renderer = _renderer;
        }
        /**
         * @return {?}
         */
        MdbBreadcrumbItemComponent.prototype.ngOnInit = /**
         * @return {?}
         */
            function () {
                this._renderer.addClass(this._el.nativeElement, 'breadcrumb-item');
            };
        MdbBreadcrumbItemComponent.decorators = [
            { type: i0.Component, args: [{
                        selector: 'mdb-breadcrumb-item',
                        template: "<li class=\"list-inline-item breadcrumb-item font-weight-{{fontWeight}}\">\n  <ng-content></ng-content>\n</li>\n",
                        encapsulation: i0.ViewEncapsulation.None,
                        styles: [".breadcrumb-item{cursor:pointer}.breadcrumb-item.active{color:#6c757d!important}.breadcrumb-item.active>.breadcrumb-item{cursor:default}.light-font .breadcrumb-item:before{color:#fff}.light-font .breadcrumb-item.active{color:#cfd8dc!important}.light-font .breadcrumb-item.active>.breadcrumb-item{cursor:default}.dark-font .breadcrumb-item:before{color:#000}.dark-font .breadcrumb-item.active{color:#455a64!important}.dark-font .breadcrumb-item.active>.breadcrumb-item{cursor:default}"]
                    }] }
        ];
        /** @nocollapse */
        MdbBreadcrumbItemComponent.ctorParameters = function () {
            return [
                { type: i0.ElementRef },
                { type: i0.Renderer2 }
            ];
        };
        MdbBreadcrumbItemComponent.propDecorators = {
            fontWeight: [{ type: i0.Input }]
        };
        return MdbBreadcrumbItemComponent;
    }());

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */
    var BreadcrumbModule = /** @class */ (function () {
        function BreadcrumbModule() {
        }
        BreadcrumbModule.decorators = [
            { type: i0.NgModule, args: [{
                        imports: [common.CommonModule],
                        declarations: [MdbBreadcrumbComponent, MdbBreadcrumbItemComponent],
                        exports: [MdbBreadcrumbComponent, MdbBreadcrumbItemComponent]
                    },] }
        ];
        return BreadcrumbModule;
    }());

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */
    var MdbBtnDirective = /** @class */ (function () {
        function MdbBtnDirective(el, renderer) {
            this.el = el;
            this.renderer = renderer;
            this.color = '';
            this.rounded = false;
            this.gradient = '';
            this.outline = false;
            this.flat = false;
            this.size = '';
            this.block = false;
            this.floating = false;
        }
        /**
         * @return {?}
         */
        MdbBtnDirective.prototype.ngOnInit = /**
         * @return {?}
         */
            function () {
                this.colorClass = 'btn-' + this.color;
                this.gradientClass = this.gradient + '-gradient';
                this.outlineClass = 'btn-outline-' + this.color;
                this.flatClass = 'btn-flat';
                this.roundedClass = 'btn-rounded';
                this.sizeClass = 'btn-' + this.size;
                this.blockClass = 'btn-block';
                this.floatingClass = 'btn-floating';
                this.renderer.addClass(this.el.nativeElement, 'btn');
                this.initClasses();
            };
        /**
         * @param {?} changes
         * @return {?}
         */
        MdbBtnDirective.prototype.ngOnChanges = /**
         * @param {?} changes
         * @return {?}
         */
            function (changes) {
                if (changes.color) {
                    this.renderer.removeClass(this.el.nativeElement, this.colorClass);
                    if (this.color && this.color !== '') {
                        this.colorClass = 'btn-' + this.color;
                        this.renderer.addClass(this.el.nativeElement, this.colorClass);
                    }
                    if (this.outline) {
                        /** @type {?} */
                        var currentOutlineClass = this.outlineClass;
                        this.outlineClass = 'btn-outline-' + this.color;
                        this.renderer.removeClass(this.el.nativeElement, currentOutlineClass);
                        this.renderer.addClass(this.el.nativeElement, this.outlineClass);
                    }
                }
                if (changes.gradient) {
                    this.renderer.removeClass(this.el.nativeElement, this.gradientClass);
                    if (this.gradient !== '') {
                        this.gradientClass = this.gradient + '-gradient';
                        this.renderer.addClass(this.el.nativeElement, this.gradientClass);
                    }
                }
                if (changes.outline) {
                    if (!this.outline) {
                        this.renderer.removeClass(this.el.nativeElement, this.outlineClass);
                    }
                    if (this.outline) {
                        this.renderer.removeClass(this.el.nativeElement, this.colorClass);
                        this.renderer.addClass(this.el.nativeElement, this.outlineClass);
                    }
                    this.outlineClass = 'btn-outline-' + this.color;
                }
                if (changes.flat) {
                    this.renderer.removeClass(this.el.nativeElement, this.flatClass);
                    if (this.flat) {
                        if (this.color) {
                            this.renderer.removeClass(this.el.nativeElement, this.colorClass);
                        }
                        if (this.gradient) {
                            this.renderer.removeClass(this.el.nativeElement, this.gradientClass);
                        }
                        if (this.outline) {
                            this.renderer.removeClass(this.el.nativeElement, this.outlineClass);
                        }
                        if (this.rounded) {
                            this.renderer.removeClass(this.el.nativeElement, this.roundedClass);
                        }
                        this.renderer.addClass(this.el.nativeElement, this.flatClass);
                    }
                }
                if (changes.rounded) {
                    this.renderer.removeClass(this.el.nativeElement, this.roundedClass);
                    if (this.rounded) {
                        this.roundedClass = 'btn-rounded';
                        this.renderer.addClass(this.el.nativeElement, this.roundedClass);
                    }
                }
                if (changes.size) {
                    this.renderer.removeClass(this.el.nativeElement, this.sizeClass);
                    if (this.size !== '') {
                        this.sizeClass = 'btn-' + this.size;
                        this.renderer.addClass(this.el.nativeElement, this.sizeClass);
                    }
                }
                if (changes.block) {
                    this.renderer.removeClass(this.el.nativeElement, this.blockClass);
                    if (this.block) {
                        this.blockClass = 'btn-block';
                        this.renderer.addClass(this.el.nativeElement, this.blockClass);
                    }
                }
                if (changes.floating) {
                    if (!this.floating) {
                        this.renderer.removeClass(this.el.nativeElement, this.floatingClass);
                        this.renderer.addClass(this.el.nativeElement, 'btn');
                    }
                    if (this.floating) {
                        this.floatingClass = 'btn-floating';
                        this.renderer.addClass(this.el.nativeElement, this.floatingClass);
                        this.renderer.removeClass(this.el.nativeElement, 'btn');
                    }
                }
            };
        /**
         * @return {?}
         */
        MdbBtnDirective.prototype.initClasses = /**
         * @return {?}
         */
            function () {
                if (this.color !== '') {
                    this.renderer.addClass(this.el.nativeElement, this.colorClass);
                }
                if (this.rounded) {
                    this.renderer.addClass(this.el.nativeElement, this.roundedClass);
                }
                if (this.gradient) {
                    if (this.color !== '') {
                        this.renderer.removeClass(this.el.nativeElement, this.colorClass);
                    }
                    this.renderer.addClass(this.el.nativeElement, this.gradientClass);
                }
                if (this.outline) {
                    this.renderer.removeClass(this.el.nativeElement, this.colorClass);
                    this.renderer.addClass(this.el.nativeElement, this.outlineClass);
                }
                if (this.flat) {
                    if (this.color) {
                        this.renderer.removeClass(this.el.nativeElement, this.colorClass);
                    }
                    if (this.gradient) {
                        this.renderer.removeClass(this.el.nativeElement, this.gradientClass);
                    }
                    if (this.outline) {
                        this.renderer.removeClass(this.el.nativeElement, this.outlineClass);
                    }
                    if (this.rounded) {
                        this.renderer.removeClass(this.el.nativeElement, this.roundedClass);
                    }
                    this.renderer.addClass(this.el.nativeElement, this.flatClass);
                }
                if (this.size) {
                    this.renderer.addClass(this.el.nativeElement, this.sizeClass);
                }
                if (this.block) {
                    this.renderer.addClass(this.el.nativeElement, this.blockClass);
                }
                if (this.floating) {
                    this.renderer.addClass(this.el.nativeElement, this.floatingClass);
                    this.renderer.removeClass(this.el.nativeElement, 'btn');
                }
            };
        MdbBtnDirective.decorators = [
            { type: i0.Component, args: [{
                        // tslint:disable-next-line:component-selector
                        selector: '[mdbBtn]',
                        template: '<ng-content></ng-content>',
                        encapsulation: i0.ViewEncapsulation.None,
                        styles: [".mdb-color.lighten-5{background-color:#d0d6e2!important}.mdb-color.lighten-4{background-color:#b1bace!important}.mdb-color.lighten-3{background-color:#929fba!important}.mdb-color.lighten-2{background-color:#7283a7!important}.mdb-color.lighten-1{background-color:#59698d!important}.mdb-color{background-color:#45526e!important}.mdb-color-text{color:#45526e!important}.rgba-mdb-color-slight,.rgba-mdb-color-slight:after{background-color:rgba(69,82,110,.1)}.rgba-mdb-color-light,.rgba-mdb-color-light:after{background-color:rgba(69,82,110,.3)}.rgba-mdb-color-strong,.rgba-mdb-color-strong:after{background-color:rgba(69,82,110,.7)}.mdb-color.darken-1{background-color:#3b465e!important}.mdb-color.darken-2{background-color:#2e3951!important}.mdb-color.darken-3{background-color:#1c2a48!important}.mdb-color.darken-4{background-color:#1c2331!important}.red.lighten-5{background-color:#ffebee!important}.red.lighten-4{background-color:#ffcdd2!important}.red.lighten-3{background-color:#ef9a9a!important}.red.lighten-2{background-color:#e57373!important}.red.lighten-1{background-color:#ef5350!important}.red{background-color:#f44336!important}.red-text{color:#f44336!important}.rgba-red-slight,.rgba-red-slight:after{background-color:rgba(244,67,54,.1)}.rgba-red-light,.rgba-red-light:after{background-color:rgba(244,67,54,.3)}.rgba-red-strong,.rgba-red-strong:after{background-color:rgba(244,67,54,.7)}.red.darken-1{background-color:#e53935!important}.red.darken-2{background-color:#d32f2f!important}.red.darken-3{background-color:#c62828!important}.red.darken-4{background-color:#b71c1c!important}.red.accent-1{background-color:#ff8a80!important}.red.accent-2{background-color:#ff5252!important}.red.accent-3{background-color:#ff1744!important}.red.accent-4{background-color:#d50000!important}.pink.lighten-5{background-color:#fce4ec!important}.pink.lighten-4{background-color:#f8bbd0!important}.pink.lighten-3{background-color:#f48fb1!important}.pink.lighten-2{background-color:#f06292!important}.pink.lighten-1{background-color:#ec407a!important}.pink{background-color:#e91e63!important}.pink-text{color:#e91e63!important}.rgba-pink-slight,.rgba-pink-slight:after{background-color:rgba(233,30,99,.1)}.rgba-pink-light,.rgba-pink-light:after{background-color:rgba(233,30,99,.3)}.rgba-pink-strong,.rgba-pink-strong:after{background-color:rgba(233,30,99,.7)}.pink.darken-1{background-color:#d81b60!important}.pink.darken-2{background-color:#c2185b!important}.pink.darken-3{background-color:#ad1457!important}.pink.darken-4{background-color:#880e4f!important}.pink.accent-1{background-color:#ff80ab!important}.pink.accent-2{background-color:#ff4081!important}.pink.accent-3{background-color:#f50057!important}.pink.accent-4{background-color:#c51162!important}.purple.lighten-5{background-color:#f3e5f5!important}.purple.lighten-4{background-color:#e1bee7!important}.purple.lighten-3{background-color:#ce93d8!important}.purple.lighten-2{background-color:#ba68c8!important}.purple.lighten-1{background-color:#ab47bc!important}.purple{background-color:#9c27b0!important}.purple-text{color:#9c27b0!important}.rgba-purple-slight,.rgba-purple-slight:after{background-color:rgba(156,39,176,.1)}.rgba-purple-light,.rgba-purple-light:after{background-color:rgba(156,39,176,.3)}.rgba-purple-strong,.rgba-purple-strong:after{background-color:rgba(156,39,176,.7)}.purple.darken-1{background-color:#8e24aa!important}.purple.darken-2{background-color:#7b1fa2!important}.purple.darken-3{background-color:#6a1b9a!important}.purple.darken-4{background-color:#4a148c!important}.purple.accent-1{background-color:#ea80fc!important}.purple.accent-2{background-color:#e040fb!important}.purple.accent-3{background-color:#d500f9!important}.purple.accent-4{background-color:#a0f!important}.deep-purple.lighten-5{background-color:#ede7f6!important}.deep-purple.lighten-4{background-color:#d1c4e9!important}.deep-purple.lighten-3{background-color:#b39ddb!important}.deep-purple.lighten-2{background-color:#9575cd!important}.deep-purple.lighten-1{background-color:#7e57c2!important}.deep-purple{background-color:#673ab7!important}.deep-purple-text{color:#673ab7!important}.rgba-deep-purple-slight,.rgba-deep-purple-slight:after{background-color:rgba(103,58,183,.1)}.rgba-deep-purple-light,.rgba-deep-purple-light:after{background-color:rgba(103,58,183,.3)}.rgba-deep-purple-strong,.rgba-deep-purple-strong:after{background-color:rgba(103,58,183,.7)}.deep-purple.darken-1{background-color:#5e35b1!important}.deep-purple.darken-2{background-color:#512da8!important}.deep-purple.darken-3{background-color:#4527a0!important}.deep-purple.darken-4{background-color:#311b92!important}.deep-purple.accent-1{background-color:#b388ff!important}.deep-purple.accent-2{background-color:#7c4dff!important}.deep-purple.accent-3{background-color:#651fff!important}.deep-purple.accent-4{background-color:#6200ea!important}.indigo.lighten-5{background-color:#e8eaf6!important}.indigo.lighten-4{background-color:#c5cae9!important}.indigo.lighten-3{background-color:#9fa8da!important}.indigo.lighten-2{background-color:#7986cb!important}.indigo.lighten-1{background-color:#5c6bc0!important}.indigo{background-color:#3f51b5!important}.indigo-text{color:#3f51b5!important}.rgba-indigo-slight,.rgba-indigo-slight:after{background-color:rgba(63,81,181,.1)}.rgba-indigo-light,.rgba-indigo-light:after{background-color:rgba(63,81,181,.3)}.rgba-indigo-strong,.rgba-indigo-strong:after{background-color:rgba(63,81,181,.7)}.indigo.darken-1{background-color:#3949ab!important}.indigo.darken-2{background-color:#303f9f!important}.indigo.darken-3{background-color:#283593!important}.indigo.darken-4{background-color:#1a237e!important}.indigo.accent-1{background-color:#8c9eff!important}.indigo.accent-2{background-color:#536dfe!important}.indigo.accent-3{background-color:#3d5afe!important}.indigo.accent-4{background-color:#304ffe!important}.blue.lighten-5{background-color:#e3f2fd!important}.blue.lighten-4{background-color:#bbdefb!important}.blue.lighten-3{background-color:#90caf9!important}.blue.lighten-2{background-color:#64b5f6!important}.blue.lighten-1{background-color:#42a5f5!important}.blue{background-color:#2196f3!important}.blue-text{color:#2196f3!important}.rgba-blue-slight,.rgba-blue-slight:after{background-color:rgba(33,150,243,.1)}.rgba-blue-light,.rgba-blue-light:after{background-color:rgba(33,150,243,.3)}.rgba-blue-strong,.rgba-blue-strong:after{background-color:rgba(33,150,243,.7)}.blue.darken-1{background-color:#1e88e5!important}.blue.darken-2{background-color:#1976d2!important}.blue.darken-3{background-color:#1565c0!important}.blue.darken-4{background-color:#0d47a1!important}.blue.accent-1{background-color:#82b1ff!important}.blue.accent-2{background-color:#448aff!important}.blue.accent-3{background-color:#2979ff!important}.blue.accent-4{background-color:#2962ff!important}.light-blue.lighten-5{background-color:#e1f5fe!important}.light-blue.lighten-4{background-color:#b3e5fc!important}.light-blue.lighten-3{background-color:#81d4fa!important}.light-blue.lighten-2{background-color:#4fc3f7!important}.light-blue.lighten-1{background-color:#29b6f6!important}.light-blue{background-color:#03a9f4!important}.light-blue-text{color:#03a9f4!important}.rgba-light-blue-slight,.rgba-light-blue-slight:after{background-color:rgba(3,169,244,.1)}.rgba-light-blue-light,.rgba-light-blue-light:after{background-color:rgba(3,169,244,.3)}.rgba-light-blue-strong,.rgba-light-blue-strong:after{background-color:rgba(3,169,244,.7)}.light-blue.darken-1{background-color:#039be5!important}.light-blue.darken-2{background-color:#0288d1!important}.light-blue.darken-3{background-color:#0277bd!important}.light-blue.darken-4{background-color:#01579b!important}.light-blue.accent-1{background-color:#80d8ff!important}.light-blue.accent-2{background-color:#40c4ff!important}.light-blue.accent-3{background-color:#00b0ff!important}.light-blue.accent-4{background-color:#0091ea!important}.cyan.lighten-5{background-color:#e0f7fa!important}.cyan.lighten-4{background-color:#b2ebf2!important}.cyan.lighten-3{background-color:#80deea!important}.cyan.lighten-2{background-color:#4dd0e1!important}.cyan.lighten-1{background-color:#26c6da!important}.cyan{background-color:#00bcd4!important}.cyan-text{color:#00bcd4!important}.rgba-cyan-slight,.rgba-cyan-slight:after{background-color:rgba(0,188,212,.1)}.rgba-cyan-light,.rgba-cyan-light:after{background-color:rgba(0,188,212,.3)}.rgba-cyan-strong,.rgba-cyan-strong:after{background-color:rgba(0,188,212,.7)}.cyan.darken-1{background-color:#00acc1!important}.cyan.darken-2{background-color:#0097a7!important}.cyan.darken-3{background-color:#00838f!important}.cyan.darken-4{background-color:#006064!important}.cyan.accent-1{background-color:#84ffff!important}.cyan.accent-2{background-color:#18ffff!important}.cyan.accent-3{background-color:#00e5ff!important}.cyan.accent-4{background-color:#00b8d4!important}.teal.lighten-5{background-color:#e0f2f1!important}.teal.lighten-4{background-color:#b2dfdb!important}.teal.lighten-3{background-color:#80cbc4!important}.teal.lighten-2{background-color:#4db6ac!important}.teal.lighten-1{background-color:#26a69a!important}.teal{background-color:#009688!important}.teal-text{color:#009688!important}.rgba-teal-slight,.rgba-teal-slight:after{background-color:rgba(0,150,136,.1)}.rgba-teal-light,.rgba-teal-light:after{background-color:rgba(0,150,136,.3)}.rgba-teal-strong,.rgba-teal-strong:after{background-color:rgba(0,150,136,.7)}.teal.darken-1{background-color:#00897b!important}.teal.darken-2{background-color:#00796b!important}.teal.darken-3{background-color:#00695c!important}.teal.darken-4{background-color:#004d40!important}.teal.accent-1{background-color:#a7ffeb!important}.teal.accent-2{background-color:#64ffda!important}.teal.accent-3{background-color:#1de9b6!important}.teal.accent-4{background-color:#00bfa5!important}.green.lighten-5{background-color:#e8f5e9!important}.green.lighten-4{background-color:#c8e6c9!important}.green.lighten-3{background-color:#a5d6a7!important}.green.lighten-2{background-color:#81c784!important}.green.lighten-1{background-color:#66bb6a!important}.green{background-color:#4caf50!important}.green-text{color:#4caf50!important}.rgba-green-slight,.rgba-green-slight:after{background-color:rgba(76,175,80,.1)}.rgba-green-light,.rgba-green-light:after{background-color:rgba(76,175,80,.3)}.rgba-green-strong,.rgba-green-strong:after{background-color:rgba(76,175,80,.7)}.green.darken-1{background-color:#43a047!important}.green.darken-2{background-color:#388e3c!important}.green.darken-3{background-color:#2e7d32!important}.green.darken-4{background-color:#1b5e20!important}.green.accent-1{background-color:#b9f6ca!important}.green.accent-2{background-color:#69f0ae!important}.green.accent-3{background-color:#00e676!important}.green.accent-4{background-color:#00c853!important}.light-green.lighten-5{background-color:#f1f8e9!important}.light-green.lighten-4{background-color:#dcedc8!important}.light-green.lighten-3{background-color:#c5e1a5!important}.light-green.lighten-2{background-color:#aed581!important}.light-green.lighten-1{background-color:#9ccc65!important}.light-green{background-color:#8bc34a!important}.light-green-text{color:#8bc34a!important}.rgba-light-green-slight,.rgba-light-green-slight:after{background-color:rgba(139,195,74,.1)}.rgba-light-green-light,.rgba-light-green-light:after{background-color:rgba(139,195,74,.3)}.rgba-light-green-strong,.rgba-light-green-strong:after{background-color:rgba(139,195,74,.7)}.light-green.darken-1{background-color:#7cb342!important}.light-green.darken-2{background-color:#689f38!important}.light-green.darken-3{background-color:#558b2f!important}.light-green.darken-4{background-color:#33691e!important}.light-green.accent-1{background-color:#ccff90!important}.light-green.accent-2{background-color:#b2ff59!important}.light-green.accent-3{background-color:#76ff03!important}.light-green.accent-4{background-color:#64dd17!important}.lime.lighten-5{background-color:#f9fbe7!important}.lime.lighten-4{background-color:#f0f4c3!important}.lime.lighten-3{background-color:#e6ee9c!important}.lime.lighten-2{background-color:#dce775!important}.lime.lighten-1{background-color:#d4e157!important}.lime{background-color:#cddc39!important}.lime-text{color:#cddc39!important}.rgba-lime-slight,.rgba-lime-slight:after{background-color:rgba(205,220,57,.1)}.rgba-lime-light,.rgba-lime-light:after{background-color:rgba(205,220,57,.3)}.rgba-lime-strong,.rgba-lime-strong:after{background-color:rgba(205,220,57,.7)}.lime.darken-1{background-color:#c0ca33!important}.lime.darken-2{background-color:#afb42b!important}.lime.darken-3{background-color:#9e9d24!important}.lime.darken-4{background-color:#827717!important}.lime.accent-1{background-color:#f4ff81!important}.lime.accent-2{background-color:#eeff41!important}.lime.accent-3{background-color:#c6ff00!important}.lime.accent-4{background-color:#aeea00!important}.yellow.lighten-5{background-color:#fffde7!important}.yellow.lighten-4{background-color:#fff9c4!important}.yellow.lighten-3{background-color:#fff59d!important}.yellow.lighten-2{background-color:#fff176!important}.yellow.lighten-1{background-color:#ffee58!important}.yellow{background-color:#ffeb3b!important}.yellow-text{color:#ffeb3b!important}.rgba-yellow-slight,.rgba-yellow-slight:after{background-color:rgba(255,235,59,.1)}.rgba-yellow-light,.rgba-yellow-light:after{background-color:rgba(255,235,59,.3)}.rgba-yellow-strong,.rgba-yellow-strong:after{background-color:rgba(255,235,59,.7)}.yellow.darken-1{background-color:#fdd835!important}.yellow.darken-2{background-color:#fbc02d!important}.yellow.darken-3{background-color:#f9a825!important}.yellow.darken-4{background-color:#f57f17!important}.yellow.accent-1{background-color:#ffff8d!important}.yellow.accent-2{background-color:#ff0!important}.yellow.accent-3{background-color:#ffea00!important}.yellow.accent-4{background-color:#ffd600!important}.amber.lighten-5{background-color:#fff8e1!important}.amber.lighten-4{background-color:#ffecb3!important}.amber.lighten-3{background-color:#ffe082!important}.amber.lighten-2{background-color:#ffd54f!important}.amber.lighten-1{background-color:#ffca28!important}.amber{background-color:#ffc107!important}.amber-text{color:#ffc107!important}.rgba-amber-slight,.rgba-amber-slight:after{background-color:rgba(255,193,7,.1)}.rgba-amber-light,.rgba-amber-light:after{background-color:rgba(255,193,7,.3)}.rgba-amber-strong,.rgba-amber-strong:after{background-color:rgba(255,193,7,.7)}.amber.darken-1{background-color:#ffb300!important}.amber.darken-2{background-color:#ffa000!important}.amber.darken-3{background-color:#ff8f00!important}.amber.darken-4{background-color:#ff6f00!important}.amber.accent-1{background-color:#ffe57f!important}.amber.accent-2{background-color:#ffd740!important}.amber.accent-3{background-color:#ffc400!important}.amber.accent-4{background-color:#ffab00!important}.orange.lighten-5{background-color:#fff3e0!important}.orange.lighten-4{background-color:#ffe0b2!important}.orange.lighten-3{background-color:#ffcc80!important}.orange.lighten-2{background-color:#ffb74d!important}.orange.lighten-1{background-color:#ffa726!important}.orange{background-color:#ff9800!important}.orange-text{color:#ff9800!important}.rgba-orange-slight,.rgba-orange-slight:after{background-color:rgba(255,152,0,.1)}.rgba-orange-light,.rgba-orange-light:after{background-color:rgba(255,152,0,.3)}.rgba-orange-strong,.rgba-orange-strong:after{background-color:rgba(255,152,0,.7)}.orange.darken-1{background-color:#fb8c00!important}.orange.darken-2{background-color:#f57c00!important}.orange.darken-3{background-color:#ef6c00!important}.orange.darken-4{background-color:#e65100!important}.orange.accent-1{background-color:#ffd180!important}.orange.accent-2{background-color:#ffab40!important}.orange.accent-3{background-color:#ff9100!important}.orange.accent-4{background-color:#ff6d00!important}.deep-orange.lighten-5{background-color:#fbe9e7!important}.deep-orange.lighten-4{background-color:#ffccbc!important}.deep-orange.lighten-3{background-color:#ffab91!important}.deep-orange.lighten-2{background-color:#ff8a65!important}.deep-orange.lighten-1{background-color:#ff7043!important}.deep-orange{background-color:#ff5722!important}.deep-orange-text{color:#ff5722!important}.rgba-deep-orange-slight,.rgba-deep-orange-slight:after{background-color:rgba(255,87,34,.1)}.rgba-deep-orange-light,.rgba-deep-orange-light:after{background-color:rgba(255,87,34,.3)}.rgba-deep-orange-strong,.rgba-deep-orange-strong:after{background-color:rgba(255,87,34,.7)}.deep-orange.darken-1{background-color:#f4511e!important}.deep-orange.darken-2{background-color:#e64a19!important}.deep-orange.darken-3{background-color:#d84315!important}.deep-orange.darken-4{background-color:#bf360c!important}.deep-orange.accent-1{background-color:#ff9e80!important}.deep-orange.accent-2{background-color:#ff6e40!important}.deep-orange.accent-3{background-color:#ff3d00!important}.deep-orange.accent-4{background-color:#dd2c00!important}.brown.lighten-5{background-color:#efebe9!important}.brown.lighten-4{background-color:#d7ccc8!important}.brown.lighten-3{background-color:#bcaaa4!important}.brown.lighten-2{background-color:#a1887f!important}.brown.lighten-1{background-color:#8d6e63!important}.brown{background-color:#795548!important}.brown-text{color:#795548!important}.rgba-brown-slight,.rgba-brown-slight:after{background-color:rgba(121,85,72,.1)}.rgba-brown-light,.rgba-brown-light:after{background-color:rgba(121,85,72,.3)}.rgba-brown-strong,.rgba-brown-strong:after{background-color:rgba(121,85,72,.7)}.brown.darken-1{background-color:#6d4c41!important}.brown.darken-2{background-color:#5d4037!important}.brown.darken-3{background-color:#4e342e!important}.brown.darken-4{background-color:#3e2723!important}.blue-grey.lighten-5{background-color:#eceff1!important}.blue-grey.lighten-4{background-color:#cfd8dc!important}.blue-grey.lighten-3{background-color:#b0bec5!important}.blue-grey.lighten-2{background-color:#90a4ae!important}.blue-grey.lighten-1{background-color:#78909c!important}.blue-grey{background-color:#607d8b!important}.blue-grey-text{color:#607d8b!important}.rgba-blue-grey-slight,.rgba-blue-grey-slight:after{background-color:rgba(96,125,139,.1)}.rgba-blue-grey-light,.rgba-blue-grey-light:after{background-color:rgba(96,125,139,.3)}.rgba-blue-grey-strong,.rgba-blue-grey-strong:after{background-color:rgba(96,125,139,.7)}.blue-grey.darken-1{background-color:#546e7a!important}.blue-grey.darken-2{background-color:#455a64!important}.blue-grey.darken-3{background-color:#37474f!important}.blue-grey.darken-4{background-color:#263238!important}.grey.lighten-5{background-color:#fafafa!important}.grey.lighten-4{background-color:#f5f5f5!important}.grey.lighten-3{background-color:#eee!important}.grey.lighten-2{background-color:#e0e0e0!important}.grey.lighten-1{background-color:#bdbdbd!important}.grey{background-color:#9e9e9e!important}.grey-text{color:#9e9e9e!important}.rgba-grey-slight,.rgba-grey-slight:after{background-color:rgba(158,158,158,.1)}.rgba-grey-light,.rgba-grey-light:after{background-color:rgba(158,158,158,.3)}.rgba-grey-strong,.rgba-grey-strong:after{background-color:rgba(158,158,158,.7)}.grey.darken-1{background-color:#757575!important}.grey.darken-2{background-color:#616161!important}.grey.darken-3{background-color:#424242!important}.grey.darken-4{background-color:#212121!important}.black{background-color:#000!important}.black-text,.btn.btn-link{color:#000!important}.rgba-black-slight,.rgba-black-slight:after{background-color:rgba(0,0,0,.1)}.rgba-black-light,.rgba-black-light:after{background-color:rgba(0,0,0,.3)}.rgba-black-strong,.rgba-black-strong:after{background-color:rgba(0,0,0,.7)}.white{background-color:#fff!important}.white-text{color:#fff!important}.rgba-white-slight,.rgba-white-slight:after{background-color:rgba(255,255,255,.1)}.rgba-white-light,.rgba-white-light:after{background-color:rgba(255,255,255,.3)}.rgba-white-strong,.rgba-white-strong:after{background-color:rgba(255,255,255,.7)}.rgba-stylish-slight{background-color:rgba(62,69,81,.1)}.rgba-stylish-light{background-color:rgba(62,69,81,.3)}.rgba-stylish-strong{background-color:rgba(62,69,81,.7)}.primary-color{background-color:#4285f4!important}.primary-color-dark{background-color:#0d47a1!important}.secondary-color{background-color:#a6c!important}.secondary-color-dark{background-color:#93c!important}.default-color{background-color:#2bbbad!important}.default-color-dark{background-color:#00695c!important}.info-color{background-color:#33b5e5!important}.info-color-dark{background-color:#09c!important}.success-color{background-color:#00c851!important}.success-color-dark{background-color:#007e33!important}.warning-color{background-color:#fb3!important}.warning-color-dark{background-color:#f80!important}.danger-color{background-color:#ff3547!important}.danger-color-dark{background-color:#c00!important}.elegant-color{background-color:#2e2e2e!important}.elegant-color-dark{background-color:#212121!important}.stylish-color{background-color:#4b515d!important}.stylish-color-dark{background-color:#3e4551!important}.unique-color{background-color:#3f729b!important}.unique-color-dark{background-color:#1c2331!important}.special-color{background-color:#37474f!important}.special-color-dark{background-color:#263238!important}.purple-gradient{background:linear-gradient(40deg,#ff6ec4,#7873f5)!important}.peach-gradient{background:linear-gradient(40deg,#ffd86f,#fc6262)!important}.aqua-gradient{background:linear-gradient(40deg,#2096ff,#05ffa3)!important}.blue-gradient{background:linear-gradient(40deg,#45cafc,#303f9f)!important}.purple-gradient-rgba{background:linear-gradient(40deg,rgba(255,110,196,.9),rgba(120,115,245,.9))!important}.peach-gradient-rgba{background:linear-gradient(40deg,rgba(255,216,111,.9),rgba(252,98,98,.9))!important}.aqua-gradient-rgba{background:linear-gradient(40deg,rgba(32,150,255,.9),rgba(5,255,163,.9))!important}.blue-gradient-rgba{background:linear-gradient(40deg,rgba(69,202,252,.9),rgba(48,63,159,.9))!important}.dark-grey-text,.dark-grey-text:focus,.dark-grey-text:hover{color:#4f4f4f!important}.hoverable{box-shadow:none;transition:.55s ease-in-out}.hoverable:hover{box-shadow:0 8px 17px 0 rgba(0,0,0,.2),0 6px 20px 0 rgba(0,0,0,.19);transition:.55s ease-in-out}.z-depth-0{box-shadow:none!important}.z-depth-1{box-shadow:0 2px 5px 0 rgba(0,0,0,.16),0 2px 10px 0 rgba(0,0,0,.12)!important}.z-depth-1-half{box-shadow:0 5px 11px 0 rgba(0,0,0,.18),0 4px 15px 0 rgba(0,0,0,.15)!important}.z-depth-2{box-shadow:0 8px 17px 0 rgba(0,0,0,.2),0 6px 20px 0 rgba(0,0,0,.19)!important}.z-depth-3{box-shadow:0 12px 15px 0 rgba(0,0,0,.24),0 17px 50px 0 rgba(0,0,0,.19)!important}.z-depth-4{box-shadow:0 16px 28px 0 rgba(0,0,0,.22),0 25px 55px 0 rgba(0,0,0,.21)!important}.z-depth-5{box-shadow:0 27px 24px 0 rgba(0,0,0,.2),0 40px 77px 0 rgba(0,0,0,.22)!important}.disabled,:disabled{pointer-events:none!important}a{cursor:pointer;text-decoration:none;color:#0275d8;transition:.2s ease-in-out}a:hover{text-decoration:none;color:#014c8c;transition:.2s ease-in-out}a.disabled:hover,a:disabled:hover{color:#0275d8}a:not([href]):not([tabindex]),a:not([href]):not([tabindex]):focus,a:not([href]):not([tabindex]):hover{color:inherit;text-decoration:none}.btn{box-shadow:0 2px 5px 0 rgba(0,0,0,.16),0 2px 10px 0 rgba(0,0,0,.12);padding:.84rem 2.14rem;font-size:.81rem;transition:.2s ease-in-out;margin:.375rem;border:0;border-radius:.125rem;cursor:pointer;text-transform:uppercase;white-space:normal;word-wrap:break-word;color:inherit}.btn:active,.btn:focus,.btn:hover{box-shadow:0 5px 11px 0 rgba(0,0,0,.18),0 4px 15px 0 rgba(0,0,0,.15);outline:0}.btn:not([disabled]):not(.disabled).active,.btn:not([disabled]):not(.disabled):active{box-shadow:0 5px 11px 0 rgba(0,0,0,.18),0 4px 15px 0 rgba(0,0,0,.15)}.btn .fab,.btn .far,.btn .fas{position:relative;font-size:.9rem}.btn .fab.right,.btn .far.right,.btn .fas.right{margin-left:.3rem}.btn .fab.left,.btn .far.left,.btn .fas.left{margin-right:.3rem}.btn.btn-lg .fab,.btn.btn-lg .far,.btn.btn-lg .fas{font-size:1rem}.btn.btn-md .fab,.btn.btn-md .far,.btn.btn-md .fas{font-size:.8rem}.btn.btn-sm .fab,.btn.btn-sm .far,.btn.btn-sm .fas{font-size:.7rem}.btn.btn-tb{padding:.3rem 1rem}.btn.disabled:active,.btn.disabled:focus,.btn.disabled:hover,.btn:disabled:active,.btn:disabled:focus,.btn:disabled:hover{box-shadow:0 2px 5px 0 rgba(0,0,0,.16),0 2px 10px 0 rgba(0,0,0,.12)}.btn.btn-block{margin:inherit}.btn.btn-link{box-shadow:none;background-color:transparent}.btn.btn-link:active,.btn.btn-link:focus,.btn.btn-link:hover{box-shadow:none!important;background-color:transparent}.btn[class*=btn-outline-]{padding-top:.7rem;padding-bottom:.7rem}.btn[class*=btn-outline-].btn-lg{padding-top:.88rem;padding-bottom:.88rem}.btn[class*=btn-outline-].btn-md{padding-top:.58rem;padding-bottom:.58rem}.btn[class*=btn-outline-].btn-sm{padding-top:.38rem;padding-bottom:.38rem}.btn-group .btn{margin:0}.btn .fa-lg,.btn-floating .fa-lg{font-size:1.33333em!important}.btn .fa-xs,.btn-floating .fa-xs{font-size:.75em!important}.btn .fa-sm,.btn-floating .fa-sm{font-size:.875em!important}.btn .fa-1x,.btn-floating .fa-1x{font-size:1em!important}.btn .fa-2x,.btn-floating .fa-2x{font-size:2em!important}.btn .fa-3x,.btn-floating .fa-3x{font-size:3em!important}.btn .fa-4x,.btn-floating .fa-4x{font-size:4em!important}.btn .fa-5x,.btn-floating .fa-5x{font-size:5em!important}.btn .fa-6x,.btn-floating .fa-6x{font-size:6em!important}.btn .fa-7x,.btn-floating .fa-7x{font-size:7em!important}.btn .fa-8x,.btn-floating .fa-8x{font-size:8em!important}.btn .fa-9x,.btn-floating .fa-9x{font-size:9em!important}.btn .fa-10x,.btn-floating .fa-10x{font-size:10em!important}.btn-primary{background-color:#4285f4!important;color:#fff}.btn-primary:hover{background-color:#5a95f5;color:#fff}.btn-primary.focus,.btn-primary:focus{box-shadow:0 5px 11px 0 rgba(0,0,0,.18),0 4px 15px 0 rgba(0,0,0,.15)}.btn-primary.active,.btn-primary:active,.btn-primary:focus{background-color:#0b51c5}.btn-primary.dropdown-toggle{background-color:#4285f4!important}.btn-primary.dropdown-toggle:focus,.btn-primary.dropdown-toggle:hover{background-color:#5a95f5!important}.btn-primary:not([disabled]):not(.disabled).active,.btn-primary:not([disabled]):not(.disabled):active,.show>.btn-primary.dropdown-toggle{box-shadow:0 5px 11px 0 rgba(0,0,0,.18),0 4px 15px 0 rgba(0,0,0,.15);background-color:#0b51c5!important}.btn-primary:not([disabled]):not(.disabled).active:focus,.btn-primary:not([disabled]):not(.disabled):active:focus,.show>.btn-primary.dropdown-toggle:focus{box-shadow:0 5px 11px 0 rgba(0,0,0,.18),0 4px 15px 0 rgba(0,0,0,.15)}.primary-ic{color:#4285f4!important}.primary-ic:focus,.primary-ic:hover{color:#4285f4}table.table a.btn.btn-primary{color:#fff}.btn-outline-primary{border:2px solid #4285f4!important;background-color:transparent!important;color:#4285f4!important}.btn-outline-primary.active,.btn-outline-primary:active,.btn-outline-primary:active:focus,.btn-outline-primary:focus,.btn-outline-primary:hover{border-color:#4285f4!important;background-color:transparent!important;color:#4285f4!important}.btn-outline-primary:not([disabled]):not(.disabled).active,.btn-outline-primary:not([disabled]):not(.disabled):active,.show>.btn-outline-primary.dropdown-toggle{box-shadow:0 5px 11px 0 rgba(0,0,0,.18),0 4px 15px 0 rgba(0,0,0,.15);background-color:transparent!important;border-color:#4285f4!important}.btn-outline-primary:not([disabled]):not(.disabled).active:focus,.btn-outline-primary:not([disabled]):not(.disabled):active:focus,.show>.btn-outline-primary.dropdown-toggle:focus{box-shadow:0 5px 11px 0 rgba(0,0,0,.18),0 4px 15px 0 rgba(0,0,0,.15)}.btn-danger{background-color:#ff3547!important;color:#fff}.btn-danger:hover{background-color:#ff4f5e;color:#fff}.btn-danger.focus,.btn-danger:focus{box-shadow:0 5px 11px 0 rgba(0,0,0,.18),0 4px 15px 0 rgba(0,0,0,.15)}.btn-danger.active,.btn-danger:active,.btn-danger:focus{background-color:#ce0012}.btn-danger.dropdown-toggle{background-color:#ff3547!important}.btn-danger.dropdown-toggle:focus,.btn-danger.dropdown-toggle:hover{background-color:#ff4f5e!important}.btn-danger:not([disabled]):not(.disabled).active,.btn-danger:not([disabled]):not(.disabled):active,.show>.btn-danger.dropdown-toggle{box-shadow:0 5px 11px 0 rgba(0,0,0,.18),0 4px 15px 0 rgba(0,0,0,.15);background-color:#ce0012!important}.btn-danger:not([disabled]):not(.disabled).active:focus,.btn-danger:not([disabled]):not(.disabled):active:focus,.show>.btn-danger.dropdown-toggle:focus{box-shadow:0 5px 11px 0 rgba(0,0,0,.18),0 4px 15px 0 rgba(0,0,0,.15)}.danger-ic{color:#ff3547!important}.danger-ic:focus,.danger-ic:hover{color:#ff3547}table.table a.btn.btn-danger{color:#fff}.btn-outline-danger{border:2px solid #ff3547!important;background-color:transparent!important;color:#ff3547!important}.btn-outline-danger.active,.btn-outline-danger:active,.btn-outline-danger:active:focus,.btn-outline-danger:focus,.btn-outline-danger:hover{border-color:#ff3547!important;background-color:transparent!important;color:#ff3547!important}.btn-outline-danger:not([disabled]):not(.disabled).active,.btn-outline-danger:not([disabled]):not(.disabled):active,.show>.btn-outline-danger.dropdown-toggle{box-shadow:0 5px 11px 0 rgba(0,0,0,.18),0 4px 15px 0 rgba(0,0,0,.15);background-color:transparent!important;border-color:#ff3547!important}.btn-outline-danger:not([disabled]):not(.disabled).active:focus,.btn-outline-danger:not([disabled]):not(.disabled):active:focus,.show>.btn-outline-danger.dropdown-toggle:focus{box-shadow:0 5px 11px 0 rgba(0,0,0,.18),0 4px 15px 0 rgba(0,0,0,.15)}.btn-warning{background-color:#fb3!important;color:#fff}.btn-warning:hover{background-color:#ffc44d;color:#fff}.btn-warning.focus,.btn-warning:focus{box-shadow:0 5px 11px 0 rgba(0,0,0,.18),0 4px 15px 0 rgba(0,0,0,.15)}.btn-warning.active,.btn-warning:active,.btn-warning:focus{background-color:#c80}.btn-warning.dropdown-toggle{background-color:#fb3!important}.btn-warning.dropdown-toggle:focus,.btn-warning.dropdown-toggle:hover{background-color:#ffc44d!important}.btn-warning:not([disabled]):not(.disabled).active,.btn-warning:not([disabled]):not(.disabled):active,.show>.btn-warning.dropdown-toggle{box-shadow:0 5px 11px 0 rgba(0,0,0,.18),0 4px 15px 0 rgba(0,0,0,.15);background-color:#c80!important}.btn-warning:not([disabled]):not(.disabled).active:focus,.btn-warning:not([disabled]):not(.disabled):active:focus,.show>.btn-warning.dropdown-toggle:focus{box-shadow:0 5px 11px 0 rgba(0,0,0,.18),0 4px 15px 0 rgba(0,0,0,.15)}.warning-ic{color:#fb3!important}.warning-ic:focus,.warning-ic:hover{color:#fb3}table.table a.btn.btn-warning{color:#fff}.btn-outline-warning{border:2px solid #fb3!important;background-color:transparent!important;color:#fb3!important}.btn-outline-warning.active,.btn-outline-warning:active,.btn-outline-warning:active:focus,.btn-outline-warning:focus,.btn-outline-warning:hover{border-color:#fb3!important;background-color:transparent!important;color:#fb3!important}.btn-outline-warning:not([disabled]):not(.disabled).active,.btn-outline-warning:not([disabled]):not(.disabled):active,.show>.btn-outline-warning.dropdown-toggle{box-shadow:0 5px 11px 0 rgba(0,0,0,.18),0 4px 15px 0 rgba(0,0,0,.15);background-color:transparent!important;border-color:#fb3!important}.btn-outline-warning:not([disabled]):not(.disabled).active:focus,.btn-outline-warning:not([disabled]):not(.disabled):active:focus,.show>.btn-outline-warning.dropdown-toggle:focus{box-shadow:0 5px 11px 0 rgba(0,0,0,.18),0 4px 15px 0 rgba(0,0,0,.15)}.btn-success{background-color:#00c851!important;color:#fff}.btn-success:hover{background-color:#00e25b;color:#fff}.btn-success.focus,.btn-success:focus{box-shadow:0 5px 11px 0 rgba(0,0,0,.18),0 4px 15px 0 rgba(0,0,0,.15)}.btn-success.active,.btn-success:active,.btn-success:focus{background-color:#006228}.btn-success.dropdown-toggle{background-color:#00c851!important}.btn-success.dropdown-toggle:focus,.btn-success.dropdown-toggle:hover{background-color:#00e25b!important}.btn-success:not([disabled]):not(.disabled).active,.btn-success:not([disabled]):not(.disabled):active,.show>.btn-success.dropdown-toggle{box-shadow:0 5px 11px 0 rgba(0,0,0,.18),0 4px 15px 0 rgba(0,0,0,.15);background-color:#006228!important}.btn-success:not([disabled]):not(.disabled).active:focus,.btn-success:not([disabled]):not(.disabled):active:focus,.show>.btn-success.dropdown-toggle:focus{box-shadow:0 5px 11px 0 rgba(0,0,0,.18),0 4px 15px 0 rgba(0,0,0,.15)}.success-ic{color:#00c851!important}.success-ic:focus,.success-ic:hover{color:#00c851}table.table a.btn.btn-success{color:#fff}.btn-outline-success{border:2px solid #00c851!important;background-color:transparent!important;color:#00c851!important}.btn-outline-success.active,.btn-outline-success:active,.btn-outline-success:active:focus,.btn-outline-success:focus,.btn-outline-success:hover{border-color:#00c851!important;background-color:transparent!important;color:#00c851!important}.btn-outline-success:not([disabled]):not(.disabled).active,.btn-outline-success:not([disabled]):not(.disabled):active,.show>.btn-outline-success.dropdown-toggle{box-shadow:0 5px 11px 0 rgba(0,0,0,.18),0 4px 15px 0 rgba(0,0,0,.15);background-color:transparent!important;border-color:#00c851!important}.btn-outline-success:not([disabled]):not(.disabled).active:focus,.btn-outline-success:not([disabled]):not(.disabled):active:focus,.show>.btn-outline-success.dropdown-toggle:focus{box-shadow:0 5px 11px 0 rgba(0,0,0,.18),0 4px 15px 0 rgba(0,0,0,.15)}.btn-info{background-color:#33b5e5!important;color:#fff}.btn-info:hover{background-color:#4abde8;color:#fff}.btn-info.focus,.btn-info:focus{box-shadow:0 5px 11px 0 rgba(0,0,0,.18),0 4px 15px 0 rgba(0,0,0,.15)}.btn-info.active,.btn-info:active,.btn-info:focus{background-color:#14799e}.btn-info.dropdown-toggle{background-color:#33b5e5!important}.btn-info.dropdown-toggle:focus,.btn-info.dropdown-toggle:hover{background-color:#4abde8!important}.btn-info:not([disabled]):not(.disabled).active,.btn-info:not([disabled]):not(.disabled):active,.show>.btn-info.dropdown-toggle{box-shadow:0 5px 11px 0 rgba(0,0,0,.18),0 4px 15px 0 rgba(0,0,0,.15);background-color:#14799e!important}.btn-info:not([disabled]):not(.disabled).active:focus,.btn-info:not([disabled]):not(.disabled):active:focus,.show>.btn-info.dropdown-toggle:focus{box-shadow:0 5px 11px 0 rgba(0,0,0,.18),0 4px 15px 0 rgba(0,0,0,.15)}.info-ic{color:#33b5e5!important}.info-ic:focus,.info-ic:hover{color:#33b5e5}table.table a.btn.btn-info{color:#fff}.btn-outline-info{border:2px solid #33b5e5!important;background-color:transparent!important;color:#33b5e5!important}.btn-outline-info.active,.btn-outline-info:active,.btn-outline-info:active:focus,.btn-outline-info:focus,.btn-outline-info:hover{border-color:#33b5e5!important;background-color:transparent!important;color:#33b5e5!important}.btn-outline-info:not([disabled]):not(.disabled).active,.btn-outline-info:not([disabled]):not(.disabled):active,.show>.btn-outline-info.dropdown-toggle{box-shadow:0 5px 11px 0 rgba(0,0,0,.18),0 4px 15px 0 rgba(0,0,0,.15);background-color:transparent!important;border-color:#33b5e5!important}.btn-outline-info:not([disabled]):not(.disabled).active:focus,.btn-outline-info:not([disabled]):not(.disabled):active:focus,.show>.btn-outline-info.dropdown-toggle:focus{box-shadow:0 5px 11px 0 rgba(0,0,0,.18),0 4px 15px 0 rgba(0,0,0,.15)}.btn-default{background-color:#2bbbad!important;color:#fff}.btn-default:hover{background-color:#30cfc0;color:#fff}.btn-default.focus,.btn-default:focus{box-shadow:0 5px 11px 0 rgba(0,0,0,.18),0 4px 15px 0 rgba(0,0,0,.15)}.btn-default.active,.btn-default:active,.btn-default:focus{background-color:#186860}.btn-default.dropdown-toggle{background-color:#2bbbad!important}.btn-default.dropdown-toggle:focus,.btn-default.dropdown-toggle:hover{background-color:#30cfc0!important}.btn-default:not([disabled]):not(.disabled).active,.btn-default:not([disabled]):not(.disabled):active,.show>.btn-default.dropdown-toggle{box-shadow:0 5px 11px 0 rgba(0,0,0,.18),0 4px 15px 0 rgba(0,0,0,.15);background-color:#186860!important}.btn-default:not([disabled]):not(.disabled).active:focus,.btn-default:not([disabled]):not(.disabled):active:focus,.show>.btn-default.dropdown-toggle:focus{box-shadow:0 5px 11px 0 rgba(0,0,0,.18),0 4px 15px 0 rgba(0,0,0,.15)}.default-ic{color:#2bbbad!important}.default-ic:focus,.default-ic:hover{color:#2bbbad}table.table a.btn.btn-default{color:#fff}.btn-outline-default{border:2px solid #2bbbad!important;background-color:transparent!important;color:#2bbbad!important}.btn-outline-default.active,.btn-outline-default:active,.btn-outline-default:active:focus,.btn-outline-default:focus,.btn-outline-default:hover{border-color:#2bbbad!important;background-color:transparent!important;color:#2bbbad!important}.btn-outline-default:not([disabled]):not(.disabled).active,.btn-outline-default:not([disabled]):not(.disabled):active,.show>.btn-outline-default.dropdown-toggle{box-shadow:0 5px 11px 0 rgba(0,0,0,.18),0 4px 15px 0 rgba(0,0,0,.15);background-color:transparent!important;border-color:#2bbbad!important}.btn-outline-default:not([disabled]):not(.disabled).active:focus,.btn-outline-default:not([disabled]):not(.disabled):active:focus,.show>.btn-outline-default.dropdown-toggle:focus{box-shadow:0 5px 11px 0 rgba(0,0,0,.18),0 4px 15px 0 rgba(0,0,0,.15)}.btn-secondary{background-color:#a6c!important;color:#fff}.btn-secondary:hover{background-color:#b579d2;color:#fff}.btn-secondary.focus,.btn-secondary:focus{box-shadow:0 5px 11px 0 rgba(0,0,0,.18),0 4px 15px 0 rgba(0,0,0,.15)}.btn-secondary.active,.btn-secondary:active,.btn-secondary:focus{background-color:#739}.btn-secondary.dropdown-toggle{background-color:#a6c!important}.btn-secondary.dropdown-toggle:focus,.btn-secondary.dropdown-toggle:hover{background-color:#b579d2!important}.btn-secondary:not([disabled]):not(.disabled).active,.btn-secondary:not([disabled]):not(.disabled):active,.show>.btn-secondary.dropdown-toggle{box-shadow:0 5px 11px 0 rgba(0,0,0,.18),0 4px 15px 0 rgba(0,0,0,.15);background-color:#739!important}.btn-secondary:not([disabled]):not(.disabled).active:focus,.btn-secondary:not([disabled]):not(.disabled):active:focus,.show>.btn-secondary.dropdown-toggle:focus{box-shadow:0 5px 11px 0 rgba(0,0,0,.18),0 4px 15px 0 rgba(0,0,0,.15)}.secondary-ic{color:#a6c!important}.secondary-ic:focus,.secondary-ic:hover{color:#a6c}table.table a.btn.btn-secondary{color:#fff}.btn-outline-secondary{border:2px solid #a6c!important;background-color:transparent!important;color:#a6c!important}.btn-outline-secondary.active,.btn-outline-secondary:active,.btn-outline-secondary:active:focus,.btn-outline-secondary:focus,.btn-outline-secondary:hover{border-color:#a6c!important;background-color:transparent!important;color:#a6c!important}.btn-outline-secondary:not([disabled]):not(.disabled).active,.btn-outline-secondary:not([disabled]):not(.disabled):active,.show>.btn-outline-secondary.dropdown-toggle{box-shadow:0 5px 11px 0 rgba(0,0,0,.18),0 4px 15px 0 rgba(0,0,0,.15);background-color:transparent!important;border-color:#a6c!important}.btn-outline-secondary:not([disabled]):not(.disabled).active:focus,.btn-outline-secondary:not([disabled]):not(.disabled):active:focus,.show>.btn-outline-secondary.dropdown-toggle:focus{box-shadow:0 5px 11px 0 rgba(0,0,0,.18),0 4px 15px 0 rgba(0,0,0,.15)}.btn-elegant{background-color:#2e2e2e!important;color:#fff}.btn-elegant:hover{background-color:#3b3b3b;color:#fff}.btn-elegant.focus,.btn-elegant:focus{box-shadow:0 5px 11px 0 rgba(0,0,0,.18),0 4px 15px 0 rgba(0,0,0,.15)}.btn-elegant.active,.btn-elegant:active,.btn-elegant:focus{background-color:#000}.btn-elegant.dropdown-toggle{background-color:#2e2e2e!important}.btn-elegant.dropdown-toggle:focus,.btn-elegant.dropdown-toggle:hover{background-color:#3b3b3b!important}.btn-elegant:not([disabled]):not(.disabled).active,.btn-elegant:not([disabled]):not(.disabled):active,.show>.btn-elegant.dropdown-toggle{box-shadow:0 5px 11px 0 rgba(0,0,0,.18),0 4px 15px 0 rgba(0,0,0,.15);background-color:#000!important}.btn-elegant:not([disabled]):not(.disabled).active:focus,.btn-elegant:not([disabled]):not(.disabled):active:focus,.show>.btn-elegant.dropdown-toggle:focus{box-shadow:0 5px 11px 0 rgba(0,0,0,.18),0 4px 15px 0 rgba(0,0,0,.15)}.elegant-ic{color:#2e2e2e!important}.elegant-ic:focus,.elegant-ic:hover{color:#2e2e2e}table.table a.btn.btn-elegant{color:#fff}.btn-outline-elegant{border:2px solid #2e2e2e!important;background-color:transparent!important;color:#2e2e2e!important}.btn-outline-elegant.active,.btn-outline-elegant:active,.btn-outline-elegant:active:focus,.btn-outline-elegant:focus,.btn-outline-elegant:hover{border-color:#2e2e2e!important;background-color:transparent!important;color:#2e2e2e!important}.btn-outline-elegant:not([disabled]):not(.disabled).active,.btn-outline-elegant:not([disabled]):not(.disabled):active,.show>.btn-outline-elegant.dropdown-toggle{box-shadow:0 5px 11px 0 rgba(0,0,0,.18),0 4px 15px 0 rgba(0,0,0,.15);background-color:transparent!important;border-color:#2e2e2e!important}.btn-outline-elegant:not([disabled]):not(.disabled).active:focus,.btn-outline-elegant:not([disabled]):not(.disabled):active:focus,.show>.btn-outline-elegant.dropdown-toggle:focus{box-shadow:0 5px 11px 0 rgba(0,0,0,.18),0 4px 15px 0 rgba(0,0,0,.15)}.btn-unique{background-color:#880e4f!important;color:#fff}.btn-unique:hover{background-color:#9f105c;color:#fff}.btn-unique.focus,.btn-unique:focus{box-shadow:0 5px 11px 0 rgba(0,0,0,.18),0 4px 15px 0 rgba(0,0,0,.15)}.btn-unique.active,.btn-unique:active,.btn-unique:focus{background-color:#2c0419}.btn-unique.dropdown-toggle{background-color:#880e4f!important}.btn-unique.dropdown-toggle:focus,.btn-unique.dropdown-toggle:hover{background-color:#9f105c!important}.btn-unique:not([disabled]):not(.disabled).active,.btn-unique:not([disabled]):not(.disabled):active,.show>.btn-unique.dropdown-toggle{box-shadow:0 5px 11px 0 rgba(0,0,0,.18),0 4px 15px 0 rgba(0,0,0,.15);background-color:#2c0419!important}.btn-unique:not([disabled]):not(.disabled).active:focus,.btn-unique:not([disabled]):not(.disabled):active:focus,.show>.btn-unique.dropdown-toggle:focus{box-shadow:0 5px 11px 0 rgba(0,0,0,.18),0 4px 15px 0 rgba(0,0,0,.15)}.unique-ic{color:#880e4f!important}.unique-ic:focus,.unique-ic:hover{color:#880e4f}table.table a.btn.btn-unique{color:#fff}.btn-outline-unique{border:2px solid #880e4f!important;background-color:transparent!important;color:#880e4f!important}.btn-outline-unique.active,.btn-outline-unique:active,.btn-outline-unique:active:focus,.btn-outline-unique:focus,.btn-outline-unique:hover{border-color:#880e4f!important;background-color:transparent!important;color:#880e4f!important}.btn-outline-unique:not([disabled]):not(.disabled).active,.btn-outline-unique:not([disabled]):not(.disabled):active,.show>.btn-outline-unique.dropdown-toggle{box-shadow:0 5px 11px 0 rgba(0,0,0,.18),0 4px 15px 0 rgba(0,0,0,.15);background-color:transparent!important;border-color:#880e4f!important}.btn-outline-unique:not([disabled]):not(.disabled).active:focus,.btn-outline-unique:not([disabled]):not(.disabled):active:focus,.show>.btn-outline-unique.dropdown-toggle:focus{box-shadow:0 5px 11px 0 rgba(0,0,0,.18),0 4px 15px 0 rgba(0,0,0,.15)}.btn-dark-green{background-color:#388e3c!important;color:#fff}.btn-dark-green:hover{background-color:#3fa044;color:#fff}.btn-dark-green.focus,.btn-dark-green:focus{box-shadow:0 5px 11px 0 rgba(0,0,0,.18),0 4px 15px 0 rgba(0,0,0,.15)}.btn-dark-green.active,.btn-dark-green:active,.btn-dark-green:focus{background-color:#1b451d}.btn-dark-green.dropdown-toggle{background-color:#388e3c!important}.btn-dark-green.dropdown-toggle:focus,.btn-dark-green.dropdown-toggle:hover{background-color:#3fa044!important}.btn-dark-green:not([disabled]):not(.disabled).active,.btn-dark-green:not([disabled]):not(.disabled):active,.show>.btn-dark-green.dropdown-toggle{box-shadow:0 5px 11px 0 rgba(0,0,0,.18),0 4px 15px 0 rgba(0,0,0,.15);background-color:#1b451d!important}.btn-dark-green:not([disabled]):not(.disabled).active:focus,.btn-dark-green:not([disabled]):not(.disabled):active:focus,.show>.btn-dark-green.dropdown-toggle:focus{box-shadow:0 5px 11px 0 rgba(0,0,0,.18),0 4px 15px 0 rgba(0,0,0,.15)}.dark-green-ic{color:#388e3c!important}.dark-green-ic:focus,.dark-green-ic:hover{color:#388e3c}table.table a.btn.btn-dark-green{color:#fff}.btn-outline-dark-green{border:2px solid #388e3c!important;background-color:transparent!important;color:#388e3c!important}.btn-outline-dark-green.active,.btn-outline-dark-green:active,.btn-outline-dark-green:active:focus,.btn-outline-dark-green:focus,.btn-outline-dark-green:hover{border-color:#388e3c!important;background-color:transparent!important;color:#388e3c!important}.btn-outline-dark-green:not([disabled]):not(.disabled).active,.btn-outline-dark-green:not([disabled]):not(.disabled):active,.show>.btn-outline-dark-green.dropdown-toggle{box-shadow:0 5px 11px 0 rgba(0,0,0,.18),0 4px 15px 0 rgba(0,0,0,.15);background-color:transparent!important;border-color:#388e3c!important}.btn-outline-dark-green:not([disabled]):not(.disabled).active:focus,.btn-outline-dark-green:not([disabled]):not(.disabled):active:focus,.show>.btn-outline-dark-green.dropdown-toggle:focus{box-shadow:0 5px 11px 0 rgba(0,0,0,.18),0 4px 15px 0 rgba(0,0,0,.15)}.btn-mdb-color{background-color:#59698d!important;color:#fff}.btn-mdb-color:hover{background-color:#63759d;color:#fff}.btn-mdb-color.focus,.btn-mdb-color:focus{box-shadow:0 5px 11px 0 rgba(0,0,0,.18),0 4px 15px 0 rgba(0,0,0,.15)}.btn-mdb-color.active,.btn-mdb-color:active,.btn-mdb-color:focus{background-color:#323a4e}.btn-mdb-color.dropdown-toggle{background-color:#59698d!important}.btn-mdb-color.dropdown-toggle:focus,.btn-mdb-color.dropdown-toggle:hover{background-color:#63759d!important}.btn-mdb-color:not([disabled]):not(.disabled).active,.btn-mdb-color:not([disabled]):not(.disabled):active,.show>.btn-mdb-color.dropdown-toggle{box-shadow:0 5px 11px 0 rgba(0,0,0,.18),0 4px 15px 0 rgba(0,0,0,.15);background-color:#323a4e!important}.btn-mdb-color:not([disabled]):not(.disabled).active:focus,.btn-mdb-color:not([disabled]):not(.disabled):active:focus,.show>.btn-mdb-color.dropdown-toggle:focus{box-shadow:0 5px 11px 0 rgba(0,0,0,.18),0 4px 15px 0 rgba(0,0,0,.15)}.mdb-color-ic{color:#59698d!important}.mdb-color-ic:focus,.mdb-color-ic:hover{color:#59698d}table.table a.btn.btn-mdb-color{color:#fff}.btn-outline-mdb-color{border:2px solid #59698d!important;background-color:transparent!important;color:#59698d!important}.btn-outline-mdb-color.active,.btn-outline-mdb-color:active,.btn-outline-mdb-color:active:focus,.btn-outline-mdb-color:focus,.btn-outline-mdb-color:hover{border-color:#59698d!important;background-color:transparent!important;color:#59698d!important}.btn-outline-mdb-color:not([disabled]):not(.disabled).active,.btn-outline-mdb-color:not([disabled]):not(.disabled):active,.show>.btn-outline-mdb-color.dropdown-toggle{box-shadow:0 5px 11px 0 rgba(0,0,0,.18),0 4px 15px 0 rgba(0,0,0,.15);background-color:transparent!important;border-color:#59698d!important}.btn-outline-mdb-color:not([disabled]):not(.disabled).active:focus,.btn-outline-mdb-color:not([disabled]):not(.disabled):active:focus,.show>.btn-outline-mdb-color.dropdown-toggle:focus{box-shadow:0 5px 11px 0 rgba(0,0,0,.18),0 4px 15px 0 rgba(0,0,0,.15)}.btn-red{background-color:#d32f2f!important;color:#fff}.btn-red:hover{background-color:#d74444;color:#fff}.btn-red.focus,.btn-red:focus{box-shadow:0 5px 11px 0 rgba(0,0,0,.18),0 4px 15px 0 rgba(0,0,0,.15)}.btn-red.active,.btn-red:active,.btn-red:focus{background-color:#811b1b}.btn-red.dropdown-toggle{background-color:#d32f2f!important}.btn-red.dropdown-toggle:focus,.btn-red.dropdown-toggle:hover{background-color:#d74444!important}.btn-red:not([disabled]):not(.disabled).active,.btn-red:not([disabled]):not(.disabled):active,.show>.btn-red.dropdown-toggle{box-shadow:0 5px 11px 0 rgba(0,0,0,.18),0 4px 15px 0 rgba(0,0,0,.15);background-color:#811b1b!important}.btn-red:not([disabled]):not(.disabled).active:focus,.btn-red:not([disabled]):not(.disabled):active:focus,.show>.btn-red.dropdown-toggle:focus{box-shadow:0 5px 11px 0 rgba(0,0,0,.18),0 4px 15px 0 rgba(0,0,0,.15)}.red-ic{color:#d32f2f!important}.red-ic:focus,.red-ic:hover{color:#d32f2f}table.table a.btn.btn-red{color:#fff}.btn-outline-red{border:2px solid #d32f2f!important;background-color:transparent!important;color:#d32f2f!important}.btn-outline-red.active,.btn-outline-red:active,.btn-outline-red:active:focus,.btn-outline-red:focus,.btn-outline-red:hover{border-color:#d32f2f!important;background-color:transparent!important;color:#d32f2f!important}.btn-outline-red:not([disabled]):not(.disabled).active,.btn-outline-red:not([disabled]):not(.disabled):active,.show>.btn-outline-red.dropdown-toggle{box-shadow:0 5px 11px 0 rgba(0,0,0,.18),0 4px 15px 0 rgba(0,0,0,.15);background-color:transparent!important;border-color:#d32f2f!important}.btn-outline-red:not([disabled]):not(.disabled).active:focus,.btn-outline-red:not([disabled]):not(.disabled):active:focus,.show>.btn-outline-red.dropdown-toggle:focus{box-shadow:0 5px 11px 0 rgba(0,0,0,.18),0 4px 15px 0 rgba(0,0,0,.15)}.btn-pink{background-color:#ec407a!important;color:#fff}.btn-pink:hover{background-color:#ee578a;color:#fff}.btn-pink.focus,.btn-pink:focus{box-shadow:0 5px 11px 0 rgba(0,0,0,.18),0 4px 15px 0 rgba(0,0,0,.15)}.btn-pink.active,.btn-pink:active,.btn-pink:focus{background-color:#b41249}.btn-pink.dropdown-toggle{background-color:#ec407a!important}.btn-pink.dropdown-toggle:focus,.btn-pink.dropdown-toggle:hover{background-color:#ee578a!important}.btn-pink:not([disabled]):not(.disabled).active,.btn-pink:not([disabled]):not(.disabled):active,.show>.btn-pink.dropdown-toggle{box-shadow:0 5px 11px 0 rgba(0,0,0,.18),0 4px 15px 0 rgba(0,0,0,.15);background-color:#b41249!important}.btn-pink:not([disabled]):not(.disabled).active:focus,.btn-pink:not([disabled]):not(.disabled):active:focus,.show>.btn-pink.dropdown-toggle:focus{box-shadow:0 5px 11px 0 rgba(0,0,0,.18),0 4px 15px 0 rgba(0,0,0,.15)}.pink-ic{color:#ec407a!important}.pink-ic:focus,.pink-ic:hover{color:#ec407a}table.table a.btn.btn-pink{color:#fff}.btn-outline-pink{border:2px solid #ec407a!important;background-color:transparent!important;color:#ec407a!important}.btn-outline-pink.active,.btn-outline-pink:active,.btn-outline-pink:active:focus,.btn-outline-pink:focus,.btn-outline-pink:hover{border-color:#ec407a!important;background-color:transparent!important;color:#ec407a!important}.btn-outline-pink:not([disabled]):not(.disabled).active,.btn-outline-pink:not([disabled]):not(.disabled):active,.show>.btn-outline-pink.dropdown-toggle{box-shadow:0 5px 11px 0 rgba(0,0,0,.18),0 4px 15px 0 rgba(0,0,0,.15);background-color:transparent!important;border-color:#ec407a!important}.btn-outline-pink:not([disabled]):not(.disabled).active:focus,.btn-outline-pink:not([disabled]):not(.disabled):active:focus,.show>.btn-outline-pink.dropdown-toggle:focus{box-shadow:0 5px 11px 0 rgba(0,0,0,.18),0 4px 15px 0 rgba(0,0,0,.15)}.btn-purple{background-color:#8e24aa!important;color:#fff}.btn-purple:hover{background-color:#a028bf;color:#fff}.btn-purple.focus,.btn-purple:focus{box-shadow:0 5px 11px 0 rgba(0,0,0,.18),0 4px 15px 0 rgba(0,0,0,.15)}.btn-purple.active,.btn-purple:active,.btn-purple:focus{background-color:#481256}.btn-purple.dropdown-toggle{background-color:#8e24aa!important}.btn-purple.dropdown-toggle:focus,.btn-purple.dropdown-toggle:hover{background-color:#a028bf!important}.btn-purple:not([disabled]):not(.disabled).active,.btn-purple:not([disabled]):not(.disabled):active,.show>.btn-purple.dropdown-toggle{box-shadow:0 5px 11px 0 rgba(0,0,0,.18),0 4px 15px 0 rgba(0,0,0,.15);background-color:#481256!important}.btn-purple:not([disabled]):not(.disabled).active:focus,.btn-purple:not([disabled]):not(.disabled):active:focus,.show>.btn-purple.dropdown-toggle:focus{box-shadow:0 5px 11px 0 rgba(0,0,0,.18),0 4px 15px 0 rgba(0,0,0,.15)}.purple-ic{color:#8e24aa!important}.purple-ic:focus,.purple-ic:hover{color:#8e24aa}table.table a.btn.btn-purple{color:#fff}.btn-outline-purple{border:2px solid #8e24aa!important;background-color:transparent!important;color:#8e24aa!important}.btn-outline-purple.active,.btn-outline-purple:active,.btn-outline-purple:active:focus,.btn-outline-purple:focus,.btn-outline-purple:hover{border-color:#8e24aa!important;background-color:transparent!important;color:#8e24aa!important}.btn-outline-purple:not([disabled]):not(.disabled).active,.btn-outline-purple:not([disabled]):not(.disabled):active,.show>.btn-outline-purple.dropdown-toggle{box-shadow:0 5px 11px 0 rgba(0,0,0,.18),0 4px 15px 0 rgba(0,0,0,.15);background-color:transparent!important;border-color:#8e24aa!important}.btn-outline-purple:not([disabled]):not(.disabled).active:focus,.btn-outline-purple:not([disabled]):not(.disabled):active:focus,.show>.btn-outline-purple.dropdown-toggle:focus{box-shadow:0 5px 11px 0 rgba(0,0,0,.18),0 4px 15px 0 rgba(0,0,0,.15)}.btn-deep-purple{background-color:#512da8!important;color:#fff}.btn-deep-purple:hover{background-color:#5b32bc;color:#fff}.btn-deep-purple.focus,.btn-deep-purple:focus{box-shadow:0 5px 11px 0 rgba(0,0,0,.18),0 4px 15px 0 rgba(0,0,0,.15)}.btn-deep-purple.active,.btn-deep-purple:active,.btn-deep-purple:focus{background-color:#2a1758}.btn-deep-purple.dropdown-toggle{background-color:#512da8!important}.btn-deep-purple.dropdown-toggle:focus,.btn-deep-purple.dropdown-toggle:hover{background-color:#5b32bc!important}.btn-deep-purple:not([disabled]):not(.disabled).active,.btn-deep-purple:not([disabled]):not(.disabled):active,.show>.btn-deep-purple.dropdown-toggle{box-shadow:0 5px 11px 0 rgba(0,0,0,.18),0 4px 15px 0 rgba(0,0,0,.15);background-color:#2a1758!important}.btn-deep-purple:not([disabled]):not(.disabled).active:focus,.btn-deep-purple:not([disabled]):not(.disabled):active:focus,.show>.btn-deep-purple.dropdown-toggle:focus{box-shadow:0 5px 11px 0 rgba(0,0,0,.18),0 4px 15px 0 rgba(0,0,0,.15)}.deep-purple-ic{color:#512da8!important}.deep-purple-ic:focus,.deep-purple-ic:hover{color:#512da8}table.table a.btn.btn-deep-purple{color:#fff}.btn-outline-deep-purple{border:2px solid #512da8!important;background-color:transparent!important;color:#512da8!important}.btn-outline-deep-purple.active,.btn-outline-deep-purple:active,.btn-outline-deep-purple:active:focus,.btn-outline-deep-purple:focus,.btn-outline-deep-purple:hover{border-color:#512da8!important;background-color:transparent!important;color:#512da8!important}.btn-outline-deep-purple:not([disabled]):not(.disabled).active,.btn-outline-deep-purple:not([disabled]):not(.disabled):active,.show>.btn-outline-deep-purple.dropdown-toggle{box-shadow:0 5px 11px 0 rgba(0,0,0,.18),0 4px 15px 0 rgba(0,0,0,.15);background-color:transparent!important;border-color:#512da8!important}.btn-outline-deep-purple:not([disabled]):not(.disabled).active:focus,.btn-outline-deep-purple:not([disabled]):not(.disabled):active:focus,.show>.btn-outline-deep-purple.dropdown-toggle:focus{box-shadow:0 5px 11px 0 rgba(0,0,0,.18),0 4px 15px 0 rgba(0,0,0,.15)}.btn-indigo{background-color:#3f51b5!important;color:#fff}.btn-indigo:hover{background-color:#4d5ec1;color:#fff}.btn-indigo.focus,.btn-indigo:focus{box-shadow:0 5px 11px 0 rgba(0,0,0,.18),0 4px 15px 0 rgba(0,0,0,.15)}.btn-indigo.active,.btn-indigo:active,.btn-indigo:focus{background-color:#252f69}.btn-indigo.dropdown-toggle{background-color:#3f51b5!important}.btn-indigo.dropdown-toggle:focus,.btn-indigo.dropdown-toggle:hover{background-color:#4d5ec1!important}.btn-indigo:not([disabled]):not(.disabled).active,.btn-indigo:not([disabled]):not(.disabled):active,.show>.btn-indigo.dropdown-toggle{box-shadow:0 5px 11px 0 rgba(0,0,0,.18),0 4px 15px 0 rgba(0,0,0,.15);background-color:#252f69!important}.btn-indigo:not([disabled]):not(.disabled).active:focus,.btn-indigo:not([disabled]):not(.disabled):active:focus,.show>.btn-indigo.dropdown-toggle:focus{box-shadow:0 5px 11px 0 rgba(0,0,0,.18),0 4px 15px 0 rgba(0,0,0,.15)}.indigo-ic{color:#3f51b5!important}.indigo-ic:focus,.indigo-ic:hover{color:#3f51b5}table.table a.btn.btn-indigo{color:#fff}.btn-outline-indigo{border:2px solid #3f51b5!important;background-color:transparent!important;color:#3f51b5!important}.btn-outline-indigo.active,.btn-outline-indigo:active,.btn-outline-indigo:active:focus,.btn-outline-indigo:focus,.btn-outline-indigo:hover{border-color:#3f51b5!important;background-color:transparent!important;color:#3f51b5!important}.btn-outline-indigo:not([disabled]):not(.disabled).active,.btn-outline-indigo:not([disabled]):not(.disabled):active,.show>.btn-outline-indigo.dropdown-toggle{box-shadow:0 5px 11px 0 rgba(0,0,0,.18),0 4px 15px 0 rgba(0,0,0,.15);background-color:transparent!important;border-color:#3f51b5!important}.btn-outline-indigo:not([disabled]):not(.disabled).active:focus,.btn-outline-indigo:not([disabled]):not(.disabled):active:focus,.show>.btn-outline-indigo.dropdown-toggle:focus{box-shadow:0 5px 11px 0 rgba(0,0,0,.18),0 4px 15px 0 rgba(0,0,0,.15)}.btn-blue{background-color:#1976d2!important;color:#fff}.btn-blue:hover{background-color:#2083e4;color:#fff}.btn-blue.focus,.btn-blue:focus{box-shadow:0 5px 11px 0 rgba(0,0,0,.18),0 4px 15px 0 rgba(0,0,0,.15)}.btn-blue.active,.btn-blue:active,.btn-blue:focus{background-color:#0e4377}.btn-blue.dropdown-toggle{background-color:#1976d2!important}.btn-blue.dropdown-toggle:focus,.btn-blue.dropdown-toggle:hover{background-color:#2083e4!important}.btn-blue:not([disabled]):not(.disabled).active,.btn-blue:not([disabled]):not(.disabled):active,.show>.btn-blue.dropdown-toggle{box-shadow:0 5px 11px 0 rgba(0,0,0,.18),0 4px 15px 0 rgba(0,0,0,.15);background-color:#0e4377!important}.btn-blue:not([disabled]):not(.disabled).active:focus,.btn-blue:not([disabled]):not(.disabled):active:focus,.show>.btn-blue.dropdown-toggle:focus{box-shadow:0 5px 11px 0 rgba(0,0,0,.18),0 4px 15px 0 rgba(0,0,0,.15)}.blue-ic{color:#1976d2!important}.blue-ic:focus,.blue-ic:hover{color:#1976d2}table.table a.btn.btn-blue{color:#fff}.btn-outline-blue{border:2px solid #1976d2!important;background-color:transparent!important;color:#1976d2!important}.btn-outline-blue.active,.btn-outline-blue:active,.btn-outline-blue:active:focus,.btn-outline-blue:focus,.btn-outline-blue:hover{border-color:#1976d2!important;background-color:transparent!important;color:#1976d2!important}.btn-outline-blue:not([disabled]):not(.disabled).active,.btn-outline-blue:not([disabled]):not(.disabled):active,.show>.btn-outline-blue.dropdown-toggle{box-shadow:0 5px 11px 0 rgba(0,0,0,.18),0 4px 15px 0 rgba(0,0,0,.15);background-color:transparent!important;border-color:#1976d2!important}.btn-outline-blue:not([disabled]):not(.disabled).active:focus,.btn-outline-blue:not([disabled]):not(.disabled):active:focus,.show>.btn-outline-blue.dropdown-toggle:focus{box-shadow:0 5px 11px 0 rgba(0,0,0,.18),0 4px 15px 0 rgba(0,0,0,.15)}.btn-light-blue{background-color:#82b1ff!important;color:#fff}.btn-light-blue:hover{background-color:#9cc1ff;color:#fff}.btn-light-blue.focus,.btn-light-blue:focus{box-shadow:0 5px 11px 0 rgba(0,0,0,.18),0 4px 15px 0 rgba(0,0,0,.15)}.btn-light-blue.active,.btn-light-blue:active,.btn-light-blue:focus{background-color:#1c71ff}.btn-light-blue.dropdown-toggle{background-color:#82b1ff!important}.btn-light-blue.dropdown-toggle:focus,.btn-light-blue.dropdown-toggle:hover{background-color:#9cc1ff!important}.btn-light-blue:not([disabled]):not(.disabled).active,.btn-light-blue:not([disabled]):not(.disabled):active,.show>.btn-light-blue.dropdown-toggle{box-shadow:0 5px 11px 0 rgba(0,0,0,.18),0 4px 15px 0 rgba(0,0,0,.15);background-color:#1c71ff!important}.btn-light-blue:not([disabled]):not(.disabled).active:focus,.btn-light-blue:not([disabled]):not(.disabled):active:focus,.show>.btn-light-blue.dropdown-toggle:focus{box-shadow:0 5px 11px 0 rgba(0,0,0,.18),0 4px 15px 0 rgba(0,0,0,.15)}.light-blue-ic{color:#82b1ff!important}.light-blue-ic:focus,.light-blue-ic:hover{color:#82b1ff}table.table a.btn.btn-light-blue{color:#fff}.btn-outline-light-blue{border:2px solid #82b1ff!important;background-color:transparent!important;color:#82b1ff!important}.btn-outline-light-blue.active,.btn-outline-light-blue:active,.btn-outline-light-blue:active:focus,.btn-outline-light-blue:focus,.btn-outline-light-blue:hover{border-color:#82b1ff!important;background-color:transparent!important;color:#82b1ff!important}.btn-outline-light-blue:not([disabled]):not(.disabled).active,.btn-outline-light-blue:not([disabled]):not(.disabled):active,.show>.btn-outline-light-blue.dropdown-toggle{box-shadow:0 5px 11px 0 rgba(0,0,0,.18),0 4px 15px 0 rgba(0,0,0,.15);background-color:transparent!important;border-color:#82b1ff!important}.btn-outline-light-blue:not([disabled]):not(.disabled).active:focus,.btn-outline-light-blue:not([disabled]):not(.disabled):active:focus,.show>.btn-outline-light-blue.dropdown-toggle:focus{box-shadow:0 5px 11px 0 rgba(0,0,0,.18),0 4px 15px 0 rgba(0,0,0,.15)}.btn-cyan{background-color:#00bcd4!important;color:#fff}.btn-cyan:hover{background-color:#00d3ee;color:#fff}.btn-cyan.focus,.btn-cyan:focus{box-shadow:0 5px 11px 0 rgba(0,0,0,.18),0 4px 15px 0 rgba(0,0,0,.15)}.btn-cyan.active,.btn-cyan:active,.btn-cyan:focus{background-color:#00626e}.btn-cyan.dropdown-toggle{background-color:#00bcd4!important}.btn-cyan.dropdown-toggle:focus,.btn-cyan.dropdown-toggle:hover{background-color:#00d3ee!important}.btn-cyan:not([disabled]):not(.disabled).active,.btn-cyan:not([disabled]):not(.disabled):active,.show>.btn-cyan.dropdown-toggle{box-shadow:0 5px 11px 0 rgba(0,0,0,.18),0 4px 15px 0 rgba(0,0,0,.15);background-color:#00626e!important}.btn-cyan:not([disabled]):not(.disabled).active:focus,.btn-cyan:not([disabled]):not(.disabled):active:focus,.show>.btn-cyan.dropdown-toggle:focus{box-shadow:0 5px 11px 0 rgba(0,0,0,.18),0 4px 15px 0 rgba(0,0,0,.15)}.cyan-ic{color:#00bcd4!important}.cyan-ic:focus,.cyan-ic:hover{color:#00bcd4}table.table a.btn.btn-cyan{color:#fff}.btn-outline-cyan{border:2px solid #00bcd4!important;background-color:transparent!important;color:#00bcd4!important}.btn-outline-cyan.active,.btn-outline-cyan:active,.btn-outline-cyan:active:focus,.btn-outline-cyan:focus,.btn-outline-cyan:hover{border-color:#00bcd4!important;background-color:transparent!important;color:#00bcd4!important}.btn-outline-cyan:not([disabled]):not(.disabled).active,.btn-outline-cyan:not([disabled]):not(.disabled):active,.show>.btn-outline-cyan.dropdown-toggle{box-shadow:0 5px 11px 0 rgba(0,0,0,.18),0 4px 15px 0 rgba(0,0,0,.15);background-color:transparent!important;border-color:#00bcd4!important}.btn-outline-cyan:not([disabled]):not(.disabled).active:focus,.btn-outline-cyan:not([disabled]):not(.disabled):active:focus,.show>.btn-outline-cyan.dropdown-toggle:focus{box-shadow:0 5px 11px 0 rgba(0,0,0,.18),0 4px 15px 0 rgba(0,0,0,.15)}.btn-teal{background-color:#00796b!important;color:#fff}.btn-teal:hover{background-color:#009382;color:#fff}.btn-teal.focus,.btn-teal:focus{box-shadow:0 5px 11px 0 rgba(0,0,0,.18),0 4px 15px 0 rgba(0,0,0,.15)}.btn-teal.active,.btn-teal:active,.btn-teal:focus{background-color:#001311}.btn-teal.dropdown-toggle{background-color:#00796b!important}.btn-teal.dropdown-toggle:focus,.btn-teal.dropdown-toggle:hover{background-color:#009382!important}.btn-teal:not([disabled]):not(.disabled).active,.btn-teal:not([disabled]):not(.disabled):active,.show>.btn-teal.dropdown-toggle{box-shadow:0 5px 11px 0 rgba(0,0,0,.18),0 4px 15px 0 rgba(0,0,0,.15);background-color:#001311!important}.btn-teal:not([disabled]):not(.disabled).active:focus,.btn-teal:not([disabled]):not(.disabled):active:focus,.show>.btn-teal.dropdown-toggle:focus{box-shadow:0 5px 11px 0 rgba(0,0,0,.18),0 4px 15px 0 rgba(0,0,0,.15)}.teal-ic{color:#00796b!important}.teal-ic:focus,.teal-ic:hover{color:#00796b}table.table a.btn.btn-teal{color:#fff}.btn-outline-teal{border:2px solid #00796b!important;background-color:transparent!important;color:#00796b!important}.btn-outline-teal.active,.btn-outline-teal:active,.btn-outline-teal:active:focus,.btn-outline-teal:focus,.btn-outline-teal:hover{border-color:#00796b!important;background-color:transparent!important;color:#00796b!important}.btn-outline-teal:not([disabled]):not(.disabled).active,.btn-outline-teal:not([disabled]):not(.disabled):active,.show>.btn-outline-teal.dropdown-toggle{box-shadow:0 5px 11px 0 rgba(0,0,0,.18),0 4px 15px 0 rgba(0,0,0,.15);background-color:transparent!important;border-color:#00796b!important}.btn-outline-teal:not([disabled]):not(.disabled).active:focus,.btn-outline-teal:not([disabled]):not(.disabled):active:focus,.show>.btn-outline-teal.dropdown-toggle:focus{box-shadow:0 5px 11px 0 rgba(0,0,0,.18),0 4px 15px 0 rgba(0,0,0,.15)}.btn-green{background-color:#388e3c!important;color:#fff}.btn-green:hover{background-color:#3fa044;color:#fff}.btn-green.focus,.btn-green:focus{box-shadow:0 5px 11px 0 rgba(0,0,0,.18),0 4px 15px 0 rgba(0,0,0,.15)}.btn-green.active,.btn-green:active,.btn-green:focus{background-color:#1b451d}.btn-green.dropdown-toggle{background-color:#388e3c!important}.btn-green.dropdown-toggle:focus,.btn-green.dropdown-toggle:hover{background-color:#3fa044!important}.btn-green:not([disabled]):not(.disabled).active,.btn-green:not([disabled]):not(.disabled):active,.show>.btn-green.dropdown-toggle{box-shadow:0 5px 11px 0 rgba(0,0,0,.18),0 4px 15px 0 rgba(0,0,0,.15);background-color:#1b451d!important}.btn-green:not([disabled]):not(.disabled).active:focus,.btn-green:not([disabled]):not(.disabled):active:focus,.show>.btn-green.dropdown-toggle:focus{box-shadow:0 5px 11px 0 rgba(0,0,0,.18),0 4px 15px 0 rgba(0,0,0,.15)}.green-ic{color:#388e3c!important}.green-ic:focus,.green-ic:hover{color:#388e3c}table.table a.btn.btn-green{color:#fff}.btn-outline-green{border:2px solid #388e3c!important;background-color:transparent!important;color:#388e3c!important}.btn-outline-green.active,.btn-outline-green:active,.btn-outline-green:active:focus,.btn-outline-green:focus,.btn-outline-green:hover{border-color:#388e3c!important;background-color:transparent!important;color:#388e3c!important}.btn-outline-green:not([disabled]):not(.disabled).active,.btn-outline-green:not([disabled]):not(.disabled):active,.show>.btn-outline-green.dropdown-toggle{box-shadow:0 5px 11px 0 rgba(0,0,0,.18),0 4px 15px 0 rgba(0,0,0,.15);background-color:transparent!important;border-color:#388e3c!important}.btn-outline-green:not([disabled]):not(.disabled).active:focus,.btn-outline-green:not([disabled]):not(.disabled):active:focus,.show>.btn-outline-green.dropdown-toggle:focus{box-shadow:0 5px 11px 0 rgba(0,0,0,.18),0 4px 15px 0 rgba(0,0,0,.15)}.btn-light-green{background-color:#8bc34a!important;color:#fff}.btn-light-green:hover{background-color:#97c95d;color:#fff}.btn-light-green.focus,.btn-light-green:focus{box-shadow:0 5px 11px 0 rgba(0,0,0,.18),0 4px 15px 0 rgba(0,0,0,.15)}.btn-light-green.active,.btn-light-green:active,.btn-light-green:focus{background-color:#577d2a}.btn-light-green.dropdown-toggle{background-color:#8bc34a!important}.btn-light-green.dropdown-toggle:focus,.btn-light-green.dropdown-toggle:hover{background-color:#97c95d!important}.btn-light-green:not([disabled]):not(.disabled).active,.btn-light-green:not([disabled]):not(.disabled):active,.show>.btn-light-green.dropdown-toggle{box-shadow:0 5px 11px 0 rgba(0,0,0,.18),0 4px 15px 0 rgba(0,0,0,.15);background-color:#577d2a!important}.btn-light-green:not([disabled]):not(.disabled).active:focus,.btn-light-green:not([disabled]):not(.disabled):active:focus,.show>.btn-light-green.dropdown-toggle:focus{box-shadow:0 5px 11px 0 rgba(0,0,0,.18),0 4px 15px 0 rgba(0,0,0,.15)}.light-green-ic{color:#8bc34a!important}.light-green-ic:focus,.light-green-ic:hover{color:#8bc34a}table.table a.btn.btn-light-green{color:#fff}.btn-outline-light-green{border:2px solid #8bc34a!important;background-color:transparent!important;color:#8bc34a!important}.btn-outline-light-green.active,.btn-outline-light-green:active,.btn-outline-light-green:active:focus,.btn-outline-light-green:focus,.btn-outline-light-green:hover{border-color:#8bc34a!important;background-color:transparent!important;color:#8bc34a!important}.btn-outline-light-green:not([disabled]):not(.disabled).active,.btn-outline-light-green:not([disabled]):not(.disabled):active,.show>.btn-outline-light-green.dropdown-toggle{box-shadow:0 5px 11px 0 rgba(0,0,0,.18),0 4px 15px 0 rgba(0,0,0,.15);background-color:transparent!important;border-color:#8bc34a!important}.btn-outline-light-green:not([disabled]):not(.disabled).active:focus,.btn-outline-light-green:not([disabled]):not(.disabled):active:focus,.show>.btn-outline-light-green.dropdown-toggle:focus{box-shadow:0 5px 11px 0 rgba(0,0,0,.18),0 4px 15px 0 rgba(0,0,0,.15)}.btn-lime{background-color:#afb42b!important;color:#fff}.btn-lime:hover{background-color:#c3c930;color:#fff}.btn-lime.focus,.btn-lime:focus{box-shadow:0 5px 11px 0 rgba(0,0,0,.18),0 4px 15px 0 rgba(0,0,0,.15)}.btn-lime.active,.btn-lime:active,.btn-lime:focus{background-color:#5f6217}.btn-lime.dropdown-toggle{background-color:#afb42b!important}.btn-lime.dropdown-toggle:focus,.btn-lime.dropdown-toggle:hover{background-color:#c3c930!important}.btn-lime:not([disabled]):not(.disabled).active,.btn-lime:not([disabled]):not(.disabled):active,.show>.btn-lime.dropdown-toggle{box-shadow:0 5px 11px 0 rgba(0,0,0,.18),0 4px 15px 0 rgba(0,0,0,.15);background-color:#5f6217!important}.btn-lime:not([disabled]):not(.disabled).active:focus,.btn-lime:not([disabled]):not(.disabled):active:focus,.show>.btn-lime.dropdown-toggle:focus{box-shadow:0 5px 11px 0 rgba(0,0,0,.18),0 4px 15px 0 rgba(0,0,0,.15)}.lime-ic{color:#afb42b!important}.lime-ic:focus,.lime-ic:hover{color:#afb42b}table.table a.btn.btn-lime{color:#fff}.btn-outline-lime{border:2px solid #afb42b!important;background-color:transparent!important;color:#afb42b!important}.btn-outline-lime.active,.btn-outline-lime:active,.btn-outline-lime:active:focus,.btn-outline-lime:focus,.btn-outline-lime:hover{border-color:#afb42b!important;background-color:transparent!important;color:#afb42b!important}.btn-outline-lime:not([disabled]):not(.disabled).active,.btn-outline-lime:not([disabled]):not(.disabled):active,.show>.btn-outline-lime.dropdown-toggle{box-shadow:0 5px 11px 0 rgba(0,0,0,.18),0 4px 15px 0 rgba(0,0,0,.15);background-color:transparent!important;border-color:#afb42b!important}.btn-outline-lime:not([disabled]):not(.disabled).active:focus,.btn-outline-lime:not([disabled]):not(.disabled):active:focus,.show>.btn-outline-lime.dropdown-toggle:focus{box-shadow:0 5px 11px 0 rgba(0,0,0,.18),0 4px 15px 0 rgba(0,0,0,.15)}.btn-yellow{background-color:#fbc02d!important;color:#fff}.btn-yellow:hover{background-color:#fbc846;color:#fff}.btn-yellow.focus,.btn-yellow:focus{box-shadow:0 5px 11px 0 rgba(0,0,0,.18),0 4px 15px 0 rgba(0,0,0,.15)}.btn-yellow.active,.btn-yellow:active,.btn-yellow:focus{background-color:#be8904}.btn-yellow.dropdown-toggle{background-color:#fbc02d!important}.btn-yellow.dropdown-toggle:focus,.btn-yellow.dropdown-toggle:hover{background-color:#fbc846!important}.btn-yellow:not([disabled]):not(.disabled).active,.btn-yellow:not([disabled]):not(.disabled):active,.show>.btn-yellow.dropdown-toggle{box-shadow:0 5px 11px 0 rgba(0,0,0,.18),0 4px 15px 0 rgba(0,0,0,.15);background-color:#be8904!important}.btn-yellow:not([disabled]):not(.disabled).active:focus,.btn-yellow:not([disabled]):not(.disabled):active:focus,.show>.btn-yellow.dropdown-toggle:focus{box-shadow:0 5px 11px 0 rgba(0,0,0,.18),0 4px 15px 0 rgba(0,0,0,.15)}.yellow-ic{color:#fbc02d!important}.yellow-ic:focus,.yellow-ic:hover{color:#fbc02d}table.table a.btn.btn-yellow{color:#fff}.btn-outline-yellow{border:2px solid #fbc02d!important;background-color:transparent!important;color:#fbc02d!important}.btn-outline-yellow.active,.btn-outline-yellow:active,.btn-outline-yellow:active:focus,.btn-outline-yellow:focus,.btn-outline-yellow:hover{border-color:#fbc02d!important;background-color:transparent!important;color:#fbc02d!important}.btn-outline-yellow:not([disabled]):not(.disabled).active,.btn-outline-yellow:not([disabled]):not(.disabled):active,.show>.btn-outline-yellow.dropdown-toggle{box-shadow:0 5px 11px 0 rgba(0,0,0,.18),0 4px 15px 0 rgba(0,0,0,.15);background-color:transparent!important;border-color:#fbc02d!important}.btn-outline-yellow:not([disabled]):not(.disabled).active:focus,.btn-outline-yellow:not([disabled]):not(.disabled):active:focus,.show>.btn-outline-yellow.dropdown-toggle:focus{box-shadow:0 5px 11px 0 rgba(0,0,0,.18),0 4px 15px 0 rgba(0,0,0,.15)}.btn-amber{background-color:#ffa000!important;color:#fff}.btn-amber:hover{background-color:#ffaa1a;color:#fff}.btn-amber.focus,.btn-amber:focus{box-shadow:0 5px 11px 0 rgba(0,0,0,.18),0 4px 15px 0 rgba(0,0,0,.15)}.btn-amber.active,.btn-amber:active,.btn-amber:focus{background-color:#996000}.btn-amber.dropdown-toggle{background-color:#ffa000!important}.btn-amber.dropdown-toggle:focus,.btn-amber.dropdown-toggle:hover{background-color:#ffaa1a!important}.btn-amber:not([disabled]):not(.disabled).active,.btn-amber:not([disabled]):not(.disabled):active,.show>.btn-amber.dropdown-toggle{box-shadow:0 5px 11px 0 rgba(0,0,0,.18),0 4px 15px 0 rgba(0,0,0,.15);background-color:#996000!important}.btn-amber:not([disabled]):not(.disabled).active:focus,.btn-amber:not([disabled]):not(.disabled):active:focus,.show>.btn-amber.dropdown-toggle:focus{box-shadow:0 5px 11px 0 rgba(0,0,0,.18),0 4px 15px 0 rgba(0,0,0,.15)}.amber-ic{color:#ffa000!important}.amber-ic:focus,.amber-ic:hover{color:#ffa000}table.table a.btn.btn-amber{color:#fff}.btn-outline-amber{border:2px solid #ffa000!important;background-color:transparent!important;color:#ffa000!important}.btn-outline-amber.active,.btn-outline-amber:active,.btn-outline-amber:active:focus,.btn-outline-amber:focus,.btn-outline-amber:hover{border-color:#ffa000!important;background-color:transparent!important;color:#ffa000!important}.btn-outline-amber:not([disabled]):not(.disabled).active,.btn-outline-amber:not([disabled]):not(.disabled):active,.show>.btn-outline-amber.dropdown-toggle{box-shadow:0 5px 11px 0 rgba(0,0,0,.18),0 4px 15px 0 rgba(0,0,0,.15);background-color:transparent!important;border-color:#ffa000!important}.btn-outline-amber:not([disabled]):not(.disabled).active:focus,.btn-outline-amber:not([disabled]):not(.disabled):active:focus,.show>.btn-outline-amber.dropdown-toggle:focus{box-shadow:0 5px 11px 0 rgba(0,0,0,.18),0 4px 15px 0 rgba(0,0,0,.15)}.btn-orange{background-color:#f57c00!important;color:#fff}.btn-orange:hover{background-color:#ff8910;color:#fff}.btn-orange.focus,.btn-orange:focus{box-shadow:0 5px 11px 0 rgba(0,0,0,.18),0 4px 15px 0 rgba(0,0,0,.15)}.btn-orange.active,.btn-orange:active,.btn-orange:focus{background-color:#8f4800}.btn-orange.dropdown-toggle{background-color:#f57c00!important}.btn-orange.dropdown-toggle:focus,.btn-orange.dropdown-toggle:hover{background-color:#ff8910!important}.btn-orange:not([disabled]):not(.disabled).active,.btn-orange:not([disabled]):not(.disabled):active,.show>.btn-orange.dropdown-toggle{box-shadow:0 5px 11px 0 rgba(0,0,0,.18),0 4px 15px 0 rgba(0,0,0,.15);background-color:#8f4800!important}.btn-orange:not([disabled]):not(.disabled).active:focus,.btn-orange:not([disabled]):not(.disabled):active:focus,.show>.btn-orange.dropdown-toggle:focus{box-shadow:0 5px 11px 0 rgba(0,0,0,.18),0 4px 15px 0 rgba(0,0,0,.15)}.orange-ic{color:#f57c00!important}.orange-ic:focus,.orange-ic:hover{color:#f57c00}table.table a.btn.btn-orange{color:#fff}.btn-outline-orange{border:2px solid #f57c00!important;background-color:transparent!important;color:#f57c00!important}.btn-outline-orange.active,.btn-outline-orange:active,.btn-outline-orange:active:focus,.btn-outline-orange:focus,.btn-outline-orange:hover{border-color:#f57c00!important;background-color:transparent!important;color:#f57c00!important}.btn-outline-orange:not([disabled]):not(.disabled).active,.btn-outline-orange:not([disabled]):not(.disabled):active,.show>.btn-outline-orange.dropdown-toggle{box-shadow:0 5px 11px 0 rgba(0,0,0,.18),0 4px 15px 0 rgba(0,0,0,.15);background-color:transparent!important;border-color:#f57c00!important}.btn-outline-orange:not([disabled]):not(.disabled).active:focus,.btn-outline-orange:not([disabled]):not(.disabled):active:focus,.show>.btn-outline-orange.dropdown-toggle:focus{box-shadow:0 5px 11px 0 rgba(0,0,0,.18),0 4px 15px 0 rgba(0,0,0,.15)}.btn-deep-orange{background-color:#ff7043!important;color:#fff}.btn-deep-orange:hover{background-color:#ff835d;color:#fff}.btn-deep-orange.focus,.btn-deep-orange:focus{box-shadow:0 5px 11px 0 rgba(0,0,0,.18),0 4px 15px 0 rgba(0,0,0,.15)}.btn-deep-orange.active,.btn-deep-orange:active,.btn-deep-orange:focus{background-color:#dc3500}.btn-deep-orange.dropdown-toggle{background-color:#ff7043!important}.btn-deep-orange.dropdown-toggle:focus,.btn-deep-orange.dropdown-toggle:hover{background-color:#ff835d!important}.btn-deep-orange:not([disabled]):not(.disabled).active,.btn-deep-orange:not([disabled]):not(.disabled):active,.show>.btn-deep-orange.dropdown-toggle{box-shadow:0 5px 11px 0 rgba(0,0,0,.18),0 4px 15px 0 rgba(0,0,0,.15);background-color:#dc3500!important}.btn-deep-orange:not([disabled]):not(.disabled).active:focus,.btn-deep-orange:not([disabled]):not(.disabled):active:focus,.show>.btn-deep-orange.dropdown-toggle:focus{box-shadow:0 5px 11px 0 rgba(0,0,0,.18),0 4px 15px 0 rgba(0,0,0,.15)}.deep-orange-ic{color:#ff7043!important}.deep-orange-ic:focus,.deep-orange-ic:hover{color:#ff7043}table.table a.btn.btn-deep-orange{color:#fff}.btn-outline-deep-orange{border:2px solid #ff7043!important;background-color:transparent!important;color:#ff7043!important}.btn-outline-deep-orange.active,.btn-outline-deep-orange:active,.btn-outline-deep-orange:active:focus,.btn-outline-deep-orange:focus,.btn-outline-deep-orange:hover{border-color:#ff7043!important;background-color:transparent!important;color:#ff7043!important}.btn-outline-deep-orange:not([disabled]):not(.disabled).active,.btn-outline-deep-orange:not([disabled]):not(.disabled):active,.show>.btn-outline-deep-orange.dropdown-toggle{box-shadow:0 5px 11px 0 rgba(0,0,0,.18),0 4px 15px 0 rgba(0,0,0,.15);background-color:transparent!important;border-color:#ff7043!important}.btn-outline-deep-orange:not([disabled]):not(.disabled).active:focus,.btn-outline-deep-orange:not([disabled]):not(.disabled):active:focus,.show>.btn-outline-deep-orange.dropdown-toggle:focus{box-shadow:0 5px 11px 0 rgba(0,0,0,.18),0 4px 15px 0 rgba(0,0,0,.15)}.btn-brown{background-color:#795548!important;color:#fff}.btn-brown:hover{background-color:#896052;color:#fff}.btn-brown.focus,.btn-brown:focus{box-shadow:0 5px 11px 0 rgba(0,0,0,.18),0 4px 15px 0 rgba(0,0,0,.15)}.btn-brown.active,.btn-brown:active,.btn-brown:focus{background-color:#392822}.btn-brown.dropdown-toggle{background-color:#795548!important}.btn-brown.dropdown-toggle:focus,.btn-brown.dropdown-toggle:hover{background-color:#896052!important}.btn-brown:not([disabled]):not(.disabled).active,.btn-brown:not([disabled]):not(.disabled):active,.show>.btn-brown.dropdown-toggle{box-shadow:0 5px 11px 0 rgba(0,0,0,.18),0 4px 15px 0 rgba(0,0,0,.15);background-color:#392822!important}.btn-brown:not([disabled]):not(.disabled).active:focus,.btn-brown:not([disabled]):not(.disabled):active:focus,.show>.btn-brown.dropdown-toggle:focus{box-shadow:0 5px 11px 0 rgba(0,0,0,.18),0 4px 15px 0 rgba(0,0,0,.15)}.brown-ic{color:#795548!important}.brown-ic:focus,.brown-ic:hover{color:#795548}table.table a.btn.btn-brown{color:#fff}.btn-outline-brown{border:2px solid #795548!important;background-color:transparent!important;color:#795548!important}.btn-outline-brown.active,.btn-outline-brown:active,.btn-outline-brown:active:focus,.btn-outline-brown:focus,.btn-outline-brown:hover{border-color:#795548!important;background-color:transparent!important;color:#795548!important}.btn-outline-brown:not([disabled]):not(.disabled).active,.btn-outline-brown:not([disabled]):not(.disabled):active,.show>.btn-outline-brown.dropdown-toggle{box-shadow:0 5px 11px 0 rgba(0,0,0,.18),0 4px 15px 0 rgba(0,0,0,.15);background-color:transparent!important;border-color:#795548!important}.btn-outline-brown:not([disabled]):not(.disabled).active:focus,.btn-outline-brown:not([disabled]):not(.disabled):active:focus,.show>.btn-outline-brown.dropdown-toggle:focus{box-shadow:0 5px 11px 0 rgba(0,0,0,.18),0 4px 15px 0 rgba(0,0,0,.15)}.btn-grey{background-color:#616161!important;color:#fff}.btn-grey:hover{background-color:#6e6e6e;color:#fff}.btn-grey.focus,.btn-grey:focus{box-shadow:0 5px 11px 0 rgba(0,0,0,.18),0 4px 15px 0 rgba(0,0,0,.15)}.btn-grey.active,.btn-grey:active,.btn-grey:focus{background-color:#2e2e2e}.btn-grey.dropdown-toggle{background-color:#616161!important}.btn-grey.dropdown-toggle:focus,.btn-grey.dropdown-toggle:hover{background-color:#6e6e6e!important}.btn-grey:not([disabled]):not(.disabled).active,.btn-grey:not([disabled]):not(.disabled):active,.show>.btn-grey.dropdown-toggle{box-shadow:0 5px 11px 0 rgba(0,0,0,.18),0 4px 15px 0 rgba(0,0,0,.15);background-color:#2e2e2e!important}.btn-grey:not([disabled]):not(.disabled).active:focus,.btn-grey:not([disabled]):not(.disabled):active:focus,.show>.btn-grey.dropdown-toggle:focus{box-shadow:0 5px 11px 0 rgba(0,0,0,.18),0 4px 15px 0 rgba(0,0,0,.15)}.grey-ic{color:#616161!important}.grey-ic:focus,.grey-ic:hover{color:#616161}table.table a.btn.btn-grey{color:#fff}.btn-outline-grey{border:2px solid #616161!important;background-color:transparent!important;color:#616161!important}.btn-outline-grey.active,.btn-outline-grey:active,.btn-outline-grey:active:focus,.btn-outline-grey:focus,.btn-outline-grey:hover{border-color:#616161!important;background-color:transparent!important;color:#616161!important}.btn-outline-grey:not([disabled]):not(.disabled).active,.btn-outline-grey:not([disabled]):not(.disabled):active,.show>.btn-outline-grey.dropdown-toggle{box-shadow:0 5px 11px 0 rgba(0,0,0,.18),0 4px 15px 0 rgba(0,0,0,.15);background-color:transparent!important;border-color:#616161!important}.btn-outline-grey:not([disabled]):not(.disabled).active:focus,.btn-outline-grey:not([disabled]):not(.disabled):active:focus,.show>.btn-outline-grey.dropdown-toggle:focus{box-shadow:0 5px 11px 0 rgba(0,0,0,.18),0 4px 15px 0 rgba(0,0,0,.15)}.btn-blue-grey{background-color:#78909c!important;color:#fff}.btn-blue-grey:hover{background-color:#879ca7;color:#fff}.btn-blue-grey.focus,.btn-blue-grey:focus{box-shadow:0 5px 11px 0 rgba(0,0,0,.18),0 4px 15px 0 rgba(0,0,0,.15)}.btn-blue-grey.active,.btn-blue-grey:active,.btn-blue-grey:focus{background-color:#4a5b64}.btn-blue-grey.dropdown-toggle{background-color:#78909c!important}.btn-blue-grey.dropdown-toggle:focus,.btn-blue-grey.dropdown-toggle:hover{background-color:#879ca7!important}.btn-blue-grey:not([disabled]):not(.disabled).active,.btn-blue-grey:not([disabled]):not(.disabled):active,.show>.btn-blue-grey.dropdown-toggle{box-shadow:0 5px 11px 0 rgba(0,0,0,.18),0 4px 15px 0 rgba(0,0,0,.15);background-color:#4a5b64!important}.btn-blue-grey:not([disabled]):not(.disabled).active:focus,.btn-blue-grey:not([disabled]):not(.disabled):active:focus,.show>.btn-blue-grey.dropdown-toggle:focus{box-shadow:0 5px 11px 0 rgba(0,0,0,.18),0 4px 15px 0 rgba(0,0,0,.15)}.blue-grey-ic{color:#78909c!important}.blue-grey-ic:focus,.blue-grey-ic:hover{color:#78909c}table.table a.btn.btn-blue-grey{color:#fff}.btn-outline-blue-grey{border:2px solid #78909c!important;background-color:transparent!important;color:#78909c!important}.btn-outline-blue-grey.active,.btn-outline-blue-grey:active,.btn-outline-blue-grey:active:focus,.btn-outline-blue-grey:focus,.btn-outline-blue-grey:hover{border-color:#78909c!important;background-color:transparent!important;color:#78909c!important}.btn-outline-blue-grey:not([disabled]):not(.disabled).active,.btn-outline-blue-grey:not([disabled]):not(.disabled):active,.show>.btn-outline-blue-grey.dropdown-toggle{box-shadow:0 5px 11px 0 rgba(0,0,0,.18),0 4px 15px 0 rgba(0,0,0,.15);background-color:transparent!important;border-color:#78909c!important}.btn-outline-blue-grey:not([disabled]):not(.disabled).active:focus,.btn-outline-blue-grey:not([disabled]):not(.disabled):active:focus,.show>.btn-outline-blue-grey.dropdown-toggle:focus{box-shadow:0 5px 11px 0 rgba(0,0,0,.18),0 4px 15px 0 rgba(0,0,0,.15)}.btn-dark{background-color:#212121!important;color:#fff}.btn-dark:hover{background-color:#2e2e2e;color:#fff}.btn-dark.focus,.btn-dark:focus{box-shadow:0 5px 11px 0 rgba(0,0,0,.18),0 4px 15px 0 rgba(0,0,0,.15)}.btn-dark.active,.btn-dark:active,.btn-dark:focus{background-color:#000}.btn-dark.dropdown-toggle{background-color:#212121!important}.btn-dark.dropdown-toggle:focus,.btn-dark.dropdown-toggle:hover{background-color:#2e2e2e!important}.btn-dark:not([disabled]):not(.disabled).active,.btn-dark:not([disabled]):not(.disabled):active,.show>.btn-dark.dropdown-toggle{box-shadow:0 5px 11px 0 rgba(0,0,0,.18),0 4px 15px 0 rgba(0,0,0,.15);background-color:#000!important}.btn-dark:not([disabled]):not(.disabled).active:focus,.btn-dark:not([disabled]):not(.disabled):active:focus,.show>.btn-dark.dropdown-toggle:focus{box-shadow:0 5px 11px 0 rgba(0,0,0,.18),0 4px 15px 0 rgba(0,0,0,.15)}.dark-ic{color:#212121!important}.dark-ic:focus,.dark-ic:hover{color:#212121}table.table a.btn.btn-dark{color:#fff}.btn-outline-dark{border:2px solid #212121!important;background-color:transparent!important;color:#212121!important}.btn-outline-dark.active,.btn-outline-dark:active,.btn-outline-dark:active:focus,.btn-outline-dark:focus,.btn-outline-dark:hover{border-color:#212121!important;background-color:transparent!important;color:#212121!important}.btn-outline-dark:not([disabled]):not(.disabled).active,.btn-outline-dark:not([disabled]):not(.disabled):active,.show>.btn-outline-dark.dropdown-toggle{box-shadow:0 5px 11px 0 rgba(0,0,0,.18),0 4px 15px 0 rgba(0,0,0,.15);background-color:transparent!important;border-color:#212121!important}.btn-outline-dark:not([disabled]):not(.disabled).active:focus,.btn-outline-dark:not([disabled]):not(.disabled):active:focus,.show>.btn-outline-dark.dropdown-toggle:focus{box-shadow:0 5px 11px 0 rgba(0,0,0,.18),0 4px 15px 0 rgba(0,0,0,.15)}.btn-light{background-color:#e0e0e0!important;color:#000}.btn-light:hover{background-color:#ededed;color:#000}.btn-light.focus,.btn-light:focus{box-shadow:0 5px 11px 0 rgba(0,0,0,.18),0 4px 15px 0 rgba(0,0,0,.15)}.btn-light.active,.btn-light:active,.btn-light:focus{background-color:#adadad}.btn-light.dropdown-toggle{background-color:#e0e0e0!important}.btn-light.dropdown-toggle:focus,.btn-light.dropdown-toggle:hover{background-color:#ededed!important}.btn-light:not([disabled]):not(.disabled).active,.btn-light:not([disabled]):not(.disabled):active,.show>.btn-light.dropdown-toggle{box-shadow:0 5px 11px 0 rgba(0,0,0,.18),0 4px 15px 0 rgba(0,0,0,.15);background-color:#adadad!important}.btn-light:not([disabled]):not(.disabled).active:focus,.btn-light:not([disabled]):not(.disabled):active:focus,.show>.btn-light.dropdown-toggle:focus{box-shadow:0 5px 11px 0 rgba(0,0,0,.18),0 4px 15px 0 rgba(0,0,0,.15)}.light-ic{color:#e0e0e0!important}.light-ic:focus,.light-ic:hover{color:#e0e0e0}table.table a.btn.btn-light{color:#000}.btn-outline-light{border:2px solid #e0e0e0!important;background-color:transparent!important;color:#e0e0e0!important}.btn-outline-light.active,.btn-outline-light:active,.btn-outline-light:active:focus,.btn-outline-light:focus,.btn-outline-light:hover{border-color:#e0e0e0!important;background-color:transparent!important;color:#e0e0e0!important}.btn-outline-light:not([disabled]):not(.disabled).active,.btn-outline-light:not([disabled]):not(.disabled):active,.show>.btn-outline-light.dropdown-toggle{box-shadow:0 5px 11px 0 rgba(0,0,0,.18),0 4px 15px 0 rgba(0,0,0,.15);background-color:transparent!important;border-color:#e0e0e0!important}.btn-outline-light:not([disabled]):not(.disabled).active:focus,.btn-outline-light:not([disabled]):not(.disabled):active:focus,.show>.btn-outline-light.dropdown-toggle:focus{box-shadow:0 5px 11px 0 rgba(0,0,0,.18),0 4px 15px 0 rgba(0,0,0,.15)}.btn-white{background-color:#fff!important;color:#000}.btn-white:hover{background-color:#fff;color:#000}.btn-white.focus,.btn-white:focus{box-shadow:0 5px 11px 0 rgba(0,0,0,.18),0 4px 15px 0 rgba(0,0,0,.15)}.btn-white.active,.btn-white:active,.btn-white:focus{background-color:#ccc}.btn-white.dropdown-toggle,.btn-white.dropdown-toggle:focus,.btn-white.dropdown-toggle:hover{background-color:#fff!important}.btn-white:not([disabled]):not(.disabled).active,.btn-white:not([disabled]):not(.disabled):active,.show>.btn-white.dropdown-toggle{box-shadow:0 5px 11px 0 rgba(0,0,0,.18),0 4px 15px 0 rgba(0,0,0,.15);background-color:#ccc!important}.btn-white:not([disabled]):not(.disabled).active:focus,.btn-white:not([disabled]):not(.disabled):active:focus,.show>.btn-white.dropdown-toggle:focus{box-shadow:0 5px 11px 0 rgba(0,0,0,.18),0 4px 15px 0 rgba(0,0,0,.15)}.white-ic{color:#fff!important}.white-ic:focus,.white-ic:hover{color:#fff}a.btn:not([href]):not([tabindex]),a.btn:not([href]):not([tabindex]):focus,a.btn:not([href]):not([tabindex]):hover,table.table a.btn.btn-white{color:#000}.btn-outline-white{border:2px solid #fff!important;background-color:transparent!important;color:#fff!important}.btn-outline-white.active,.btn-outline-white:active,.btn-outline-white:active:focus,.btn-outline-white:focus,.btn-outline-white:hover{border-color:#fff!important;background-color:transparent!important;color:#fff!important}.btn-outline-white:not([disabled]):not(.disabled).active,.btn-outline-white:not([disabled]):not(.disabled):active,.show>.btn-outline-white.dropdown-toggle{box-shadow:0 5px 11px 0 rgba(0,0,0,.18),0 4px 15px 0 rgba(0,0,0,.15);background-color:transparent!important;border-color:#fff!important}.btn-outline-white:not([disabled]):not(.disabled).active:focus,.btn-outline-white:not([disabled]):not(.disabled):active:focus,.show>.btn-outline-white.dropdown-toggle:focus{box-shadow:0 5px 11px 0 rgba(0,0,0,.18),0 4px 15px 0 rgba(0,0,0,.15)}.btn-black{background-color:#000!important;color:#fff}.btn-black:hover{background-color:#0d0d0d;color:#fff}.btn-black.focus,.btn-black:focus{box-shadow:0 5px 11px 0 rgba(0,0,0,.18),0 4px 15px 0 rgba(0,0,0,.15)}.btn-black.active,.btn-black:active,.btn-black:focus{background-color:#000}.btn-black.dropdown-toggle{background-color:#000!important}.btn-black.dropdown-toggle:focus,.btn-black.dropdown-toggle:hover{background-color:#0d0d0d!important}.btn-black:not([disabled]):not(.disabled).active,.btn-black:not([disabled]):not(.disabled):active,.show>.btn-black.dropdown-toggle{box-shadow:0 5px 11px 0 rgba(0,0,0,.18),0 4px 15px 0 rgba(0,0,0,.15);background-color:#000!important}.btn-black:not([disabled]):not(.disabled).active:focus,.btn-black:not([disabled]):not(.disabled):active:focus,.show>.btn-black.dropdown-toggle:focus{box-shadow:0 5px 11px 0 rgba(0,0,0,.18),0 4px 15px 0 rgba(0,0,0,.15)}.black-ic{color:#000!important}.black-ic:focus,.black-ic:hover{color:#000}a.btn:not([href]):not([tabindex]),a.btn:not([href]):not([tabindex]):focus,a.btn:not([href]):not([tabindex]):hover,table.table a.btn.btn-black{color:#fff}.btn-outline-black{border:2px solid #000!important;background-color:transparent!important;color:#000!important}.btn-outline-black.active,.btn-outline-black:active,.btn-outline-black:active:focus,.btn-outline-black:focus,.btn-outline-black:hover{border-color:#000!important;background-color:transparent!important;color:#000!important}.btn-outline-black:not([disabled]):not(.disabled).active,.btn-outline-black:not([disabled]):not(.disabled):active,.show>.btn-outline-black.dropdown-toggle{box-shadow:0 5px 11px 0 rgba(0,0,0,.18),0 4px 15px 0 rgba(0,0,0,.15);background-color:transparent!important;border-color:#000!important}.btn-outline-black:not([disabled]):not(.disabled).active:focus,.btn-outline-black:not([disabled]):not(.disabled):active:focus,.show>.btn-outline-black.dropdown-toggle:focus{box-shadow:0 5px 11px 0 rgba(0,0,0,.18),0 4px 15px 0 rgba(0,0,0,.15)}.btn-warning:not(:disabled):not(.disabled).active,.btn-warning:not(:disabled):not(.disabled):active,.show>.btn-warning.dropdown-toggle{color:#fff}.btn.purple-gradient{transition:.5s;color:#fff}.btn.purple-gradient:active,.btn.purple-gradient:active:focus .btn.purple-gradient.active,.btn.purple-gradient:focus,.btn.purple-gradient:hover{background:linear-gradient(#ff88ce,#8f8bf7)}.btn.peach-gradient{transition:.5s;color:#fff}.btn.peach-gradient:active,.btn.peach-gradient:active:focus .btn.peach-gradient.active,.btn.peach-gradient:focus,.btn.peach-gradient:hover{background:linear-gradient(#ffdf89,#fc7b7b)}.btn.aqua-gradient{transition:.5s;color:#fff}.btn.aqua-gradient:active,.btn.aqua-gradient:active:focus .btn.aqua-gradient.active,.btn.aqua-gradient:focus,.btn.aqua-gradient:hover{background:linear-gradient(#3aa2ff,#1fffac)}.btn.blue-gradient{transition:.5s;color:#fff}.btn.blue-gradient:active,.btn.blue-gradient:active:focus .btn.blue-gradient.active,.btn.blue-gradient:focus,.btn.blue-gradient:hover{background:linear-gradient(#5ed1fc,#3647b3)}.btn mdb-icon{position:relative;font-size:.9rem}.btn mdb-icon.right{margin-left:.3rem}.btn mdb-icon.left{margin-right:.3rem}.btn.btn-lg{padding:1rem 2.4rem;font-size:.94rem}.btn.btn-lg mdb-icon{font-size:1rem}.btn.btn-md{padding:.7rem 1.6rem;font-size:.7rem}.btn.btn-md mdb-icon{font-size:.8rem}.btn.btn-sm{padding:.5rem 1.6rem;font-size:.64rem}.btn.btn-sm mdb-icon{font-size:.7rem}"]
                    }] }
        ];
        /** @nocollapse */
        MdbBtnDirective.ctorParameters = function () {
            return [
                { type: i0.ElementRef },
                { type: i0.Renderer2 }
            ];
        };
        MdbBtnDirective.propDecorators = {
            color: [{ type: i0.Input }],
            rounded: [{ type: i0.Input }],
            gradient: [{ type: i0.Input }],
            outline: [{ type: i0.Input }],
            flat: [{ type: i0.Input }],
            size: [{ type: i0.Input }],
            block: [{ type: i0.Input }],
            floating: [{ type: i0.Input }]
        };
        return MdbBtnDirective;
    }());

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */
    /** @type {?} */
    var CHECKBOX_CONTROL_VALUE_ACCESSOR = {
        provide: forms.NG_VALUE_ACCESSOR,
        // tslint:disable-next-line: no-use-before-declare
        useExisting: i0.forwardRef(( /**
         * @return {?}
         */function () { return ButtonCheckboxDirective; })),
        multi: true,
    };
    /**
     * Add checkbox functionality to any element
     */
    var ButtonCheckboxDirective = /** @class */ (function () {
        function ButtonCheckboxDirective() {
            /**
             * Truthy value, will be set to ngModel
             */
            this.btnCheckboxTrue = true;
            /**
             * Falsy value, will be set to ngModel
             */
            this.btnCheckboxFalse = false;
            this.state = false;
            this.onChange = Function.prototype;
            this.onTouched = Function.prototype;
        }
        // view -> model
        // view -> model
        /**
         * @return {?}
         */
        ButtonCheckboxDirective.prototype.onClick =
            // view -> model
            /**
             * @return {?}
             */
            function () {
                if (this.isDisabled) {
                    return;
                }
                this.toggle(!this.state);
                this.onChange(this.value);
            };
        /**
         * @return {?}
         */
        ButtonCheckboxDirective.prototype.ngOnInit = /**
         * @return {?}
         */
            function () {
                this.toggle(this.trueValue === this.value);
            };
        Object.defineProperty(ButtonCheckboxDirective.prototype, "trueValue", {
            get: /**
             * @protected
             * @return {?}
             */ function () {
                return typeof this.btnCheckboxTrue !== 'undefined' ? this.btnCheckboxTrue : true;
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(ButtonCheckboxDirective.prototype, "falseValue", {
            get: /**
             * @protected
             * @return {?}
             */ function () {
                return typeof this.btnCheckboxFalse !== 'undefined' ? this.btnCheckboxFalse : false;
            },
            enumerable: true,
            configurable: true
        });
        /**
         * @param {?} state
         * @return {?}
         */
        ButtonCheckboxDirective.prototype.toggle = /**
         * @param {?} state
         * @return {?}
         */
            function (state) {
                this.state = state;
                this.value = this.state ? this.trueValue : this.falseValue;
            };
        // ControlValueAccessor
        // model -> view
        // ControlValueAccessor
        // model -> view
        /**
         * @param {?} value
         * @return {?}
         */
        ButtonCheckboxDirective.prototype.writeValue =
            // ControlValueAccessor
            // model -> view
            /**
             * @param {?} value
             * @return {?}
             */
            function (value) {
                this.state = this.trueValue === value;
                this.value = value ? this.trueValue : this.falseValue;
            };
        /**
         * @param {?} isDisabled
         * @return {?}
         */
        ButtonCheckboxDirective.prototype.setDisabledState = /**
         * @param {?} isDisabled
         * @return {?}
         */
            function (isDisabled) {
                this.isDisabled = isDisabled;
            };
        /**
         * @param {?} fn
         * @return {?}
         */
        ButtonCheckboxDirective.prototype.registerOnChange = /**
         * @param {?} fn
         * @return {?}
         */
            function (fn) {
                this.onChange = fn;
            };
        /**
         * @param {?} fn
         * @return {?}
         */
        ButtonCheckboxDirective.prototype.registerOnTouched = /**
         * @param {?} fn
         * @return {?}
         */
            function (fn) {
                this.onTouched = fn;
            };
        ButtonCheckboxDirective.decorators = [
            { type: i0.Directive, args: [{ selector: '[mdbCheckbox]', providers: [CHECKBOX_CONTROL_VALUE_ACCESSOR] },] }
        ];
        ButtonCheckboxDirective.propDecorators = {
            btnCheckboxTrue: [{ type: i0.Input }],
            btnCheckboxFalse: [{ type: i0.Input }],
            state: [{ type: i0.HostBinding, args: ['class.active',] }],
            onClick: [{ type: i0.HostListener, args: ['click',] }]
        };
        return ButtonCheckboxDirective;
    }());

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */
    /** @type {?} */
    var RADIO_CONTROL_VALUE_ACCESSOR = {
        provide: forms.NG_VALUE_ACCESSOR,
        // tslint:disable-next-line: no-use-before-declare
        useExisting: i0.forwardRef(( /**
         * @return {?}
         */function () { return ButtonRadioDirective; })),
        multi: true,
    };
    /**
     * Create radio buttons or groups of buttons.
     * A value of a selected button is bound to a variable specified via ngModel.
     */
    var ButtonRadioDirective = /** @class */ (function () {
        function ButtonRadioDirective(el, renderer) {
            this.el = el;
            this.renderer = renderer;
            this.onChange = Function.prototype;
            this.onTouched = Function.prototype;
            this.radioElementsArray = [];
        }
        Object.defineProperty(ButtonRadioDirective.prototype, "isActive", {
            get: /**
             * @return {?}
             */ function () {
                return this.mdbRadio === this.value;
            },
            enumerable: true,
            configurable: true
        });
        /**
         * @param {?=} event
         * @return {?}
         */
        ButtonRadioDirective.prototype.onClick = /**
         * @param {?=} event
         * @return {?}
         */
            function (event) {
                var _this = this;
                try {
                    this.el.nativeElement.parentElement.childNodes.forEach(( /**
                     * @param {?} element
                     * @return {?}
                     */function (element) {
                        _this.radioElementsArray.push(element);
                    }));
                    this.radioElementsArray.forEach(( /**
                     * @param {?} element
                     * @return {?}
                     */function (element) {
                        _this.renderer.removeClass(element, 'active');
                    }));
                    this.renderer.addClass(event.target, 'active');
                }
                catch (error) { }
                if (this.el.nativeElement.attributes.disabled) {
                    return;
                }
                if (this.uncheckable && this.mdbRadio === this.value) {
                    this.value = undefined;
                }
                else {
                    this.value = this.mdbRadio;
                }
                this.onTouched();
                this.onChange(this.value);
            };
        /**
         * @return {?}
         */
        ButtonRadioDirective.prototype.ngOnInit = /**
         * @return {?}
         */
            function () {
                this.uncheckable = typeof this.uncheckable !== 'undefined';
            };
        /**
         * @return {?}
         */
        ButtonRadioDirective.prototype.onBlur = /**
         * @return {?}
         */
            function () {
                this.onTouched();
            };
        // ControlValueAccessor
        // model -> view
        // ControlValueAccessor
        // model -> view
        /**
         * @param {?} value
         * @return {?}
         */
        ButtonRadioDirective.prototype.writeValue =
            // ControlValueAccessor
            // model -> view
            /**
             * @param {?} value
             * @return {?}
             */
            function (value) {
                this.value = value;
            };
        /**
         * @param {?} fn
         * @return {?}
         */
        ButtonRadioDirective.prototype.registerOnChange = /**
         * @param {?} fn
         * @return {?}
         */
            function (fn) {
                this.onChange = fn;
            };
        /**
         * @param {?} fn
         * @return {?}
         */
        ButtonRadioDirective.prototype.registerOnTouched = /**
         * @param {?} fn
         * @return {?}
         */
            function (fn) {
                this.onTouched = fn;
            };
        ButtonRadioDirective.decorators = [
            { type: i0.Directive, args: [{ selector: '[mdbRadio]', providers: [RADIO_CONTROL_VALUE_ACCESSOR] },] }
        ];
        /** @nocollapse */
        ButtonRadioDirective.ctorParameters = function () {
            return [
                { type: i0.ElementRef },
                { type: i0.Renderer2 }
            ];
        };
        ButtonRadioDirective.propDecorators = {
            mdbRadio: [{ type: i0.Input }],
            uncheckable: [{ type: i0.Input }],
            value: [{ type: i0.Input }],
            isActive: [{ type: i0.HostBinding, args: ['class.active',] }],
            onClick: [{ type: i0.HostListener, args: ['click', ['$event'],] }]
        };
        return ButtonRadioDirective;
    }());

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */
    var FixedButtonCaptionDirective = /** @class */ (function () {
        function FixedButtonCaptionDirective(renderer, el) {
            this.renderer = renderer;
            this.el = el;
        }
        /**
         * @return {?}
         */
        FixedButtonCaptionDirective.prototype.ngOnInit = /**
         * @return {?}
         */
            function () {
                this.createCaptionElement();
            };
        /**
         * @return {?}
         */
        FixedButtonCaptionDirective.prototype.createCaptionElement = /**
         * @return {?}
         */
            function () {
                /** @type {?} */
                var paragraph = this.renderer.createElement('p');
                /** @type {?} */
                var text = this.renderer.createText(this.caption);
                this.renderer.appendChild(paragraph, text);
                this.renderer.appendChild(this.el.nativeElement, paragraph);
                this.paragraphEl = paragraph;
            };
        /**
         * @return {?}
         */
        FixedButtonCaptionDirective.prototype.showCaption = /**
         * @return {?}
         */
            function () {
                this.renderer.addClass(this.paragraphEl, 'fixed-button-caption');
                this.renderer.setStyle(this.paragraphEl, 'position', 'absolute');
                this.renderer.setStyle(this.paragraphEl, 'right', "60px");
                this.renderer.setStyle(this.paragraphEl, 'top', '10px');
                this.renderer.setStyle(this.el.nativeElement, 'overflow', 'visible');
            };
        FixedButtonCaptionDirective.decorators = [
            { type: i0.Directive, args: [{ selector: '[mdbFixedCaption]' },] }
        ];
        /** @nocollapse */
        FixedButtonCaptionDirective.ctorParameters = function () {
            return [
                { type: i0.Renderer2 },
                { type: i0.ElementRef }
            ];
        };
        FixedButtonCaptionDirective.propDecorators = {
            caption: [{ type: i0.Input, args: ['mdbFixedCaption',] }],
            collapseButtonActivator: [{ type: i0.Input, args: ['collapseButton',] }]
        };
        return FixedButtonCaptionDirective;
    }());

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */
    var ButtonsModule = /** @class */ (function () {
        function ButtonsModule() {
        }
        /**
         * @return {?}
         */
        ButtonsModule.forRoot = /**
         * @return {?}
         */
            function () {
                return { ngModule: ButtonsModule, providers: [] };
            };
        ButtonsModule.decorators = [
            { type: i0.NgModule, args: [{
                        declarations: [
                            ButtonCheckboxDirective,
                            ButtonRadioDirective,
                            MdbBtnDirective,
                            FixedButtonCaptionDirective,
                        ],
                        exports: [
                            ButtonCheckboxDirective,
                            ButtonRadioDirective,
                            MdbBtnDirective,
                            FixedButtonCaptionDirective,
                        ],
                    },] }
        ];
        return ButtonsModule;
    }());

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */
    var MdbCardFooterComponent = /** @class */ (function () {
        function MdbCardFooterComponent(_el, _r) {
            this._el = _el;
            this._r = _r;
        }
        /**
         * @return {?}
         */
        MdbCardFooterComponent.prototype.ngOnInit = /**
         * @return {?}
         */
            function () {
                this._r.addClass(this._el.nativeElement, 'card-footer');
            };
        MdbCardFooterComponent.decorators = [
            { type: i0.Component, args: [{
                        selector: 'mdb-card-footer',
                        template: "<ng-content></ng-content>\n",
                        changeDetection: i0.ChangeDetectionStrategy.OnPush
                    }] }
        ];
        /** @nocollapse */
        MdbCardFooterComponent.ctorParameters = function () {
            return [
                { type: i0.ElementRef },
                { type: i0.Renderer2 }
            ];
        };
        return MdbCardFooterComponent;
    }());

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */
    var MdbCardTitleComponent = /** @class */ (function () {
        function MdbCardTitleComponent(_el, _r) {
            this._el = _el;
            this._r = _r;
        }
        /**
         * @return {?}
         */
        MdbCardTitleComponent.prototype.ngOnInit = /**
         * @return {?}
         */
            function () {
                this._r.addClass(this._el.nativeElement, 'card-title');
            };
        MdbCardTitleComponent.decorators = [
            { type: i0.Component, args: [{
                        selector: 'mdb-card-title',
                        template: "<ng-content></ng-content>",
                        changeDetection: i0.ChangeDetectionStrategy.OnPush
                    }] }
        ];
        /** @nocollapse */
        MdbCardTitleComponent.ctorParameters = function () {
            return [
                { type: i0.ElementRef },
                { type: i0.Renderer2 }
            ];
        };
        return MdbCardTitleComponent;
    }());

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */
    var MdbCardTextComponent = /** @class */ (function () {
        function MdbCardTextComponent() {
        }
        MdbCardTextComponent.decorators = [
            { type: i0.Component, args: [{
                        selector: 'mdb-card-text',
                        template: "<p class=\"card-text {{class}} \">\n    <ng-content></ng-content>\n</p>",
                        changeDetection: i0.ChangeDetectionStrategy.OnPush
                    }] }
        ];
        MdbCardTextComponent.propDecorators = {
            class: [{ type: i0.Input }]
        };
        return MdbCardTextComponent;
    }());

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */
    var MdbCardBodyComponent = /** @class */ (function () {
        function MdbCardBodyComponent(_el, _r) {
            this._el = _el;
            this._r = _r;
        }
        Object.defineProperty(MdbCardBodyComponent.prototype, "cascade", {
            set: /**
             * @param {?} cascade
             * @return {?}
             */ function (cascade) {
                if (cascade) {
                    this._r.addClass(this._el.nativeElement, 'card-body-cascade');
                }
            },
            enumerable: true,
            configurable: true
        });
        /**
         * @return {?}
         */
        MdbCardBodyComponent.prototype.ngOnInit = /**
         * @return {?}
         */
            function () {
                var _this = this;
                this._r.addClass(this._el.nativeElement, 'card-body');
                if (this.class) {
                    this.class.split(' ').forEach(( /**
                     * @param {?} element
                     * @return {?}
                     */function (element) {
                        _this._r.addClass(_this._el.nativeElement, element);
                    }));
                }
            };
        MdbCardBodyComponent.decorators = [
            { type: i0.Component, args: [{
                        selector: 'mdb-card-body',
                        template: "<ng-content></ng-content>\n",
                        encapsulation: i0.ViewEncapsulation.None,
                        changeDetection: i0.ChangeDetectionStrategy.OnPush
                    }] }
        ];
        /** @nocollapse */
        MdbCardBodyComponent.ctorParameters = function () {
            return [
                { type: i0.ElementRef },
                { type: i0.Renderer2 }
            ];
        };
        MdbCardBodyComponent.propDecorators = {
            class: [{ type: i0.Input }],
            cascade: [{ type: i0.Input }]
        };
        return MdbCardBodyComponent;
    }());

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */
    var MdbCardComponent = /** @class */ (function () {
        function MdbCardComponent(_el, _r) {
            this._el = _el;
            this._r = _r;
        }
        Object.defineProperty(MdbCardComponent.prototype, "narrower", {
            set: /**
             * @param {?} narrower
             * @return {?}
             */ function (narrower) {
                if (narrower) {
                    this._r.addClass(this._el.nativeElement, 'narrower');
                }
                else if (!narrower && this._el.nativeElement.classList.contains('narrower')) {
                    this._r.removeClass(this._el.nativeElement, 'narrower');
                }
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(MdbCardComponent.prototype, "reverse", {
            set: /**
             * @param {?} reverse
             * @return {?}
             */ function (reverse) {
                if (reverse) {
                    this._r.addClass(this._el.nativeElement, 'reverse');
                }
                else if (!reverse && this._el.nativeElement.classList.contains('reserse')) {
                    this._r.removeClass(this._el.nativeElement, 'reverse');
                }
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(MdbCardComponent.prototype, "dark", {
            set: /**
             * @param {?} dark
             * @return {?}
             */ function (dark) {
                if (dark) {
                    this._r.addClass(this._el.nativeElement, 'card-dark');
                }
                else if (!dark && this._el.nativeElement.classList.contains('card-dark')) {
                    this._r.removeClass(this._el.nativeElement, 'card-dark');
                }
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(MdbCardComponent.prototype, "bgColor", {
            set: /**
             * @param {?} color
             * @return {?}
             */ function (color) {
                if (color) {
                    this._r.addClass(this._el.nativeElement, color);
                }
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(MdbCardComponent.prototype, "borderColor", {
            set: /**
             * @param {?} color
             * @return {?}
             */ function (color) {
                if (color) {
                    this._r.addClass(this._el.nativeElement, color);
                }
            },
            enumerable: true,
            configurable: true
        });
        /**
         * @return {?}
         */
        MdbCardComponent.prototype.ngOnInit = /**
         * @return {?}
         */
            function () {
                var _this = this;
                this._r.addClass(this._el.nativeElement, 'card');
                if (this.cascade) {
                    this._r.addClass(this._el.nativeElement, 'card-cascade');
                }
                if (this.wider) {
                    this._r.addClass(this._el.nativeElement, 'wider');
                }
                if (this.narrower) {
                    this._r.addClass(this._el.nativeElement, 'narrower');
                }
                if (this.class) {
                    this.class.split(' ').forEach(( /**
                     * @param {?} element
                     * @return {?}
                     */function (element) {
                        _this._r.addClass(_this._el.nativeElement, element);
                    }));
                }
            };
        MdbCardComponent.decorators = [
            { type: i0.Component, args: [{
                        selector: 'mdb-card',
                        template: "<ng-content></ng-content>\n",
                        changeDetection: i0.ChangeDetectionStrategy.OnPush,
                        encapsulation: i0.ViewEncapsulation.None,
                        styles: [".mdb-color.lighten-5{background-color:#d0d6e2!important}.mdb-color.lighten-4{background-color:#b1bace!important}.mdb-color.lighten-3{background-color:#929fba!important}.mdb-color.lighten-2{background-color:#7283a7!important}.mdb-color.lighten-1{background-color:#59698d!important}.mdb-color{background-color:#45526e!important}.mdb-color-text{color:#45526e!important}.rgba-mdb-color-slight,.rgba-mdb-color-slight:after{background-color:rgba(69,82,110,.1)}.rgba-mdb-color-light,.rgba-mdb-color-light:after{background-color:rgba(69,82,110,.3)}.rgba-mdb-color-strong,.rgba-mdb-color-strong:after{background-color:rgba(69,82,110,.7)}.mdb-color.darken-1{background-color:#3b465e!important}.mdb-color.darken-2{background-color:#2e3951!important}.mdb-color.darken-3{background-color:#1c2a48!important}.mdb-color.darken-4{background-color:#1c2331!important}.red.lighten-5{background-color:#ffebee!important}.red.lighten-4{background-color:#ffcdd2!important}.red.lighten-3{background-color:#ef9a9a!important}.red.lighten-2{background-color:#e57373!important}.red.lighten-1{background-color:#ef5350!important}.red{background-color:#f44336!important}.red-text{color:#f44336!important}.rgba-red-slight,.rgba-red-slight:after{background-color:rgba(244,67,54,.1)}.rgba-red-light,.rgba-red-light:after{background-color:rgba(244,67,54,.3)}.rgba-red-strong,.rgba-red-strong:after{background-color:rgba(244,67,54,.7)}.red.darken-1{background-color:#e53935!important}.red.darken-2{background-color:#d32f2f!important}.red.darken-3{background-color:#c62828!important}.red.darken-4{background-color:#b71c1c!important}.red.accent-1{background-color:#ff8a80!important}.red.accent-2{background-color:#ff5252!important}.red.accent-3{background-color:#ff1744!important}.red.accent-4{background-color:#d50000!important}.pink.lighten-5{background-color:#fce4ec!important}.pink.lighten-4{background-color:#f8bbd0!important}.pink.lighten-3{background-color:#f48fb1!important}.pink.lighten-2{background-color:#f06292!important}.pink.lighten-1{background-color:#ec407a!important}.pink{background-color:#e91e63!important}.pink-text{color:#e91e63!important}.rgba-pink-slight,.rgba-pink-slight:after{background-color:rgba(233,30,99,.1)}.rgba-pink-light,.rgba-pink-light:after{background-color:rgba(233,30,99,.3)}.rgba-pink-strong,.rgba-pink-strong:after{background-color:rgba(233,30,99,.7)}.pink.darken-1{background-color:#d81b60!important}.pink.darken-2{background-color:#c2185b!important}.pink.darken-3{background-color:#ad1457!important}.pink.darken-4{background-color:#880e4f!important}.pink.accent-1{background-color:#ff80ab!important}.pink.accent-2{background-color:#ff4081!important}.pink.accent-3{background-color:#f50057!important}.pink.accent-4{background-color:#c51162!important}.purple.lighten-5{background-color:#f3e5f5!important}.purple.lighten-4{background-color:#e1bee7!important}.purple.lighten-3{background-color:#ce93d8!important}.purple.lighten-2{background-color:#ba68c8!important}.purple.lighten-1{background-color:#ab47bc!important}.purple{background-color:#9c27b0!important}.purple-text{color:#9c27b0!important}.rgba-purple-slight,.rgba-purple-slight:after{background-color:rgba(156,39,176,.1)}.rgba-purple-light,.rgba-purple-light:after{background-color:rgba(156,39,176,.3)}.rgba-purple-strong,.rgba-purple-strong:after{background-color:rgba(156,39,176,.7)}.purple.darken-1{background-color:#8e24aa!important}.purple.darken-2{background-color:#7b1fa2!important}.purple.darken-3{background-color:#6a1b9a!important}.purple.darken-4{background-color:#4a148c!important}.purple.accent-1{background-color:#ea80fc!important}.purple.accent-2{background-color:#e040fb!important}.purple.accent-3{background-color:#d500f9!important}.purple.accent-4{background-color:#a0f!important}.deep-purple.lighten-5{background-color:#ede7f6!important}.deep-purple.lighten-4{background-color:#d1c4e9!important}.deep-purple.lighten-3{background-color:#b39ddb!important}.deep-purple.lighten-2{background-color:#9575cd!important}.deep-purple.lighten-1{background-color:#7e57c2!important}.deep-purple{background-color:#673ab7!important}.deep-purple-text{color:#673ab7!important}.rgba-deep-purple-slight,.rgba-deep-purple-slight:after{background-color:rgba(103,58,183,.1)}.rgba-deep-purple-light,.rgba-deep-purple-light:after{background-color:rgba(103,58,183,.3)}.rgba-deep-purple-strong,.rgba-deep-purple-strong:after{background-color:rgba(103,58,183,.7)}.deep-purple.darken-1{background-color:#5e35b1!important}.deep-purple.darken-2{background-color:#512da8!important}.deep-purple.darken-3{background-color:#4527a0!important}.deep-purple.darken-4{background-color:#311b92!important}.deep-purple.accent-1{background-color:#b388ff!important}.deep-purple.accent-2{background-color:#7c4dff!important}.deep-purple.accent-3{background-color:#651fff!important}.deep-purple.accent-4{background-color:#6200ea!important}.indigo.lighten-5{background-color:#e8eaf6!important}.indigo.lighten-4{background-color:#c5cae9!important}.indigo.lighten-3{background-color:#9fa8da!important}.indigo.lighten-2{background-color:#7986cb!important}.indigo.lighten-1{background-color:#5c6bc0!important}.indigo{background-color:#3f51b5!important}.indigo-text{color:#3f51b5!important}.rgba-indigo-slight,.rgba-indigo-slight:after{background-color:rgba(63,81,181,.1)}.rgba-indigo-light,.rgba-indigo-light:after{background-color:rgba(63,81,181,.3)}.rgba-indigo-strong,.rgba-indigo-strong:after{background-color:rgba(63,81,181,.7)}.indigo.darken-1{background-color:#3949ab!important}.indigo.darken-2{background-color:#303f9f!important}.indigo.darken-3{background-color:#283593!important}.indigo.darken-4{background-color:#1a237e!important}.indigo.accent-1{background-color:#8c9eff!important}.indigo.accent-2{background-color:#536dfe!important}.indigo.accent-3{background-color:#3d5afe!important}.indigo.accent-4{background-color:#304ffe!important}.blue.lighten-5{background-color:#e3f2fd!important}.blue.lighten-4{background-color:#bbdefb!important}.blue.lighten-3{background-color:#90caf9!important}.blue.lighten-2{background-color:#64b5f6!important}.blue.lighten-1{background-color:#42a5f5!important}.blue{background-color:#2196f3!important}.blue-text{color:#2196f3!important}.rgba-blue-slight,.rgba-blue-slight:after{background-color:rgba(33,150,243,.1)}.rgba-blue-light,.rgba-blue-light:after{background-color:rgba(33,150,243,.3)}.rgba-blue-strong,.rgba-blue-strong:after{background-color:rgba(33,150,243,.7)}.blue.darken-1{background-color:#1e88e5!important}.blue.darken-2{background-color:#1976d2!important}.blue.darken-3{background-color:#1565c0!important}.blue.darken-4{background-color:#0d47a1!important}.blue.accent-1{background-color:#82b1ff!important}.blue.accent-2{background-color:#448aff!important}.blue.accent-3{background-color:#2979ff!important}.blue.accent-4{background-color:#2962ff!important}.light-blue.lighten-5{background-color:#e1f5fe!important}.light-blue.lighten-4{background-color:#b3e5fc!important}.light-blue.lighten-3{background-color:#81d4fa!important}.light-blue.lighten-2{background-color:#4fc3f7!important}.light-blue.lighten-1{background-color:#29b6f6!important}.light-blue{background-color:#03a9f4!important}.light-blue-text{color:#03a9f4!important}.rgba-light-blue-slight,.rgba-light-blue-slight:after{background-color:rgba(3,169,244,.1)}.rgba-light-blue-light,.rgba-light-blue-light:after{background-color:rgba(3,169,244,.3)}.rgba-light-blue-strong,.rgba-light-blue-strong:after{background-color:rgba(3,169,244,.7)}.light-blue.darken-1{background-color:#039be5!important}.light-blue.darken-2{background-color:#0288d1!important}.light-blue.darken-3{background-color:#0277bd!important}.light-blue.darken-4{background-color:#01579b!important}.light-blue.accent-1{background-color:#80d8ff!important}.light-blue.accent-2{background-color:#40c4ff!important}.light-blue.accent-3{background-color:#00b0ff!important}.light-blue.accent-4{background-color:#0091ea!important}.cyan.lighten-5{background-color:#e0f7fa!important}.cyan.lighten-4{background-color:#b2ebf2!important}.cyan.lighten-3{background-color:#80deea!important}.cyan.lighten-2{background-color:#4dd0e1!important}.cyan.lighten-1{background-color:#26c6da!important}.cyan{background-color:#00bcd4!important}.cyan-text{color:#00bcd4!important}.rgba-cyan-slight,.rgba-cyan-slight:after{background-color:rgba(0,188,212,.1)}.rgba-cyan-light,.rgba-cyan-light:after{background-color:rgba(0,188,212,.3)}.rgba-cyan-strong,.rgba-cyan-strong:after{background-color:rgba(0,188,212,.7)}.cyan.darken-1{background-color:#00acc1!important}.cyan.darken-2{background-color:#0097a7!important}.cyan.darken-3{background-color:#00838f!important}.cyan.darken-4{background-color:#006064!important}.cyan.accent-1{background-color:#84ffff!important}.cyan.accent-2{background-color:#18ffff!important}.cyan.accent-3{background-color:#00e5ff!important}.cyan.accent-4{background-color:#00b8d4!important}.teal.lighten-5{background-color:#e0f2f1!important}.teal.lighten-4{background-color:#b2dfdb!important}.teal.lighten-3{background-color:#80cbc4!important}.teal.lighten-2{background-color:#4db6ac!important}.teal.lighten-1{background-color:#26a69a!important}.teal{background-color:#009688!important}.teal-text{color:#009688!important}.rgba-teal-slight,.rgba-teal-slight:after{background-color:rgba(0,150,136,.1)}.rgba-teal-light,.rgba-teal-light:after{background-color:rgba(0,150,136,.3)}.rgba-teal-strong,.rgba-teal-strong:after{background-color:rgba(0,150,136,.7)}.teal.darken-1{background-color:#00897b!important}.teal.darken-2{background-color:#00796b!important}.teal.darken-3{background-color:#00695c!important}.teal.darken-4{background-color:#004d40!important}.teal.accent-1{background-color:#a7ffeb!important}.teal.accent-2{background-color:#64ffda!important}.teal.accent-3{background-color:#1de9b6!important}.teal.accent-4{background-color:#00bfa5!important}.green.lighten-5{background-color:#e8f5e9!important}.green.lighten-4{background-color:#c8e6c9!important}.green.lighten-3{background-color:#a5d6a7!important}.green.lighten-2{background-color:#81c784!important}.green.lighten-1{background-color:#66bb6a!important}.green{background-color:#4caf50!important}.green-text{color:#4caf50!important}.rgba-green-slight,.rgba-green-slight:after{background-color:rgba(76,175,80,.1)}.rgba-green-light,.rgba-green-light:after{background-color:rgba(76,175,80,.3)}.rgba-green-strong,.rgba-green-strong:after{background-color:rgba(76,175,80,.7)}.green.darken-1{background-color:#43a047!important}.green.darken-2{background-color:#388e3c!important}.green.darken-3{background-color:#2e7d32!important}.green.darken-4{background-color:#1b5e20!important}.green.accent-1{background-color:#b9f6ca!important}.green.accent-2{background-color:#69f0ae!important}.green.accent-3{background-color:#00e676!important}.green.accent-4{background-color:#00c853!important}.light-green.lighten-5{background-color:#f1f8e9!important}.light-green.lighten-4{background-color:#dcedc8!important}.light-green.lighten-3{background-color:#c5e1a5!important}.light-green.lighten-2{background-color:#aed581!important}.light-green.lighten-1{background-color:#9ccc65!important}.light-green{background-color:#8bc34a!important}.light-green-text{color:#8bc34a!important}.rgba-light-green-slight,.rgba-light-green-slight:after{background-color:rgba(139,195,74,.1)}.rgba-light-green-light,.rgba-light-green-light:after{background-color:rgba(139,195,74,.3)}.rgba-light-green-strong,.rgba-light-green-strong:after{background-color:rgba(139,195,74,.7)}.light-green.darken-1{background-color:#7cb342!important}.light-green.darken-2{background-color:#689f38!important}.light-green.darken-3{background-color:#558b2f!important}.light-green.darken-4{background-color:#33691e!important}.light-green.accent-1{background-color:#ccff90!important}.light-green.accent-2{background-color:#b2ff59!important}.light-green.accent-3{background-color:#76ff03!important}.light-green.accent-4{background-color:#64dd17!important}.lime.lighten-5{background-color:#f9fbe7!important}.lime.lighten-4{background-color:#f0f4c3!important}.lime.lighten-3{background-color:#e6ee9c!important}.lime.lighten-2{background-color:#dce775!important}.lime.lighten-1{background-color:#d4e157!important}.lime{background-color:#cddc39!important}.lime-text{color:#cddc39!important}.rgba-lime-slight,.rgba-lime-slight:after{background-color:rgba(205,220,57,.1)}.rgba-lime-light,.rgba-lime-light:after{background-color:rgba(205,220,57,.3)}.rgba-lime-strong,.rgba-lime-strong:after{background-color:rgba(205,220,57,.7)}.lime.darken-1{background-color:#c0ca33!important}.lime.darken-2{background-color:#afb42b!important}.lime.darken-3{background-color:#9e9d24!important}.lime.darken-4{background-color:#827717!important}.lime.accent-1{background-color:#f4ff81!important}.lime.accent-2{background-color:#eeff41!important}.lime.accent-3{background-color:#c6ff00!important}.lime.accent-4{background-color:#aeea00!important}.yellow.lighten-5{background-color:#fffde7!important}.yellow.lighten-4{background-color:#fff9c4!important}.yellow.lighten-3{background-color:#fff59d!important}.yellow.lighten-2{background-color:#fff176!important}.yellow.lighten-1{background-color:#ffee58!important}.yellow{background-color:#ffeb3b!important}.yellow-text{color:#ffeb3b!important}.rgba-yellow-slight,.rgba-yellow-slight:after{background-color:rgba(255,235,59,.1)}.rgba-yellow-light,.rgba-yellow-light:after{background-color:rgba(255,235,59,.3)}.rgba-yellow-strong,.rgba-yellow-strong:after{background-color:rgba(255,235,59,.7)}.yellow.darken-1{background-color:#fdd835!important}.yellow.darken-2{background-color:#fbc02d!important}.yellow.darken-3{background-color:#f9a825!important}.yellow.darken-4{background-color:#f57f17!important}.yellow.accent-1{background-color:#ffff8d!important}.yellow.accent-2{background-color:#ff0!important}.yellow.accent-3{background-color:#ffea00!important}.yellow.accent-4{background-color:#ffd600!important}.amber.lighten-5{background-color:#fff8e1!important}.amber.lighten-4{background-color:#ffecb3!important}.amber.lighten-3{background-color:#ffe082!important}.amber.lighten-2{background-color:#ffd54f!important}.amber.lighten-1{background-color:#ffca28!important}.amber{background-color:#ffc107!important}.amber-text{color:#ffc107!important}.rgba-amber-slight,.rgba-amber-slight:after{background-color:rgba(255,193,7,.1)}.rgba-amber-light,.rgba-amber-light:after{background-color:rgba(255,193,7,.3)}.rgba-amber-strong,.rgba-amber-strong:after{background-color:rgba(255,193,7,.7)}.amber.darken-1{background-color:#ffb300!important}.amber.darken-2{background-color:#ffa000!important}.amber.darken-3{background-color:#ff8f00!important}.amber.darken-4{background-color:#ff6f00!important}.amber.accent-1{background-color:#ffe57f!important}.amber.accent-2{background-color:#ffd740!important}.amber.accent-3{background-color:#ffc400!important}.amber.accent-4{background-color:#ffab00!important}.orange.lighten-5{background-color:#fff3e0!important}.orange.lighten-4{background-color:#ffe0b2!important}.orange.lighten-3{background-color:#ffcc80!important}.orange.lighten-2{background-color:#ffb74d!important}.orange.lighten-1{background-color:#ffa726!important}.orange{background-color:#ff9800!important}.orange-text{color:#ff9800!important}.rgba-orange-slight,.rgba-orange-slight:after{background-color:rgba(255,152,0,.1)}.rgba-orange-light,.rgba-orange-light:after{background-color:rgba(255,152,0,.3)}.rgba-orange-strong,.rgba-orange-strong:after{background-color:rgba(255,152,0,.7)}.orange.darken-1{background-color:#fb8c00!important}.orange.darken-2{background-color:#f57c00!important}.orange.darken-3{background-color:#ef6c00!important}.orange.darken-4{background-color:#e65100!important}.orange.accent-1{background-color:#ffd180!important}.orange.accent-2{background-color:#ffab40!important}.orange.accent-3{background-color:#ff9100!important}.orange.accent-4{background-color:#ff6d00!important}.deep-orange.lighten-5{background-color:#fbe9e7!important}.deep-orange.lighten-4{background-color:#ffccbc!important}.deep-orange.lighten-3{background-color:#ffab91!important}.deep-orange.lighten-2{background-color:#ff8a65!important}.deep-orange.lighten-1{background-color:#ff7043!important}.deep-orange{background-color:#ff5722!important}.deep-orange-text{color:#ff5722!important}.rgba-deep-orange-slight,.rgba-deep-orange-slight:after{background-color:rgba(255,87,34,.1)}.rgba-deep-orange-light,.rgba-deep-orange-light:after{background-color:rgba(255,87,34,.3)}.rgba-deep-orange-strong,.rgba-deep-orange-strong:after{background-color:rgba(255,87,34,.7)}.deep-orange.darken-1{background-color:#f4511e!important}.deep-orange.darken-2{background-color:#e64a19!important}.deep-orange.darken-3{background-color:#d84315!important}.deep-orange.darken-4{background-color:#bf360c!important}.deep-orange.accent-1{background-color:#ff9e80!important}.deep-orange.accent-2{background-color:#ff6e40!important}.deep-orange.accent-3{background-color:#ff3d00!important}.deep-orange.accent-4{background-color:#dd2c00!important}.brown.lighten-5{background-color:#efebe9!important}.brown.lighten-4{background-color:#d7ccc8!important}.brown.lighten-3{background-color:#bcaaa4!important}.brown.lighten-2{background-color:#a1887f!important}.brown.lighten-1{background-color:#8d6e63!important}.brown{background-color:#795548!important}.brown-text{color:#795548!important}.rgba-brown-slight,.rgba-brown-slight:after{background-color:rgba(121,85,72,.1)}.rgba-brown-light,.rgba-brown-light:after{background-color:rgba(121,85,72,.3)}.rgba-brown-strong,.rgba-brown-strong:after{background-color:rgba(121,85,72,.7)}.brown.darken-1{background-color:#6d4c41!important}.brown.darken-2{background-color:#5d4037!important}.brown.darken-3{background-color:#4e342e!important}.brown.darken-4{background-color:#3e2723!important}.blue-grey.lighten-5{background-color:#eceff1!important}.blue-grey.lighten-4{background-color:#cfd8dc!important}.blue-grey.lighten-3{background-color:#b0bec5!important}.blue-grey.lighten-2{background-color:#90a4ae!important}.blue-grey.lighten-1{background-color:#78909c!important}.blue-grey{background-color:#607d8b!important}.blue-grey-text{color:#607d8b!important}.rgba-blue-grey-slight,.rgba-blue-grey-slight:after{background-color:rgba(96,125,139,.1)}.rgba-blue-grey-light,.rgba-blue-grey-light:after{background-color:rgba(96,125,139,.3)}.rgba-blue-grey-strong,.rgba-blue-grey-strong:after{background-color:rgba(96,125,139,.7)}.blue-grey.darken-1{background-color:#546e7a!important}.blue-grey.darken-2{background-color:#455a64!important}.blue-grey.darken-3{background-color:#37474f!important}.blue-grey.darken-4{background-color:#263238!important}.grey.lighten-5{background-color:#fafafa!important}.grey.lighten-4{background-color:#f5f5f5!important}.grey.lighten-3{background-color:#eee!important}.grey.lighten-2{background-color:#e0e0e0!important}.grey.lighten-1{background-color:#bdbdbd!important}.grey{background-color:#9e9e9e!important}.grey-text{color:#9e9e9e!important}.rgba-grey-slight,.rgba-grey-slight:after{background-color:rgba(158,158,158,.1)}.rgba-grey-light,.rgba-grey-light:after{background-color:rgba(158,158,158,.3)}.rgba-grey-strong,.rgba-grey-strong:after{background-color:rgba(158,158,158,.7)}.grey.darken-1{background-color:#757575!important}.grey.darken-2{background-color:#616161!important}.grey.darken-3{background-color:#424242!important}.grey.darken-4{background-color:#212121!important}.black{background-color:#000!important}.black-text{color:#000!important}.rgba-black-slight,.rgba-black-slight:after{background-color:rgba(0,0,0,.1)}.rgba-black-light,.rgba-black-light:after{background-color:rgba(0,0,0,.3)}.rgba-black-strong,.rgba-black-strong:after{background-color:rgba(0,0,0,.7)}.white{background-color:#fff!important}.white-text{color:#fff!important}.rgba-white-slight,.rgba-white-slight:after{background-color:rgba(255,255,255,.1)}.rgba-white-light,.rgba-white-light:after{background-color:rgba(255,255,255,.3)}.rgba-white-strong,.rgba-white-strong:after{background-color:rgba(255,255,255,.7)}.rgba-stylish-slight{background-color:rgba(62,69,81,.1)}.rgba-stylish-light{background-color:rgba(62,69,81,.3)}.rgba-stylish-strong{background-color:rgba(62,69,81,.7)}.primary-color{background-color:#4285f4!important}.primary-color-dark{background-color:#0d47a1!important}.secondary-color{background-color:#a6c!important}.secondary-color-dark{background-color:#93c!important}.default-color{background-color:#2bbbad!important}.default-color-dark{background-color:#00695c!important}.info-color{background-color:#33b5e5!important}.info-color-dark{background-color:#09c!important}.success-color{background-color:#00c851!important}.success-color-dark{background-color:#007e33!important}.warning-color{background-color:#fb3!important}.warning-color-dark{background-color:#f80!important}.danger-color{background-color:#ff3547!important}.danger-color-dark{background-color:#c00!important}.elegant-color{background-color:#2e2e2e!important}.elegant-color-dark{background-color:#212121!important}.stylish-color{background-color:#4b515d!important}.stylish-color-dark{background-color:#3e4551!important}.unique-color{background-color:#3f729b!important}.unique-color-dark{background-color:#1c2331!important}.special-color{background-color:#37474f!important}.special-color-dark{background-color:#263238!important}.purple-gradient{background:linear-gradient(40deg,#ff6ec4,#7873f5)!important}.peach-gradient{background:linear-gradient(40deg,#ffd86f,#fc6262)!important}.aqua-gradient{background:linear-gradient(40deg,#2096ff,#05ffa3)!important}.blue-gradient{background:linear-gradient(40deg,#45cafc,#303f9f)!important}.purple-gradient-rgba{background:linear-gradient(40deg,rgba(255,110,196,.9),rgba(120,115,245,.9))!important}.peach-gradient-rgba{background:linear-gradient(40deg,rgba(255,216,111,.9),rgba(252,98,98,.9))!important}.aqua-gradient-rgba{background:linear-gradient(40deg,rgba(32,150,255,.9),rgba(5,255,163,.9))!important}.blue-gradient-rgba{background:linear-gradient(40deg,rgba(69,202,252,.9),rgba(48,63,159,.9))!important}.dark-grey-text,.dark-grey-text:focus,.dark-grey-text:hover{color:#4f4f4f!important}.hoverable{box-shadow:none;transition:.55s ease-in-out}.hoverable:hover{box-shadow:0 8px 17px 0 rgba(0,0,0,.2),0 6px 20px 0 rgba(0,0,0,.19);transition:.55s ease-in-out}.z-depth-0{box-shadow:none!important}.z-depth-1{box-shadow:0 2px 5px 0 rgba(0,0,0,.16),0 2px 10px 0 rgba(0,0,0,.12)!important}.z-depth-1-half{box-shadow:0 5px 11px 0 rgba(0,0,0,.18),0 4px 15px 0 rgba(0,0,0,.15)!important}.z-depth-2{box-shadow:0 8px 17px 0 rgba(0,0,0,.2),0 6px 20px 0 rgba(0,0,0,.19)!important}.z-depth-3{box-shadow:0 12px 15px 0 rgba(0,0,0,.24),0 17px 50px 0 rgba(0,0,0,.19)!important}.z-depth-4{box-shadow:0 16px 28px 0 rgba(0,0,0,.22),0 25px 55px 0 rgba(0,0,0,.21)!important}.z-depth-5{box-shadow:0 27px 24px 0 rgba(0,0,0,.2),0 40px 77px 0 rgba(0,0,0,.22)!important}.disabled,:disabled{pointer-events:none!important}a{cursor:pointer;text-decoration:none;color:#0275d8;transition:.2s ease-in-out}a:hover{text-decoration:none;color:#014c8c;transition:.2s ease-in-out}a.disabled:hover,a:disabled:hover{color:#0275d8}a:not([href]):not([tabindex]),a:not([href]):not([tabindex]):focus,a:not([href]):not([tabindex]):hover{color:inherit;text-decoration:none}.card{box-shadow:0 2px 5px 0 rgba(0,0,0,.16),0 2px 10px 0 rgba(0,0,0,.12);border:0;font-weight:400}.card[class*=border]{border:1px solid #9e9e9e;box-shadow:none}.card .card-body h1,.card .card-body h2,.card .card-body h3,.card .card-body h4,.card .card-body h5,.card .card-body h6{font-weight:400}.card .card-body .card-title a,.card .card-body .card-title a:hover{transition:.2s ease-in-out}.card .card-body .card-text{color:#747373;font-size:.9rem;font-weight:400}.card .md-form label{font-weight:300}.card-text:last-child{margin-bottom:1rem!important}mdb-card-img img.img-fluid{width:100%}"]
                    }] }
        ];
        /** @nocollapse */
        MdbCardComponent.ctorParameters = function () {
            return [
                { type: i0.ElementRef },
                { type: i0.Renderer2 }
            ];
        };
        MdbCardComponent.propDecorators = {
            class: [{ type: i0.Input }],
            cascade: [{ type: i0.Input }],
            wider: [{ type: i0.Input }],
            imageBackground: [{ type: i0.Input }],
            card: [{ type: i0.ViewChild, args: ['card', { static: true },] }],
            narrower: [{ type: i0.Input }],
            reverse: [{ type: i0.Input }],
            dark: [{ type: i0.Input }],
            bgColor: [{ type: i0.Input }],
            borderColor: [{ type: i0.Input }]
        };
        return MdbCardComponent;
    }());

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */
    var MdbCardImageComponent = /** @class */ (function () {
        function MdbCardImageComponent() {
        }
        MdbCardImageComponent.decorators = [
            { type: i0.Component, args: [{
                        selector: 'mdb-card-img',
                        template: "<img class=\"img-fluid\" [src]=\"src\" [alt]=\"alt\">",
                        changeDetection: i0.ChangeDetectionStrategy.OnPush
                    }] }
        ];
        MdbCardImageComponent.propDecorators = {
            src: [{ type: i0.Input }],
            alt: [{ type: i0.Input }]
        };
        return MdbCardImageComponent;
    }());

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */
    var MdbCardHeaderComponent = /** @class */ (function () {
        function MdbCardHeaderComponent(_el, _r) {
            this._el = _el;
            this._r = _r;
        }
        /**
         * @return {?}
         */
        MdbCardHeaderComponent.prototype.ngOnInit = /**
         * @return {?}
         */
            function () {
                var _this = this;
                this._r.addClass(this._el.nativeElement, 'card-header');
                if (this.class) {
                    this.class.split(' ').forEach(( /**
                     * @param {?} element
                     * @return {?}
                     */function (element) {
                        _this._r.addClass(_this._el.nativeElement, element);
                    }));
                }
            };
        MdbCardHeaderComponent.decorators = [
            { type: i0.Component, args: [{
                        selector: 'mdb-card-header',
                        template: "<ng-content></ng-content>",
                        changeDetection: i0.ChangeDetectionStrategy.OnPush
                    }] }
        ];
        /** @nocollapse */
        MdbCardHeaderComponent.ctorParameters = function () {
            return [
                { type: i0.ElementRef },
                { type: i0.Renderer2 }
            ];
        };
        MdbCardHeaderComponent.propDecorators = {
            class: [{ type: i0.Input }]
        };
        return MdbCardHeaderComponent;
    }());

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */
    var CardsModule = /** @class */ (function () {
        function CardsModule() {
        }
        /**
         * @return {?}
         */
        CardsModule.forRoot = /**
         * @return {?}
         */
            function () {
                return { ngModule: CardsModule, providers: [] };
            };
        CardsModule.decorators = [
            { type: i0.NgModule, args: [{
                        imports: [common.CommonModule],
                        declarations: [
                            MdbCardComponent,
                            MdbCardBodyComponent,
                            MdbCardImageComponent,
                            MdbCardTextComponent,
                            MdbCardTitleComponent,
                            MdbCardFooterComponent,
                            MdbCardHeaderComponent,
                        ],
                        exports: [
                            MdbCardComponent,
                            MdbCardBodyComponent,
                            MdbCardImageComponent,
                            MdbCardTextComponent,
                            MdbCardTitleComponent,
                            MdbCardFooterComponent,
                            MdbCardHeaderComponent,
                        ],
                    },] }
        ];
        return CardsModule;
    }());

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */
    /*tslint:disable */
    /**
     * @license
     * Copyright Google Inc. All Rights Reserved.
     *
     * Use of this source code is governed by an MIT-style license that can be
     * found in the LICENSE file at https://angular.io/license
     */
    /**
     * JS version of browser APIs. This library can only run in the browser.
     * @type {?}
     */
    var win = typeof window !== 'undefined' && window || ( /** @type {?} */({}));
    /** @type {?} */
    var document$1 = win.document;
    /** @type {?} */
    var location = win.location;
    /** @type {?} */
    var gc = win['gc'] ? ( /**
     * @return {?}
     */function () { return win['gc'](); }) : ( /**
     * @return {?}
     */function () { return null; });
    /** @type {?} */
    var performance = win['performance'] ? win['performance'] : null;
    /** @type {?} */
    var Event = win['Event'];
    /** @type {?} */
    var MouseEvent = win['MouseEvent'];
    /** @type {?} */
    var KeyboardEvent = win['KeyboardEvent'];
    /** @type {?} */
    var EventTarget = win['EventTarget'];
    /** @type {?} */
    var History = win['History'];
    /** @type {?} */
    var Location = win['Location'];
    /** @type {?} */
    var EventListener = win['EventListener'];
    /** @type {?} */
    var navigator$1 = win['navigator'];

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */
    /**
     * @return {?}
     */
    function isBs3() {
        return win.__theme === 'bs4';
    }

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */
    var SlideComponent = /** @class */ (function () {
        function SlideComponent(el) {
            this.animated = false;
            this.directionNext = false;
            this.directionLeft = false;
            this.directionPrev = false;
            this.directionRight = false;
            /**
             * Wraps element by appropriate CSS classes
             */
            this.el = null;
            this.el = el;
        }
        SlideComponent.decorators = [
            { type: i0.Component, args: [{
                        selector: 'mdb-slide, mdb-carousel-item',
                        template: "\n    <ng-content></ng-content>\n  "
                    }] }
        ];
        /** @nocollapse */
        SlideComponent.ctorParameters = function () {
            return [
                { type: i0.ElementRef }
            ];
        };
        SlideComponent.propDecorators = {
            active: [{ type: i0.HostBinding, args: ['class.active',] }, { type: i0.Input }],
            animated: [{ type: i0.HostBinding, args: ['class.animated',] }],
            directionNext: [{ type: i0.HostBinding, args: ['class.carousel-item-next',] }],
            directionLeft: [{ type: i0.HostBinding, args: ['class.carousel-item-left',] }],
            directionPrev: [{ type: i0.HostBinding, args: ['class.carousel-item-prev',] }],
            directionRight: [{ type: i0.HostBinding, args: ['class.carousel-item-right',] }],
            el: [{ type: i0.HostBinding, args: ['class.carousel-item',] }]
        };
        return SlideComponent;
    }());

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */
    var CarouselConfig = /** @class */ (function () {
        function CarouselConfig() {
            /**
             * Default interval of auto changing of slides
             */
            this.interval = 5000;
            /**
             * Is loop of auto changing of slides can be paused
             */
            this.noPause = false;
            /**
             * Is slides can wrap from the last to the first slide
             */
            this.noWrap = false;
            this.keyboard = false;
        }
        CarouselConfig.decorators = [
            { type: i0.Injectable }
        ];
        return CarouselConfig;
    }());

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */
    /** @type {?} */
    var LEFT_ARROW = 37;
    /** @type {?} */
    var UP_ARROW = 38;
    /** @type {?} */
    var RIGHT_ARROW = 39;
    /** @type {?} */
    var DOWN_ARROW = 40;

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */
    /** @enum {number} */
    var Direction = {
        UNKNOWN: 0,
        NEXT: 1,
        PREV: 2,
    };
    Direction[Direction.UNKNOWN] = 'UNKNOWN';
    Direction[Direction.NEXT] = 'NEXT';
    Direction[Direction.PREV] = 'PREV';
    /**
     * Base element to create carousel
     */
    var CarouselComponent = /** @class */ (function () {
        function CarouselComponent(config, el, platformId, cdRef, renderer) {
            this.el = el;
            this.cdRef = cdRef;
            this.renderer = renderer;
            this.SWIPE_ACTION = { LEFT: 'swipeleft', RIGHT: 'swiperight' };
            this.destroyed = false;
            this.animationEnd = true;
            this.isBrowser = false;
            this.isControls = true;
            this.class = '';
            this.type = '';
            this.animation = '';
            this.activeSlideChange = new i0.EventEmitter(false);
            this.isBrowser = common.isPlatformBrowser(platformId);
            Object.assign(this, config);
        }
        Object.defineProperty(CarouselComponent.prototype, "slides", {
            get: /**
             * @return {?}
             */ function () {
                return this._slidesList.toArray();
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(CarouselComponent.prototype, "activeSlide", {
            get: /**
             * @return {?}
             */ function () {
                return this._currentActiveSlide;
            },
            set: /**
             * @param {?} index
             * @return {?}
             */ function (index) {
                if (this._slidesList && index !== this._currentActiveSlide) {
                    this._select(index);
                }
            },
            enumerable: true,
            configurable: true
        });
        /**
         * @return {?}
         */
        CarouselComponent.prototype.checkNavigation = /**
         * @return {?}
         */
            function () {
                if (this.type === 'carousel-multi-item') {
                    return false;
                }
                return true;
            };
        /**
         * @return {?}
         */
        CarouselComponent.prototype.checkDots = /**
         * @return {?}
         */
            function () {
                if (this.type === 'carousel-thumbnails') {
                    return false;
                }
                return true;
            };
        /**
         * @param {?} slide
         * @return {?}
         */
        CarouselComponent.prototype.getImg = /**
         * @param {?} slide
         * @return {?}
         */
            function (slide) {
                return slide.el.nativeElement.querySelector('img').src;
            };
        Object.defineProperty(CarouselComponent.prototype, "interval", {
            get: /**
             * @return {?}
             */ function () {
                return this._interval;
            },
            set: /**
             * @param {?} value
             * @return {?}
             */ function (value) {
                this._interval = value;
                this.restartTimer();
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(CarouselComponent.prototype, "isBs4", {
            get: /**
             * @return {?}
             */ function () {
                return !isBs3();
            },
            enumerable: true,
            configurable: true
        });
        /**
         * @return {?}
         */
        CarouselComponent.prototype.ngOnDestroy = /**
         * @return {?}
         */
            function () {
                this.destroyed = true;
            };
        /**
         * @return {?}
         */
        CarouselComponent.prototype.ngAfterViewInit = /**
         * @return {?}
         */
            function () {
                var _this = this;
                this.play();
                this._slidesList.changes.subscribe(( /**
                 * @param {?} slidesList
                 * @return {?}
                 */function (slidesList) {
                    _this._slidesList = slidesList;
                    setTimeout(( /**
                     * @return {?}
                     */function () {
                        _this._select(0);
                    }), 0);
                }));
                if (this.activeSlideIndex) {
                    setTimeout(( /**
                     * @return {?}
                     */function () {
                        _this._select(_this.activeSlideIndex);
                        _this.activeSlideChange.emit({ relatedTarget: _this.activeSlide });
                    }), 0);
                }
                else {
                    setTimeout(( /**
                     * @return {?}
                     */function () {
                        _this._select(0);
                    }), 0);
                }
                if (this.isControls) {
                    this.carouselIndicators = this.el.nativeElement.querySelectorAll('.carousel-indicators > li');
                    if (this.carouselIndicators.length && this.activeSlideIndex) {
                        this.renderer.addClass(this.carouselIndicators[this.activeSlideIndex], 'active');
                    }
                    else if (this.carouselIndicators.length) {
                        this.renderer.addClass(this.carouselIndicators[0], 'active');
                    }
                }
            };
        /**
         * @param {?=} action
         * @return {?}
         */
        CarouselComponent.prototype.swipe = /**
         * @param {?=} action
         * @return {?}
         */
            function (action) {
                if (action === void 0) {
                    action = this.SWIPE_ACTION.RIGHT;
                }
                if (action === this.SWIPE_ACTION.RIGHT) {
                    this.previousSlide();
                    this.cdRef.markForCheck();
                }
                if (action === this.SWIPE_ACTION.LEFT) {
                    this.nextSlide();
                    this.cdRef.markForCheck();
                }
            };
        /**
         * @param {?=} force
         * @return {?}
         */
        CarouselComponent.prototype.nextSlide = /**
         * @param {?=} force
         * @return {?}
         */
            function (force) {
                if (force === void 0) {
                    force = false;
                }
                this.restartTimer();
                // Start next slide, pause actual slide
                /** @type {?} */
                var videoList = this.el.nativeElement.getElementsByTagName('video');
                /** @type {?} */
                var direction = Direction.NEXT;
                /** @type {?} */
                var indexEl = this.findNextSlideIndex(direction, force);
                if (videoList.length > 0) {
                    // Check for video carousel
                    for (var i = 0; i < videoList.length; i++) {
                        if (i === indexEl) {
                            videoList[i].play();
                        }
                        else {
                            videoList[i].pause();
                        }
                    }
                }
                if (this.animation === 'slide') {
                    this.pause();
                    this.slideAnimation(this.findNextSlideIndex(Direction.NEXT, force), Direction.NEXT);
                    this.cdRef.markForCheck();
                }
                else if (this.animation === 'fade') {
                    this.pause();
                    this.fadeAnimation(this.findNextSlideIndex(Direction.NEXT, force), Direction.NEXT);
                    this.cdRef.markForCheck();
                }
                else {
                    this.activeSlide = this.findNextSlideIndex(Direction.NEXT, force);
                    this.cdRef.markForCheck();
                }
                if (!this.animation) {
                    this.activeSlideChange.emit({ direction: 'Next', relatedTarget: this.activeSlide });
                }
            };
        /**
         * @param {?=} force
         * @return {?}
         */
        CarouselComponent.prototype.previousSlide = /**
         * @param {?=} force
         * @return {?}
         */
            function (force) {
                if (force === void 0) {
                    force = false;
                }
                this.restartTimer();
                // Start previous slide, pause actual slide
                /** @type {?} */
                var videoList = this.el.nativeElement.getElementsByTagName('video');
                /** @type {?} */
                var direction = Direction.PREV;
                /** @type {?} */
                var indexel = this.findNextSlideIndex(direction, force);
                if (videoList.length > 0) {
                    // Check for video carousel
                    for (var i = 0; i < videoList.length; i++) {
                        if (i === indexel) {
                            videoList[i].play();
                        }
                        else {
                            videoList[i].pause();
                        }
                    }
                }
                if (this.animation === 'slide') {
                    this.pause();
                    this.slideAnimation(this.findNextSlideIndex(direction, force), direction);
                    this.cdRef.markForCheck();
                }
                else if (this.animation === 'fade') {
                    this.pause();
                    this.fadeAnimation(this.findNextSlideIndex(Direction.PREV, force), Direction.PREV);
                    this.cdRef.markForCheck();
                }
                else {
                    this.activeSlide = this.findNextSlideIndex(Direction.PREV, force);
                    this.cdRef.markForCheck();
                }
                if (!this.animation) {
                    this.activeSlideChange.emit({ direction: 'Prev', relatedTarget: this.activeSlide });
                }
            };
        /**
         * @protected
         * @param {?} goToIndex
         * @param {?=} direction
         * @return {?}
         */
        CarouselComponent.prototype.fadeAnimation = /**
         * @protected
         * @param {?} goToIndex
         * @param {?=} direction
         * @return {?}
         */
            function (goToIndex, direction) {
                var _this = this;
                /** @type {?} */
                var goToSlide = this.slides[goToIndex];
                if (this.animationEnd) {
                    this.animationEnd = false;
                    goToSlide.directionNext = true;
                    if (this.isBrowser) {
                        setTimeout(( /**
                         * @return {?}
                         */function () {
                            /** @type {?} */
                            var previous = _this.slides[_this._currentActiveSlide].el.nativeElement;
                            _this.renderer.setStyle(previous, 'opacity', '0');
                            _this.renderer.setStyle(previous, 'transition', 'all 600ms');
                            _this.renderer.setStyle(previous, 'display', 'block');
                            _this.renderer.setStyle(goToSlide.el.nativeElement, 'display', 'block');
                            _this.renderer.setStyle(goToSlide.el.nativeElement, 'opacity', '1');
                            _this.renderer.setStyle(goToSlide.el.nativeElement, 'transition', 'all 600ms');
                            if (direction === 1) {
                                _this.activeSlideChange.emit({ direction: 'Next', relatedTarget: _this.activeSlide });
                            }
                            else if (direction === 2) {
                                _this.activeSlideChange.emit({ direction: 'Prev', relatedTarget: _this.activeSlide });
                            }
                            goToSlide.directionNext = false;
                            _this.animationEnd = true;
                            _this.activeSlide = goToIndex;
                            _this.activeSlideChange.emit({ direction: 'Next', relatedTarget: _this.activeSlide });
                            _this.play();
                            _this.cdRef.markForCheck();
                        }), 0);
                    }
                }
            };
        /**
         * @protected
         * @param {?} goToIndex
         * @param {?} direction
         * @return {?}
         */
        CarouselComponent.prototype.slideAnimation = /**
         * @protected
         * @param {?} goToIndex
         * @param {?} direction
         * @return {?}
         */
            function (goToIndex, direction) {
                var _this = this;
                /** @type {?} */
                var currentSlide = this.slides[this._currentActiveSlide];
                /** @type {?} */
                var goToSlide = this.slides[goToIndex];
                if (this.animationEnd) {
                    if (direction === Direction.NEXT) {
                        this.animationEnd = false;
                        goToSlide.directionNext = true;
                        if (this.isBrowser) {
                            setTimeout(( /**
                             * @return {?}
                             */function () {
                                goToSlide.directionLeft = true;
                                currentSlide.directionLeft = true;
                                _this.cdRef.markForCheck();
                            }), 100);
                        }
                    }
                    if (direction === Direction.PREV) {
                        this.animationEnd = false;
                        goToSlide.directionPrev = true;
                        if (this.isBrowser) {
                            setTimeout(( /**
                             * @return {?}
                             */function () {
                                goToSlide.directionRight = true;
                                currentSlide.directionRight = true;
                                _this.cdRef.markForCheck();
                            }), 100);
                        }
                    }
                    if (this.isBrowser) {
                        setTimeout(( /**
                         * @return {?}
                         */function () {
                            goToSlide.directionLeft = false;
                            goToSlide.directionNext = false;
                            currentSlide.directionLeft = false;
                            currentSlide.directionNext = false;
                            goToSlide.directionRight = false;
                            goToSlide.directionPrev = false;
                            currentSlide.directionRight = false;
                            currentSlide.directionPrev = false;
                            _this.animationEnd = true;
                            _this.activeSlide = goToIndex;
                            /** @type {?} */
                            var directionName;
                            if (direction === Direction.NEXT) {
                                directionName = 'Next';
                            }
                            else if (direction === Direction.PREV) {
                                directionName = 'Prev';
                            }
                            _this.activeSlideChange.emit({
                                direction: directionName,
                                relatedTarget: _this.activeSlide,
                            });
                            _this.play();
                            _this.cdRef.markForCheck();
                        }), 700);
                    }
                }
            };
        /**
         * @param {?} index
         * @return {?}
         */
        CarouselComponent.prototype.selectSlide = /**
         * @param {?} index
         * @return {?}
         */
            function (index) {
                this.pause();
                if (this.animation === 'slide') {
                    if (this.activeSlide < index) {
                        this.slideAnimation(index, Direction.NEXT);
                    }
                    else if (this.activeSlide > index) {
                        this.slideAnimation(index, Direction.PREV);
                    }
                }
                else if (this.animation === 'fade') {
                    if (index !== this.activeSlide) {
                        this.fadeAnimation(index);
                    }
                }
                this.play();
            };
        /**
         * @return {?}
         */
        CarouselComponent.prototype.play = /**
         * @return {?}
         */
            function () {
                if (!this.isPlaying) {
                    this.isPlaying = true;
                    this.restartTimer();
                    this.cdRef.markForCheck();
                }
            };
        /**
         * @return {?}
         */
        CarouselComponent.prototype.pause = /**
         * @return {?}
         */
            function () {
                if (!this.noPause) {
                    this.isPlaying = false;
                    this.resetTimer();
                    this.cdRef.markForCheck();
                }
            };
        /**
         * @return {?}
         */
        CarouselComponent.prototype.getCurrentSlideIndex = /**
         * @return {?}
         */
            function () {
                return this.slides.findIndex(( /**
                 * @param {?} slide
                 * @return {?}
                 */function (slide) { return slide.active; }));
            };
        /**
         * @param {?} index
         * @return {?}
         */
        CarouselComponent.prototype.isLast = /**
         * @param {?} index
         * @return {?}
         */
            function (index) {
                return index + 1 >= this.slides.length;
            };
        /**
         * @private
         * @param {?} direction
         * @param {?} force
         * @return {?}
         */
        CarouselComponent.prototype.findNextSlideIndex = /**
         * @private
         * @param {?} direction
         * @param {?} force
         * @return {?}
         */
            function (direction, force) {
                /** @type {?} */
                var nextSlideIndex = 0;
                if (!force && (this.isLast(this.activeSlide) && direction !== Direction.PREV && this.noWrap)) {
                    return void 0;
                }
                switch (direction) {
                    case Direction.NEXT:
                        nextSlideIndex = !this.isLast(this._currentActiveSlide)
                            ? this._currentActiveSlide + 1
                            : !force && this.noWrap
                                ? this._currentActiveSlide
                                : 0;
                        break;
                    case Direction.PREV:
                        nextSlideIndex =
                            this._currentActiveSlide > 0
                                ? this._currentActiveSlide - 1
                                : !force && this.noWrap
                                    ? this._currentActiveSlide
                                    : this.slides.length - 1;
                        break;
                    default:
                        throw new Error('Unknown direction');
                }
                return nextSlideIndex;
            };
        /**
         * @private
         * @param {?} index
         * @return {?}
         */
        CarouselComponent.prototype._select = /**
         * @private
         * @param {?} index
         * @return {?}
         */
            function (index) {
                if (isNaN(index)) {
                    this.pause();
                    return;
                }
                /** @type {?} */
                var currentSlide = this.slides[this._currentActiveSlide];
                if (currentSlide) {
                    currentSlide.active = false;
                }
                /** @type {?} */
                var nextSlide = this.slides[index];
                if (nextSlide) {
                    this._currentActiveSlide = index;
                    nextSlide.active = true;
                    this.activeSlide = index;
                }
                this.cdRef.markForCheck();
            };
        /**
         * @private
         * @return {?}
         */
        CarouselComponent.prototype.restartTimer = /**
         * @private
         * @return {?}
         */
            function () {
                var _this = this;
                this.resetTimer();
                if (this.isBrowser) {
                    /** @type {?} */
                    var interval = +this.interval;
                    if (!isNaN(interval) && interval > 0) {
                        this.currentInterval = setInterval(( /**
                         * @return {?}
                         */function () {
                            /** @type {?} */
                            var nInterval = +_this.interval;
                            if (_this.isPlaying && !isNaN(_this.interval) && nInterval > 0 && _this.slides.length) {
                                _this.nextSlide();
                            }
                            else {
                                _this.pause();
                            }
                        }), interval);
                    }
                }
            };
        /**
         * @private
         * @return {?}
         */
        CarouselComponent.prototype.resetTimer = /**
         * @private
         * @return {?}
         */
            function () {
                if (this.isBrowser) {
                    if (this.currentInterval) {
                        clearInterval(this.currentInterval);
                        this.currentInterval = void 0;
                    }
                }
            };
        /**
         * @protected
         * @param {?} el
         * @param {?} className
         * @return {?}
         */
        CarouselComponent.prototype.hasClass = /**
         * @protected
         * @param {?} el
         * @param {?} className
         * @return {?}
         */
            function (el, className) {
                if (el.classList) {
                    return el.classList.contains(className);
                }
                else {
                    return !!el.className.match(new RegExp('(\\s|^)' + className + '(\\s|$)'));
                }
            };
        /**
         * @protected
         * @param {?} el
         * @param {?} className
         * @return {?}
         */
        CarouselComponent.prototype.classAdd = /**
         * @protected
         * @param {?} el
         * @param {?} className
         * @return {?}
         */
            function (el, className) {
                if (el.classList) {
                    el.classList.add(className);
                }
                else if (!this.hasClass(el, className)) {
                    el.className += ' ' + className;
                }
            };
        /**
         * @protected
         * @param {?} el
         * @param {?} className
         * @return {?}
         */
        CarouselComponent.prototype.removeClass = /**
         * @protected
         * @param {?} el
         * @param {?} className
         * @return {?}
         */
            function (el, className) {
                if (el.classList) {
                    el.classList.remove(className);
                }
                else if (this.hasClass(el, className)) {
                    /** @type {?} */
                    var reg = new RegExp('(\\s|^)' + className + '(\\s|$)');
                    el.className = el.className.replace(reg, ' ');
                }
            };
        /**
         * @param {?} event
         * @return {?}
         */
        CarouselComponent.prototype.keyboardControl = /**
         * @param {?} event
         * @return {?}
         */
            function (event) {
                if (this.keyboard) {
                    // tslint:disable-next-line: deprecation
                    if (event.keyCode === RIGHT_ARROW) {
                        this.nextSlide();
                    }
                    // tslint:disable-next-line: deprecation
                    if (event.keyCode === LEFT_ARROW) {
                        this.previousSlide();
                    }
                }
            };
        /**
         * @return {?}
         */
        CarouselComponent.prototype.focus = /**
         * @return {?}
         */
            function () {
                this.el.nativeElement.focus();
            };
        CarouselComponent.decorators = [
            { type: i0.Component, args: [{
                        selector: 'mdb-carousel',
                        template: "<div\n  tabindex=\"0\"\n  (swipeleft)=\"swipe($event.type)\"\n  (swiperight)=\"swipe($event.type)\"\n  (mouseenter)=\"pause()\"\n  (mouseleave)=\"play()\"\n  (mouseup)=\"play()\"\n  class=\"carousel {{ class }} {{ type }}\"\n>\n  <div class=\"controls-top\" *ngIf=\"slides.length > 1 && !checkNavigation() && isControls\">\n    <a\n      mdbBtn\n      floating=\"true\"\n      [class.disabled]=\"activeSlide === 0 && noWrap\"\n      (click)=\"previousSlide()\"\n      ><i class=\"fas fa-chevron-left\"></i\n    ></a>\n    <a mdbBtn floating=\"true\" (click)=\"nextSlide()\" [class.disabled]=\"isLast(activeSlide) && noWrap\"\n      ><i class=\"fas fa-chevron-right\"></i\n    ></a>\n  </div>\n  <ol class=\"carousel-indicators\" *ngIf=\"slides.length > 1 && checkDots() && isControls\">\n    <li\n      *ngFor=\"let slidez of slides; let i = index\"\n      [class.active]=\"slidez.active === true\"\n      (click)=\"selectSlide(i)\"\n    ></li>\n  </ol>\n  <ol class=\"carousel-indicators\" *ngIf=\"slides.length > 1 && !checkDots() && isControls\">\n    <li\n      *ngFor=\"let slidez of slides; let i = index\"\n      [class.active]=\"slidez.active === true\"\n      (click)=\"selectSlide(i)\"\n    >\n      <img class=\"d-block w-100 img-fluid\" src=\"{{ getImg(slidez) }}\" />\n    </li>\n  </ol>\n  <div class=\"carousel-inner\"><ng-content></ng-content></div>\n  <a\n    class=\"carousel-control-prev\"\n    [class.disabled]=\"activeSlide === 0 && noWrap\"\n    (click)=\"previousSlide()\"\n    *ngIf=\"slides.length > 1 && checkNavigation() && isControls\"\n  >\n    <span class=\"carousel-control-prev-icon\" aria-hidden=\"true\"></span>\n    <span class=\"sr-only\">Previous</span>\n  </a>\n  <a\n    class=\"carousel-control-next\"\n    (click)=\"nextSlide()\"\n    [class.disabled]=\"isLast(activeSlide) && noWrap\"\n    *ngIf=\"slides.length > 1 && checkNavigation() && isControls\"\n  >\n    <span class=\"carousel-control-next-icon\" aria-hidden=\"true\"></span>\n    <span class=\"sr-only\">Next</span>\n  </a>\n</div>\n",
                        encapsulation: i0.ViewEncapsulation.None,
                        changeDetection: i0.ChangeDetectionStrategy.OnPush,
                        styles: [".mdb-color.lighten-5{background-color:#d0d6e2!important}.mdb-color.lighten-4{background-color:#b1bace!important}.mdb-color.lighten-3{background-color:#929fba!important}.mdb-color.lighten-2{background-color:#7283a7!important}.mdb-color.lighten-1{background-color:#59698d!important}.mdb-color{background-color:#45526e!important}.mdb-color-text{color:#45526e!important}.rgba-mdb-color-slight,.rgba-mdb-color-slight:after{background-color:rgba(69,82,110,.1)}.rgba-mdb-color-light,.rgba-mdb-color-light:after{background-color:rgba(69,82,110,.3)}.rgba-mdb-color-strong,.rgba-mdb-color-strong:after{background-color:rgba(69,82,110,.7)}.mdb-color.darken-1{background-color:#3b465e!important}.mdb-color.darken-2{background-color:#2e3951!important}.mdb-color.darken-3{background-color:#1c2a48!important}.mdb-color.darken-4{background-color:#1c2331!important}.red.lighten-5{background-color:#ffebee!important}.red.lighten-4{background-color:#ffcdd2!important}.red.lighten-3{background-color:#ef9a9a!important}.red.lighten-2{background-color:#e57373!important}.red.lighten-1{background-color:#ef5350!important}.red{background-color:#f44336!important}.red-text{color:#f44336!important}.rgba-red-slight,.rgba-red-slight:after{background-color:rgba(244,67,54,.1)}.rgba-red-light,.rgba-red-light:after{background-color:rgba(244,67,54,.3)}.rgba-red-strong,.rgba-red-strong:after{background-color:rgba(244,67,54,.7)}.red.darken-1{background-color:#e53935!important}.red.darken-2{background-color:#d32f2f!important}.red.darken-3{background-color:#c62828!important}.red.darken-4{background-color:#b71c1c!important}.red.accent-1{background-color:#ff8a80!important}.red.accent-2{background-color:#ff5252!important}.red.accent-3{background-color:#ff1744!important}.red.accent-4{background-color:#d50000!important}.pink.lighten-5{background-color:#fce4ec!important}.pink.lighten-4{background-color:#f8bbd0!important}.pink.lighten-3{background-color:#f48fb1!important}.pink.lighten-2{background-color:#f06292!important}.pink.lighten-1{background-color:#ec407a!important}.pink{background-color:#e91e63!important}.pink-text{color:#e91e63!important}.rgba-pink-slight,.rgba-pink-slight:after{background-color:rgba(233,30,99,.1)}.rgba-pink-light,.rgba-pink-light:after{background-color:rgba(233,30,99,.3)}.rgba-pink-strong,.rgba-pink-strong:after{background-color:rgba(233,30,99,.7)}.pink.darken-1{background-color:#d81b60!important}.pink.darken-2{background-color:#c2185b!important}.pink.darken-3{background-color:#ad1457!important}.pink.darken-4{background-color:#880e4f!important}.pink.accent-1{background-color:#ff80ab!important}.pink.accent-2{background-color:#ff4081!important}.pink.accent-3{background-color:#f50057!important}.pink.accent-4{background-color:#c51162!important}.purple.lighten-5{background-color:#f3e5f5!important}.purple.lighten-4{background-color:#e1bee7!important}.purple.lighten-3{background-color:#ce93d8!important}.purple.lighten-2{background-color:#ba68c8!important}.purple.lighten-1{background-color:#ab47bc!important}.purple{background-color:#9c27b0!important}.purple-text{color:#9c27b0!important}.rgba-purple-slight,.rgba-purple-slight:after{background-color:rgba(156,39,176,.1)}.rgba-purple-light,.rgba-purple-light:after{background-color:rgba(156,39,176,.3)}.rgba-purple-strong,.rgba-purple-strong:after{background-color:rgba(156,39,176,.7)}.purple.darken-1{background-color:#8e24aa!important}.purple.darken-2{background-color:#7b1fa2!important}.purple.darken-3{background-color:#6a1b9a!important}.purple.darken-4{background-color:#4a148c!important}.purple.accent-1{background-color:#ea80fc!important}.purple.accent-2{background-color:#e040fb!important}.purple.accent-3{background-color:#d500f9!important}.purple.accent-4{background-color:#a0f!important}.deep-purple.lighten-5{background-color:#ede7f6!important}.deep-purple.lighten-4{background-color:#d1c4e9!important}.deep-purple.lighten-3{background-color:#b39ddb!important}.deep-purple.lighten-2{background-color:#9575cd!important}.deep-purple.lighten-1{background-color:#7e57c2!important}.deep-purple{background-color:#673ab7!important}.deep-purple-text{color:#673ab7!important}.rgba-deep-purple-slight,.rgba-deep-purple-slight:after{background-color:rgba(103,58,183,.1)}.rgba-deep-purple-light,.rgba-deep-purple-light:after{background-color:rgba(103,58,183,.3)}.rgba-deep-purple-strong,.rgba-deep-purple-strong:after{background-color:rgba(103,58,183,.7)}.deep-purple.darken-1{background-color:#5e35b1!important}.deep-purple.darken-2{background-color:#512da8!important}.deep-purple.darken-3{background-color:#4527a0!important}.deep-purple.darken-4{background-color:#311b92!important}.deep-purple.accent-1{background-color:#b388ff!important}.deep-purple.accent-2{background-color:#7c4dff!important}.deep-purple.accent-3{background-color:#651fff!important}.deep-purple.accent-4{background-color:#6200ea!important}.indigo.lighten-5{background-color:#e8eaf6!important}.indigo.lighten-4{background-color:#c5cae9!important}.indigo.lighten-3{background-color:#9fa8da!important}.indigo.lighten-2{background-color:#7986cb!important}.indigo.lighten-1{background-color:#5c6bc0!important}.indigo{background-color:#3f51b5!important}.indigo-text{color:#3f51b5!important}.rgba-indigo-slight,.rgba-indigo-slight:after{background-color:rgba(63,81,181,.1)}.rgba-indigo-light,.rgba-indigo-light:after{background-color:rgba(63,81,181,.3)}.rgba-indigo-strong,.rgba-indigo-strong:after{background-color:rgba(63,81,181,.7)}.indigo.darken-1{background-color:#3949ab!important}.indigo.darken-2{background-color:#303f9f!important}.indigo.darken-3{background-color:#283593!important}.indigo.darken-4{background-color:#1a237e!important}.indigo.accent-1{background-color:#8c9eff!important}.indigo.accent-2{background-color:#536dfe!important}.indigo.accent-3{background-color:#3d5afe!important}.indigo.accent-4{background-color:#304ffe!important}.blue.lighten-5{background-color:#e3f2fd!important}.blue.lighten-4{background-color:#bbdefb!important}.blue.lighten-3{background-color:#90caf9!important}.blue.lighten-2{background-color:#64b5f6!important}.blue.lighten-1{background-color:#42a5f5!important}.blue{background-color:#2196f3!important}.blue-text{color:#2196f3!important}.rgba-blue-slight,.rgba-blue-slight:after{background-color:rgba(33,150,243,.1)}.rgba-blue-light,.rgba-blue-light:after{background-color:rgba(33,150,243,.3)}.rgba-blue-strong,.rgba-blue-strong:after{background-color:rgba(33,150,243,.7)}.blue.darken-1{background-color:#1e88e5!important}.blue.darken-2{background-color:#1976d2!important}.blue.darken-3{background-color:#1565c0!important}.blue.darken-4{background-color:#0d47a1!important}.blue.accent-1{background-color:#82b1ff!important}.blue.accent-2{background-color:#448aff!important}.blue.accent-3{background-color:#2979ff!important}.blue.accent-4{background-color:#2962ff!important}.light-blue.lighten-5{background-color:#e1f5fe!important}.light-blue.lighten-4{background-color:#b3e5fc!important}.light-blue.lighten-3{background-color:#81d4fa!important}.light-blue.lighten-2{background-color:#4fc3f7!important}.light-blue.lighten-1{background-color:#29b6f6!important}.light-blue{background-color:#03a9f4!important}.light-blue-text{color:#03a9f4!important}.rgba-light-blue-slight,.rgba-light-blue-slight:after{background-color:rgba(3,169,244,.1)}.rgba-light-blue-light,.rgba-light-blue-light:after{background-color:rgba(3,169,244,.3)}.rgba-light-blue-strong,.rgba-light-blue-strong:after{background-color:rgba(3,169,244,.7)}.light-blue.darken-1{background-color:#039be5!important}.light-blue.darken-2{background-color:#0288d1!important}.light-blue.darken-3{background-color:#0277bd!important}.light-blue.darken-4{background-color:#01579b!important}.light-blue.accent-1{background-color:#80d8ff!important}.light-blue.accent-2{background-color:#40c4ff!important}.light-blue.accent-3{background-color:#00b0ff!important}.light-blue.accent-4{background-color:#0091ea!important}.cyan.lighten-5{background-color:#e0f7fa!important}.cyan.lighten-4{background-color:#b2ebf2!important}.cyan.lighten-3{background-color:#80deea!important}.cyan.lighten-2{background-color:#4dd0e1!important}.cyan.lighten-1{background-color:#26c6da!important}.cyan{background-color:#00bcd4!important}.cyan-text{color:#00bcd4!important}.rgba-cyan-slight,.rgba-cyan-slight:after{background-color:rgba(0,188,212,.1)}.rgba-cyan-light,.rgba-cyan-light:after{background-color:rgba(0,188,212,.3)}.rgba-cyan-strong,.rgba-cyan-strong:after{background-color:rgba(0,188,212,.7)}.cyan.darken-1{background-color:#00acc1!important}.cyan.darken-2{background-color:#0097a7!important}.cyan.darken-3{background-color:#00838f!important}.cyan.darken-4{background-color:#006064!important}.cyan.accent-1{background-color:#84ffff!important}.cyan.accent-2{background-color:#18ffff!important}.cyan.accent-3{background-color:#00e5ff!important}.cyan.accent-4{background-color:#00b8d4!important}.teal.lighten-5{background-color:#e0f2f1!important}.teal.lighten-4{background-color:#b2dfdb!important}.teal.lighten-3{background-color:#80cbc4!important}.teal.lighten-2{background-color:#4db6ac!important}.teal.lighten-1{background-color:#26a69a!important}.teal{background-color:#009688!important}.teal-text{color:#009688!important}.rgba-teal-slight,.rgba-teal-slight:after{background-color:rgba(0,150,136,.1)}.rgba-teal-light,.rgba-teal-light:after{background-color:rgba(0,150,136,.3)}.rgba-teal-strong,.rgba-teal-strong:after{background-color:rgba(0,150,136,.7)}.teal.darken-1{background-color:#00897b!important}.teal.darken-2{background-color:#00796b!important}.teal.darken-3{background-color:#00695c!important}.teal.darken-4{background-color:#004d40!important}.teal.accent-1{background-color:#a7ffeb!important}.teal.accent-2{background-color:#64ffda!important}.teal.accent-3{background-color:#1de9b6!important}.teal.accent-4{background-color:#00bfa5!important}.green.lighten-5{background-color:#e8f5e9!important}.green.lighten-4{background-color:#c8e6c9!important}.green.lighten-3{background-color:#a5d6a7!important}.green.lighten-2{background-color:#81c784!important}.green.lighten-1{background-color:#66bb6a!important}.green{background-color:#4caf50!important}.green-text{color:#4caf50!important}.rgba-green-slight,.rgba-green-slight:after{background-color:rgba(76,175,80,.1)}.rgba-green-light,.rgba-green-light:after{background-color:rgba(76,175,80,.3)}.rgba-green-strong,.rgba-green-strong:after{background-color:rgba(76,175,80,.7)}.green.darken-1{background-color:#43a047!important}.green.darken-2{background-color:#388e3c!important}.green.darken-3{background-color:#2e7d32!important}.green.darken-4{background-color:#1b5e20!important}.green.accent-1{background-color:#b9f6ca!important}.green.accent-2{background-color:#69f0ae!important}.green.accent-3{background-color:#00e676!important}.green.accent-4{background-color:#00c853!important}.light-green.lighten-5{background-color:#f1f8e9!important}.light-green.lighten-4{background-color:#dcedc8!important}.light-green.lighten-3{background-color:#c5e1a5!important}.light-green.lighten-2{background-color:#aed581!important}.light-green.lighten-1{background-color:#9ccc65!important}.light-green{background-color:#8bc34a!important}.light-green-text{color:#8bc34a!important}.rgba-light-green-slight,.rgba-light-green-slight:after{background-color:rgba(139,195,74,.1)}.rgba-light-green-light,.rgba-light-green-light:after{background-color:rgba(139,195,74,.3)}.rgba-light-green-strong,.rgba-light-green-strong:after{background-color:rgba(139,195,74,.7)}.light-green.darken-1{background-color:#7cb342!important}.light-green.darken-2{background-color:#689f38!important}.light-green.darken-3{background-color:#558b2f!important}.light-green.darken-4{background-color:#33691e!important}.light-green.accent-1{background-color:#ccff90!important}.light-green.accent-2{background-color:#b2ff59!important}.light-green.accent-3{background-color:#76ff03!important}.light-green.accent-4{background-color:#64dd17!important}.lime.lighten-5{background-color:#f9fbe7!important}.lime.lighten-4{background-color:#f0f4c3!important}.lime.lighten-3{background-color:#e6ee9c!important}.lime.lighten-2{background-color:#dce775!important}.lime.lighten-1{background-color:#d4e157!important}.lime{background-color:#cddc39!important}.lime-text{color:#cddc39!important}.rgba-lime-slight,.rgba-lime-slight:after{background-color:rgba(205,220,57,.1)}.rgba-lime-light,.rgba-lime-light:after{background-color:rgba(205,220,57,.3)}.rgba-lime-strong,.rgba-lime-strong:after{background-color:rgba(205,220,57,.7)}.lime.darken-1{background-color:#c0ca33!important}.lime.darken-2{background-color:#afb42b!important}.lime.darken-3{background-color:#9e9d24!important}.lime.darken-4{background-color:#827717!important}.lime.accent-1{background-color:#f4ff81!important}.lime.accent-2{background-color:#eeff41!important}.lime.accent-3{background-color:#c6ff00!important}.lime.accent-4{background-color:#aeea00!important}.yellow.lighten-5{background-color:#fffde7!important}.yellow.lighten-4{background-color:#fff9c4!important}.yellow.lighten-3{background-color:#fff59d!important}.yellow.lighten-2{background-color:#fff176!important}.yellow.lighten-1{background-color:#ffee58!important}.yellow{background-color:#ffeb3b!important}.yellow-text{color:#ffeb3b!important}.rgba-yellow-slight,.rgba-yellow-slight:after{background-color:rgba(255,235,59,.1)}.rgba-yellow-light,.rgba-yellow-light:after{background-color:rgba(255,235,59,.3)}.rgba-yellow-strong,.rgba-yellow-strong:after{background-color:rgba(255,235,59,.7)}.yellow.darken-1{background-color:#fdd835!important}.yellow.darken-2{background-color:#fbc02d!important}.yellow.darken-3{background-color:#f9a825!important}.yellow.darken-4{background-color:#f57f17!important}.yellow.accent-1{background-color:#ffff8d!important}.yellow.accent-2{background-color:#ff0!important}.yellow.accent-3{background-color:#ffea00!important}.yellow.accent-4{background-color:#ffd600!important}.amber.lighten-5{background-color:#fff8e1!important}.amber.lighten-4{background-color:#ffecb3!important}.amber.lighten-3{background-color:#ffe082!important}.amber.lighten-2{background-color:#ffd54f!important}.amber.lighten-1{background-color:#ffca28!important}.amber{background-color:#ffc107!important}.amber-text{color:#ffc107!important}.rgba-amber-slight,.rgba-amber-slight:after{background-color:rgba(255,193,7,.1)}.rgba-amber-light,.rgba-amber-light:after{background-color:rgba(255,193,7,.3)}.rgba-amber-strong,.rgba-amber-strong:after{background-color:rgba(255,193,7,.7)}.amber.darken-1{background-color:#ffb300!important}.amber.darken-2{background-color:#ffa000!important}.amber.darken-3{background-color:#ff8f00!important}.amber.darken-4{background-color:#ff6f00!important}.amber.accent-1{background-color:#ffe57f!important}.amber.accent-2{background-color:#ffd740!important}.amber.accent-3{background-color:#ffc400!important}.amber.accent-4{background-color:#ffab00!important}.orange.lighten-5{background-color:#fff3e0!important}.orange.lighten-4{background-color:#ffe0b2!important}.orange.lighten-3{background-color:#ffcc80!important}.orange.lighten-2{background-color:#ffb74d!important}.orange.lighten-1{background-color:#ffa726!important}.orange{background-color:#ff9800!important}.orange-text{color:#ff9800!important}.rgba-orange-slight,.rgba-orange-slight:after{background-color:rgba(255,152,0,.1)}.rgba-orange-light,.rgba-orange-light:after{background-color:rgba(255,152,0,.3)}.rgba-orange-strong,.rgba-orange-strong:after{background-color:rgba(255,152,0,.7)}.orange.darken-1{background-color:#fb8c00!important}.orange.darken-2{background-color:#f57c00!important}.orange.darken-3{background-color:#ef6c00!important}.orange.darken-4{background-color:#e65100!important}.orange.accent-1{background-color:#ffd180!important}.orange.accent-2{background-color:#ffab40!important}.orange.accent-3{background-color:#ff9100!important}.orange.accent-4{background-color:#ff6d00!important}.deep-orange.lighten-5{background-color:#fbe9e7!important}.deep-orange.lighten-4{background-color:#ffccbc!important}.deep-orange.lighten-3{background-color:#ffab91!important}.deep-orange.lighten-2{background-color:#ff8a65!important}.deep-orange.lighten-1{background-color:#ff7043!important}.deep-orange{background-color:#ff5722!important}.deep-orange-text{color:#ff5722!important}.rgba-deep-orange-slight,.rgba-deep-orange-slight:after{background-color:rgba(255,87,34,.1)}.rgba-deep-orange-light,.rgba-deep-orange-light:after{background-color:rgba(255,87,34,.3)}.rgba-deep-orange-strong,.rgba-deep-orange-strong:after{background-color:rgba(255,87,34,.7)}.deep-orange.darken-1{background-color:#f4511e!important}.deep-orange.darken-2{background-color:#e64a19!important}.deep-orange.darken-3{background-color:#d84315!important}.deep-orange.darken-4{background-color:#bf360c!important}.deep-orange.accent-1{background-color:#ff9e80!important}.deep-orange.accent-2{background-color:#ff6e40!important}.deep-orange.accent-3{background-color:#ff3d00!important}.deep-orange.accent-4{background-color:#dd2c00!important}.brown.lighten-5{background-color:#efebe9!important}.brown.lighten-4{background-color:#d7ccc8!important}.brown.lighten-3{background-color:#bcaaa4!important}.brown.lighten-2{background-color:#a1887f!important}.brown.lighten-1{background-color:#8d6e63!important}.brown{background-color:#795548!important}.brown-text{color:#795548!important}.rgba-brown-slight,.rgba-brown-slight:after{background-color:rgba(121,85,72,.1)}.rgba-brown-light,.rgba-brown-light:after{background-color:rgba(121,85,72,.3)}.rgba-brown-strong,.rgba-brown-strong:after{background-color:rgba(121,85,72,.7)}.brown.darken-1{background-color:#6d4c41!important}.brown.darken-2{background-color:#5d4037!important}.brown.darken-3{background-color:#4e342e!important}.brown.darken-4{background-color:#3e2723!important}.blue-grey.lighten-5{background-color:#eceff1!important}.blue-grey.lighten-4{background-color:#cfd8dc!important}.blue-grey.lighten-3{background-color:#b0bec5!important}.blue-grey.lighten-2{background-color:#90a4ae!important}.blue-grey.lighten-1{background-color:#78909c!important}.blue-grey{background-color:#607d8b!important}.blue-grey-text{color:#607d8b!important}.rgba-blue-grey-slight,.rgba-blue-grey-slight:after{background-color:rgba(96,125,139,.1)}.rgba-blue-grey-light,.rgba-blue-grey-light:after{background-color:rgba(96,125,139,.3)}.rgba-blue-grey-strong,.rgba-blue-grey-strong:after{background-color:rgba(96,125,139,.7)}.blue-grey.darken-1{background-color:#546e7a!important}.blue-grey.darken-2{background-color:#455a64!important}.blue-grey.darken-3{background-color:#37474f!important}.blue-grey.darken-4{background-color:#263238!important}.grey.lighten-5{background-color:#fafafa!important}.grey.lighten-4{background-color:#f5f5f5!important}.grey.lighten-3{background-color:#eee!important}.grey.lighten-2{background-color:#e0e0e0!important}.grey.lighten-1{background-color:#bdbdbd!important}.grey{background-color:#9e9e9e!important}.grey-text{color:#9e9e9e!important}.rgba-grey-slight,.rgba-grey-slight:after{background-color:rgba(158,158,158,.1)}.rgba-grey-light,.rgba-grey-light:after{background-color:rgba(158,158,158,.3)}.rgba-grey-strong,.rgba-grey-strong:after{background-color:rgba(158,158,158,.7)}.grey.darken-1{background-color:#757575!important}.grey.darken-2{background-color:#616161!important}.grey.darken-3{background-color:#424242!important}.grey.darken-4{background-color:#212121!important}.black{background-color:#000!important}.black-text{color:#000!important}.rgba-black-slight,.rgba-black-slight:after{background-color:rgba(0,0,0,.1)}.rgba-black-light,.rgba-black-light:after{background-color:rgba(0,0,0,.3)}.rgba-black-strong,.rgba-black-strong:after{background-color:rgba(0,0,0,.7)}.white{background-color:#fff!important}.white-text{color:#fff!important}.rgba-white-slight,.rgba-white-slight:after{background-color:rgba(255,255,255,.1)}.rgba-white-light,.rgba-white-light:after{background-color:rgba(255,255,255,.3)}.rgba-white-strong,.rgba-white-strong:after{background-color:rgba(255,255,255,.7)}.rgba-stylish-slight{background-color:rgba(62,69,81,.1)}.rgba-stylish-light{background-color:rgba(62,69,81,.3)}.rgba-stylish-strong{background-color:rgba(62,69,81,.7)}.primary-color{background-color:#4285f4!important}.primary-color-dark{background-color:#0d47a1!important}.secondary-color{background-color:#a6c!important}.secondary-color-dark{background-color:#93c!important}.default-color{background-color:#2bbbad!important}.default-color-dark{background-color:#00695c!important}.info-color{background-color:#33b5e5!important}.info-color-dark{background-color:#09c!important}.success-color{background-color:#00c851!important}.success-color-dark{background-color:#007e33!important}.warning-color{background-color:#fb3!important}.warning-color-dark{background-color:#f80!important}.danger-color{background-color:#ff3547!important}.danger-color-dark{background-color:#c00!important}.elegant-color{background-color:#2e2e2e!important}.elegant-color-dark{background-color:#212121!important}.stylish-color{background-color:#4b515d!important}.stylish-color-dark{background-color:#3e4551!important}.unique-color{background-color:#3f729b!important}.unique-color-dark{background-color:#1c2331!important}.special-color{background-color:#37474f!important}.special-color-dark{background-color:#263238!important}.purple-gradient{background:linear-gradient(40deg,#ff6ec4,#7873f5)!important}.peach-gradient{background:linear-gradient(40deg,#ffd86f,#fc6262)!important}.aqua-gradient{background:linear-gradient(40deg,#2096ff,#05ffa3)!important}.blue-gradient{background:linear-gradient(40deg,#45cafc,#303f9f)!important}.purple-gradient-rgba{background:linear-gradient(40deg,rgba(255,110,196,.9),rgba(120,115,245,.9))!important}.peach-gradient-rgba{background:linear-gradient(40deg,rgba(255,216,111,.9),rgba(252,98,98,.9))!important}.aqua-gradient-rgba{background:linear-gradient(40deg,rgba(32,150,255,.9),rgba(5,255,163,.9))!important}.blue-gradient-rgba{background:linear-gradient(40deg,rgba(69,202,252,.9),rgba(48,63,159,.9))!important}.dark-grey-text,.dark-grey-text:focus,.dark-grey-text:hover{color:#4f4f4f!important}.hoverable{box-shadow:none;transition:.55s ease-in-out}.hoverable:hover{box-shadow:0 8px 17px 0 rgba(0,0,0,.2),0 6px 20px 0 rgba(0,0,0,.19);transition:.55s ease-in-out}.z-depth-0{box-shadow:none!important}.z-depth-1{box-shadow:0 2px 5px 0 rgba(0,0,0,.16),0 2px 10px 0 rgba(0,0,0,.12)!important}.z-depth-1-half{box-shadow:0 5px 11px 0 rgba(0,0,0,.18),0 4px 15px 0 rgba(0,0,0,.15)!important}.z-depth-2{box-shadow:0 8px 17px 0 rgba(0,0,0,.2),0 6px 20px 0 rgba(0,0,0,.19)!important}.z-depth-3{box-shadow:0 12px 15px 0 rgba(0,0,0,.24),0 17px 50px 0 rgba(0,0,0,.19)!important}.z-depth-4{box-shadow:0 16px 28px 0 rgba(0,0,0,.22),0 25px 55px 0 rgba(0,0,0,.21)!important}.z-depth-5{box-shadow:0 27px 24px 0 rgba(0,0,0,.2),0 40px 77px 0 rgba(0,0,0,.22)!important}.disabled,:disabled{pointer-events:none!important}a{cursor:pointer;text-decoration:none;color:#0275d8;transition:.2s ease-in-out}a:hover{text-decoration:none;color:#014c8c;transition:.2s ease-in-out}a.disabled:hover,a:disabled:hover{color:#0275d8}a:not([href]):not([tabindex]),a:not([href]):not([tabindex]):focus,a:not([href]):not([tabindex]):hover{color:inherit;text-decoration:none}.carousel .carousel-control-next-icon,.carousel .carousel-control-prev-icon{width:2.25rem;height:2.25rem}.carousel .carousel-indicators li{width:.625rem;height:.625rem;border-radius:50%;cursor:pointer}.carousel-fade .carousel-item{opacity:0;transition-duration:.6s;transition-property:opacity}.carousel-fade .carousel-item-next.carousel-item-left,.carousel-fade .carousel-item-prev.carousel-item-right,.carousel-fade .carousel-item.active{opacity:1}.carousel-fade .carousel-item-left.active,.carousel-fade .carousel-item-right.active{opacity:0}.carousel-fade .carousel-item-left.active,.carousel-fade .carousel-item-next,.carousel-fade .carousel-item-prev,.carousel-fade .carousel-item-prev.active,.carousel-fade .carousel-item.active{-webkit-transform:translateX(0);transform:translateX(0)}@supports ((-webkit-transform-style:preserve-3d) or (transform-style:preserve-3d)){.carousel-fade .carousel-item-left.active,.carousel-fade .carousel-item-next,.carousel-fade .carousel-item-prev,.carousel-fade .carousel-item-prev.active,.carousel-fade .carousel-item.active{-webkit-transform:translate3d(0,0,0);transform:translate3d(0,0,0)}}.carousel-control-next,.carousel-control-prev,.carousel-item-next,.carousel-item-prev,.carousel-item.active{display:flex;overflow:hidden}.carousel,.carousel-multi-item,.carousel-thumbnails{outline:0}.carousel-fade .carousel-inner .carousel-item{opacity:0;transition-property:opacity}.carousel-fade .carousel-inner .active{opacity:1;transition:.6s}.carousel-fade .carousel-inner>.carousel-item.active,.carousel-fade .carousel-inner>.carousel-item.next.left,.carousel-fade .carousel-inner>.carousel-item.prev.right{opacity:1;transition:.6s;-webkit-transform:translate3d(0,0,0);transform:translate3d(0,0,0)}"]
                    }] }
        ];
        /** @nocollapse */
        CarouselComponent.ctorParameters = function () {
            return [
                { type: CarouselConfig },
                { type: i0.ElementRef },
                { type: String, decorators: [{ type: i0.Inject, args: [i0.PLATFORM_ID,] }] },
                { type: i0.ChangeDetectorRef },
                { type: i0.Renderer2 }
            ];
        };
        CarouselComponent.propDecorators = {
            _slidesList: [{ type: i0.ContentChildren, args: [SlideComponent,] }],
            noWrap: [{ type: i0.Input }],
            noPause: [{ type: i0.Input }],
            isControls: [{ type: i0.Input }],
            keyboard: [{ type: i0.Input }],
            class: [{ type: i0.Input }],
            type: [{ type: i0.Input }],
            animation: [{ type: i0.Input }],
            activeSlideIndex: [{ type: i0.Input }],
            activeSlideChange: [{ type: i0.Output }],
            activeSlide: [{ type: i0.Input }],
            interval: [{ type: i0.Input }],
            play: [{ type: i0.HostListener, args: ['mouseleave',] }],
            pause: [{ type: i0.HostListener, args: ['mouseenter',] }],
            keyboardControl: [{ type: i0.HostListener, args: ['keyup', ['$event'],] }],
            focus: [{ type: i0.HostListener, args: ['click',] }]
        };
        return CarouselComponent;
    }());

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */
    var CarouselModule = /** @class */ (function () {
        function CarouselModule() {
        }
        /**
         * @return {?}
         */
        CarouselModule.forRoot = /**
         * @return {?}
         */
            function () {
                return { ngModule: CarouselModule, providers: [] };
            };
        CarouselModule.decorators = [
            { type: i0.NgModule, args: [{
                        imports: [common.CommonModule, ButtonsModule],
                        declarations: [SlideComponent, CarouselComponent],
                        exports: [SlideComponent, CarouselComponent],
                        providers: [CarouselConfig],
                    },] }
        ];
        return CarouselModule;
    }());

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */
    var BaseChartDirective = /** @class */ (function () {
        function BaseChartDirective(element, platformId) {
            this.element = element;
            this.labels = [];
            this.options = { legend: { display: false } };
            this.legend = false;
            this.chartClick = new i0.EventEmitter();
            this.chartHover = new i0.EventEmitter();
            this.initFlag = false;
            this.isBrowser = false;
            this.isBrowser = common.isPlatformBrowser(platformId);
        }
        /**
         * @return {?}
         */
        BaseChartDirective.prototype.ngOnInit = /**
         * @return {?}
         */
            function () {
                if (this.isBrowser) {
                    this.ctx = this.element.nativeElement.getContext('2d');
                    this.cvs = this.element.nativeElement;
                    this.initFlag = true;
                    if (this.data || this.datasets) {
                        this.refresh();
                    }
                }
            };
        /**
         * @param {?} changes
         * @return {?}
         */
        BaseChartDirective.prototype.ngOnChanges = /**
         * @param {?} changes
         * @return {?}
         */
            function (changes) {
                if (this.initFlag) {
                    // Check if the changes are in the data or datasets
                    if ((changes.hasOwnProperty('data') || changes.hasOwnProperty('datasets')) &&
                        !changes.hasOwnProperty('labels')) {
                        if (changes['data']) {
                            this.updateChartData(changes['data'].currentValue);
                        }
                        else {
                            this.updateChartData(changes['datasets'].currentValue);
                        }
                        this.chart.update();
                    }
                    else {
                        // otherwise rebuild the chart
                        this.refresh();
                    }
                }
            };
        /**
         * @return {?}
         */
        BaseChartDirective.prototype.ngOnDestroy = /**
         * @return {?}
         */
            function () {
                if (this.chart) {
                    this.chart.destroy();
                    this.chart = void 0;
                }
            };
        /**
         * @param {?} ctx
         * @return {?}
         */
        BaseChartDirective.prototype.getChartBuilder = /**
         * @param {?} ctx
         * @return {?}
         */
            function (ctx) {
                var _this = this;
                /** @type {?} */
                var datasets = this.getDatasets();
                /** @type {?} */
                var options = Object.assign({}, this.options);
                if (this.legend === false) {
                    options.legend = { display: false };
                }
                // hock for onHover and onClick events
                options.hover = options.hover || {};
                if (!options.hover.onHover) {
                    options.hover.onHover = ( /**
                     * @param {?} event
                     * @param {?} active
                     * @return {?}
                     */function (event, active) {
                        if (active && active.length) {
                            _this.chartHover.emit({ event: event, active: active });
                        }
                    });
                }
                if (!options.onClick) {
                    options.onClick = ( /**
                     * @param {?} event
                     * @param {?} active
                     * @return {?}
                     */function (event, active) {
                        _this.chartClick.emit({ event: event, active: active });
                    });
                }
                /** @type {?} */
                var opts = {
                    type: this.chartType,
                    data: {
                        labels: this.labels,
                        datasets: datasets,
                    },
                    options: options,
                };
                return new Chart(ctx, opts);
            };
        // feature(chart): added getPointDataAtEvent which will return clicked chart's point data
        // feature(chart): added getPointDataAtEvent which will return clicked chart's point data
        /**
         * @param {?} event
         * @return {?}
         */
        BaseChartDirective.prototype.getPointDataAtEvent =
            // feature(chart): added getPointDataAtEvent which will return clicked chart's point data
            /**
             * @param {?} event
             * @return {?}
             */
            function (event) {
                if (event.active.length > 0) {
                    /** @type {?} */
                    var datasetIndex = event.active[0]._datasetIndex;
                    /** @type {?} */
                    var dataIndex = event.active[0]._index;
                    /** @type {?} */
                    var dataObject = this.datasets[datasetIndex].data[dataIndex];
                    return dataObject;
                }
            };
        /**
         * @private
         * @param {?} newDataValues
         * @return {?}
         */
        BaseChartDirective.prototype.updateChartData = /**
         * @private
         * @param {?} newDataValues
         * @return {?}
         */
            function (newDataValues) {
                if (Array.isArray(newDataValues[0].data)) {
                    this.chart.data.datasets.forEach(( /**
                     * @param {?} dataset
                     * @param {?} i
                     * @return {?}
                     */function (dataset, i) {
                        dataset.data = newDataValues[i].data;
                        if (newDataValues[i].label) {
                            dataset.label = newDataValues[i].label;
                        }
                    }));
                }
                else {
                    this.chart.data.datasets[0].data = newDataValues;
                }
            };
        /**
         * @private
         * @return {?}
         */
        BaseChartDirective.prototype.getDatasets = /**
         * @private
         * @return {?}
         */
            function () {
                var _this = this;
                /** @type {?} */
                var datasets = void 0;
                // in case if datasets is not provided, but data is present
                if (!this.datasets || (!this.datasets.length && (this.data && this.data.length))) {
                    if (Array.isArray(this.data[0])) {
                        datasets = (( /** @type {?} */(this.data))).map(( /**
                         * @param {?} data
                         * @param {?} index
                         * @return {?}
                         */function (data, index) {
                            return { data: data, label: _this.labels[index] || "Label " + index };
                        }));
                    }
                    else {
                        datasets = [{ data: this.data, label: "Label 0" }];
                    }
                }
                if ((this.datasets && this.datasets.length) || (datasets && datasets.length)) {
                    datasets = (this.datasets || datasets).map(( /**
                     * @param {?} elm
                     * @param {?} index
                     * @return {?}
                     */function (elm, index) {
                        /** @type {?} */
                        var newElm = Object.assign({}, elm);
                        if (_this.colors && _this.colors.length) {
                            Object.assign(newElm, _this.colors[index]);
                        }
                        else {
                            Object.assign(newElm, getColors(_this.chartType, index, newElm.data.length));
                        }
                        return newElm;
                    }));
                }
                if (!datasets) {
                    throw new Error("ng-charts configuration error,\n      data or datasets field are required to render char " + this.chartType);
                }
                return datasets;
            };
        /**
         * @private
         * @return {?}
         */
        BaseChartDirective.prototype.refresh = /**
         * @private
         * @return {?}
         */
            function () {
                this.ngOnDestroy();
                this.chart = this.getChartBuilder(this.ctx);
            };
        BaseChartDirective.defaultColors = [
            [255, 99, 132],
            [54, 162, 235],
            [255, 206, 86],
            [231, 233, 237],
            [75, 192, 192],
            [151, 187, 205],
            [220, 220, 220],
            [247, 70, 74],
            [70, 191, 189],
            [253, 180, 92],
            [148, 159, 177],
            [77, 83, 96],
        ];
        BaseChartDirective.decorators = [
            { type: i0.Directive, args: [{ selector: 'canvas[mdbChart]', exportAs: 'mdb-base-chart' },] }
        ];
        /** @nocollapse */
        BaseChartDirective.ctorParameters = function () {
            return [
                { type: i0.ElementRef },
                { type: String, decorators: [{ type: i0.Inject, args: [i0.PLATFORM_ID,] }] }
            ];
        };
        BaseChartDirective.propDecorators = {
            data: [{ type: i0.Input }],
            datasets: [{ type: i0.Input }],
            labels: [{ type: i0.Input }],
            options: [{ type: i0.Input }],
            chartType: [{ type: i0.Input }],
            colors: [{ type: i0.Input }],
            legend: [{ type: i0.Input }],
            chartClick: [{ type: i0.Output }],
            chartHover: [{ type: i0.Output }]
        };
        return BaseChartDirective;
    }());
    /**
     * @param {?} colour
     * @param {?} alpha
     * @return {?}
     */
    function rgba(colour, alpha) {
        return 'rgba(' + colour.concat(alpha).join(',') + ')';
    }
    /**
     * @param {?} min
     * @param {?} max
     * @return {?}
     */
    function getRandomInt(min, max) {
        return Math.floor(Math.random() * (max - min + 1)) + min;
    }
    /**
     * @param {?} colors
     * @return {?}
     */
    function formatLineColor(colors) {
        return {
            backgroundColor: rgba(colors, 0.4),
            borderColor: rgba(colors, 1),
            pointBackgroundColor: rgba(colors, 1),
            pointBorderColor: '#fff',
            pointHoverBackgroundColor: '#fff',
            pointHoverBorderColor: rgba(colors, 0.8),
        };
    }
    /**
     * @param {?} colors
     * @return {?}
     */
    function formatBarColor(colors) {
        return {
            backgroundColor: rgba(colors, 0.6),
            borderColor: rgba(colors, 1),
            hoverBackgroundColor: rgba(colors, 0.8),
            hoverBorderColor: rgba(colors, 1),
        };
    }
    /**
     * @param {?} colors
     * @return {?}
     */
    function formatPieColors(colors) {
        return {
            backgroundColor: colors.map(( /**
             * @param {?} color
             * @return {?}
             */function (color) { return rgba(color, 0.6); })),
            borderColor: colors.map(( /**
             * @return {?}
             */function () { return '#fff'; })),
            pointBackgroundColor: colors.map(( /**
             * @param {?} color
             * @return {?}
             */function (color) { return rgba(color, 1); })),
            pointBorderColor: colors.map(( /**
             * @return {?}
             */function () { return '#fff'; })),
            pointHoverBackgroundColor: colors.map(( /**
             * @param {?} color
             * @return {?}
             */function (color) { return rgba(color, 1); })),
            pointHoverBorderColor: colors.map(( /**
             * @param {?} color
             * @return {?}
             */function (color) { return rgba(color, 1); })),
        };
    }
    /**
     * @param {?} colors
     * @return {?}
     */
    function formatPolarAreaColors(colors) {
        return {
            backgroundColor: colors.map(( /**
             * @param {?} color
             * @return {?}
             */function (color) { return rgba(color, 0.6); })),
            borderColor: colors.map(( /**
             * @param {?} color
             * @return {?}
             */function (color) { return rgba(color, 1); })),
            hoverBackgroundColor: colors.map(( /**
             * @param {?} color
             * @return {?}
             */function (color) { return rgba(color, 0.8); })),
            hoverBorderColor: colors.map(( /**
             * @param {?} color
             * @return {?}
             */function (color) { return rgba(color, 1); })),
        };
    }
    /**
     * @return {?}
     */
    function getRandomColor() {
        return [getRandomInt(0, 255), getRandomInt(0, 255), getRandomInt(0, 255)];
    }
    /**
     * Generate colors for line|bar charts
     * @param {?} index
     * @return {?}
     */
    function generateColor(index) {
        return BaseChartDirective.defaultColors[index] || getRandomColor();
    }
    /**
     * Generate colors for pie|doughnut charts
     * @param {?} count
     * @return {?}
     */
    function generateColors(count) {
        /** @type {?} */
        var colorsArr = new Array(count);
        for (var i = 0; i < count; i++) {
            colorsArr[i] = BaseChartDirective.defaultColors[i] || getRandomColor();
        }
        return colorsArr;
    }
    /**
     * Generate colors by chart type
     * @param {?} chartType
     * @param {?} index
     * @param {?} count
     * @return {?}
     */
    function getColors(chartType, index, count) {
        if (chartType === 'pie' || chartType === 'doughnut') {
            return formatPieColors(generateColors(count));
        }
        if (chartType === 'polarArea') {
            return formatPolarAreaColors(generateColors(count));
        }
        if (chartType === 'line' || chartType === 'radar') {
            return formatLineColor(generateColor(index));
        }
        if (chartType === 'bar' || chartType === 'horizontalBar') {
            return formatBarColor(generateColor(index));
        }
        return generateColor(index);
    }

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */
    var ChartsModule = /** @class */ (function () {
        function ChartsModule() {
        }
        ChartsModule.decorators = [
            { type: i0.NgModule, args: [{
                        declarations: [BaseChartDirective],
                        exports: [BaseChartDirective],
                    },] }
        ];
        return ChartsModule;
    }());

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */
    /** @type {?} */
    var CHECKBOX_VALUE_ACCESSOR = {
        provide: forms.NG_VALUE_ACCESSOR,
        // tslint:disable-next-line: no-use-before-declare
        useExisting: i0.forwardRef(( /**
         * @return {?}
         */function () { return CheckboxComponent; })),
        multi: true,
    };
    /** @type {?} */
    var defaultIdNumber = 0;
    var MdbCheckboxChange = /** @class */ (function () {
        function MdbCheckboxChange() {
        }
        return MdbCheckboxChange;
    }());
    var CheckboxComponent = /** @class */ (function () {
        function CheckboxComponent(_cdRef) {
            this._cdRef = _cdRef;
            this.defaultId = "mdb-checkbox-" + ++defaultIdNumber;
            this.id = this.defaultId;
            this.checked = false;
            this.filledIn = false;
            this.indeterminate = false;
            this.rounded = false;
            this.checkboxPosition = 'left';
            this.default = false;
            this.inline = false;
            this.change = new i0.EventEmitter();
            this.checkboxClicked = new rxjs.Subject();
            // Control Value Accessor Methods
            this.onChange = ( /**
             * @param {?} _
             * @return {?}
             */function (_) { });
            this.onTouched = ( /**
             * @return {?}
             */function () { });
        }
        /**
         * @param {?} event
         * @return {?}
         */
        CheckboxComponent.prototype.onLabelClick = /**
         * @param {?} event
         * @return {?}
         */
            function (event) {
                event.stopPropagation();
                this.checkboxClicked.next(true);
            };
        /**
         * @return {?}
         */
        CheckboxComponent.prototype.onDocumentClick = /**
         * @return {?}
         */
            function () {
                this.checkboxClicked.next(false);
            };
        /**
         * @return {?}
         */
        CheckboxComponent.prototype.ngOnInit = /**
         * @return {?}
         */
            function () {
                if (this.indeterminate && !this.filledIn && !this.rounded) {
                    this.inputEl.indeterminate = true;
                }
            };
        /**
         * @param {?} changes
         * @return {?}
         */
        CheckboxComponent.prototype.ngOnChanges = /**
         * @param {?} changes
         * @return {?}
         */
            function (changes) {
                if (changes.hasOwnProperty('checked')) {
                    this.checked = changes.checked.currentValue;
                }
            };
        Object.defineProperty(CheckboxComponent.prototype, "changeEvent", {
            get: /**
             * @return {?}
             */ function () {
                /** @type {?} */
                var newChangeEvent = new MdbCheckboxChange();
                newChangeEvent.element = this;
                newChangeEvent.checked = this.checked;
                return newChangeEvent;
            },
            enumerable: true,
            configurable: true
        });
        /**
         * @return {?}
         */
        CheckboxComponent.prototype.toggle = /**
         * @return {?}
         */
            function () {
                if (this.disabled) {
                    return;
                }
                this.checked = !this.checked;
                this.indeterminate = false;
                this.onChange(this.checked);
                this._cdRef.markForCheck();
            };
        /**
         * @param {?} event
         * @return {?}
         */
        CheckboxComponent.prototype.onCheckboxClick = /**
         * @param {?} event
         * @return {?}
         */
            function (event) {
                event.stopPropagation();
                this.toggle();
            };
        /**
         * @param {?} event
         * @return {?}
         */
        CheckboxComponent.prototype.onCheckboxChange = /**
         * @param {?} event
         * @return {?}
         */
            function (event) {
                var _this = this;
                event.stopPropagation();
                rxjs.timer(0).subscribe(( /**
                 * @return {?}
                 */function () { return _this.change.emit(_this.changeEvent); }));
            };
        /**
         * @return {?}
         */
        CheckboxComponent.prototype.onBlur = /**
         * @return {?}
         */
            function () {
                var _this = this;
                this.checkboxClicked.pipe(operators.take(1)).subscribe(( /**
                 * @param {?} val
                 * @return {?}
                 */function (val) {
                    if (!val) {
                        _this.onTouched();
                    }
                }));
            };
        /**
         * @param {?} value
         * @return {?}
         */
        CheckboxComponent.prototype.writeValue = /**
         * @param {?} value
         * @return {?}
         */
            function (value) {
                this.value = value;
                this.checked = !!value;
                this._cdRef.markForCheck();
            };
        /**
         * @param {?} fn
         * @return {?}
         */
        CheckboxComponent.prototype.registerOnChange = /**
         * @param {?} fn
         * @return {?}
         */
            function (fn) {
                this.onChange = fn;
            };
        /**
         * @param {?} fn
         * @return {?}
         */
        CheckboxComponent.prototype.registerOnTouched = /**
         * @param {?} fn
         * @return {?}
         */
            function (fn) {
                this.onTouched = fn;
            };
        /**
         * @param {?} isDisabled
         * @return {?}
         */
        CheckboxComponent.prototype.setDisabledState = /**
         * @param {?} isDisabled
         * @return {?}
         */
            function (isDisabled) {
                this.disabled = isDisabled;
            };
        CheckboxComponent.decorators = [
            { type: i0.Component, args: [{
                        selector: 'mdb-checkbox',
                        template: "<div\n  [ngClass]=\"{\n  'custom-control custom-checkbox': default,\n  'form-check': !default,\n  'custom-control-inline': inline,\n  'form-check-inline': inline && !default }\">\n  <input\n    #input\n    type=\"checkbox\"\n    class=\"custom-control-input\"\n    [ngClass]=\"{\n      'filled-in': filledIn || rounded,\n      'custom-control-input': default,\n      'form-check-input': !default }\"\n    [id]=\"id\"\n    [checked]=\"checked\"\n    [disabled]=\"disabled\"\n    [required]=\"required\"\n    [indeterminate]=\"indeterminate\"\n    [attr.name]=\"name\"\n    [attr.value]=\"value\"\n    [tabIndex]=\"tabIndex\"\n    (blur)=\"onBlur()\"\n    (click)=\"onCheckboxClick($event)\"\n    (change)=\"onCheckboxChange($event)\">\n  <label\n    [ngClass]=\"{\n      'custom-control-label': default,\n      'form-check-label': !default,\n      'label-before': checkboxPosition === 'right',\n      'checkbox-rounded': rounded,\n      'disabled': disabled }\"\n    [attr.for]=\"id\">\n    <ng-content></ng-content>\n  </label>\n</div>\n",
                        encapsulation: i0.ViewEncapsulation.None,
                        providers: [CHECKBOX_VALUE_ACCESSOR],
                        changeDetection: i0.ChangeDetectionStrategy.OnPush,
                        styles: [".form-check-label.label-before:after,.form-check-label.label-before:before{top:0!important;right:0!important;left:auto!important}.custom-control-label.label-before:after,.custom-control-label.label-before:before{top:.25rem!important;right:0!important;left:auto!important}.custom-control-label.label-before{position:absolute}.custom-control-inline .label-before{position:relative}.form-check-label.label-before{padding-left:0!important;padding-right:35px}.custom-control-label.label-before{padding-left:0!important;padding-right:25px!important}.form-check-input[type=checkbox]:checked+.label-before:before,label.btn input[type=checkbox]:checked+.label-before:before{top:-4px!important;right:10px!important;left:auto!important}.form-check-input[type=checkbox]:indeterminate+.label-before:before,label.btn input[type=checkbox]:indeterminate+.label-before:before{top:-11px!important;right:16px!important;left:auto!important}.form-check-input[type=checkbox].filled-in+.label-before:before,.form-check-input[type=checkbox].filled-in:checked+.label-before:before,label.btn input[type=checkbox].filled-in+.label-before:before,label.btn input[type=checkbox].filled-in:checked+.label-before:before{top:0!important;right:10px!important;left:auto!important}.form-check-input[type=checkbox].filled-in+.label-before:after,label.btn input[type=checkbox].filled-in+.label-before:after{top:0!important;left:auto!important}.checkbox-rounded:after{border-radius:50%!important}mdb-checkbox .form-check{padding-left:0!important}"]
                    }] }
        ];
        /** @nocollapse */
        CheckboxComponent.ctorParameters = function () {
            return [
                { type: i0.ChangeDetectorRef }
            ];
        };
        CheckboxComponent.propDecorators = {
            inputEl: [{ type: i0.ViewChild, args: ['input', { static: true },] }],
            class: [{ type: i0.Input }],
            id: [{ type: i0.Input }],
            required: [{ type: i0.Input }],
            name: [{ type: i0.Input }],
            value: [{ type: i0.Input }],
            checked: [{ type: i0.Input }],
            filledIn: [{ type: i0.Input }],
            indeterminate: [{ type: i0.Input }],
            disabled: [{ type: i0.Input }],
            rounded: [{ type: i0.Input }],
            checkboxPosition: [{ type: i0.Input }],
            default: [{ type: i0.Input }],
            inline: [{ type: i0.Input }],
            tabIndex: [{ type: i0.Input }],
            change: [{ type: i0.Output }],
            onLabelClick: [{ type: i0.HostListener, args: ['click', ['$event'],] }],
            onDocumentClick: [{ type: i0.HostListener, args: ['document:click',] }]
        };
        return CheckboxComponent;
    }());

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */
    var CheckboxModule = /** @class */ (function () {
        function CheckboxModule() {
        }
        CheckboxModule.decorators = [
            { type: i0.NgModule, args: [{
                        declarations: [CheckboxComponent],
                        exports: [CheckboxComponent],
                        imports: [common.CommonModule, forms.FormsModule],
                    },] }
        ];
        return CheckboxModule;
    }());

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */
    var CollapseComponent = /** @class */ (function () {
        function CollapseComponent(_cdRef) {
            this._cdRef = _cdRef;
            this.isCollapsed = true;
            this.showBsCollapse = new i0.EventEmitter();
            this.shownBsCollapse = new i0.EventEmitter();
            this.hideBsCollapse = new i0.EventEmitter();
            this.hiddenBsCollapse = new i0.EventEmitter();
            this.collapsed = new i0.EventEmitter();
            this.expanded = new i0.EventEmitter();
            this.overflow = 'hidden';
        }
        /**
         * @param {?} event
         * @return {?}
         */
        CollapseComponent.prototype.onExpandBodyDone = /**
         * @param {?} event
         * @return {?}
         */
            function (event) {
                var _this = this;
                setTimeout(( /**
                 * @return {?}
                 */function () {
                    if (event.toState === 'expanded') {
                        _this.shownBsCollapse.emit(_this);
                        _this.expanded.emit(_this);
                        _this.overflow = 'visible';
                        _this.showCaptions();
                    }
                    else {
                        _this.hiddenBsCollapse.emit(_this);
                        _this.collapsed.emit(_this);
                    }
                }), 0);
            };
        /**
         * @return {?}
         */
        CollapseComponent.prototype.showCaptions = /**
         * @return {?}
         */
            function () {
                this.captions.forEach(( /**
                 * @param {?} caption
                 * @return {?}
                 */function (caption) { return caption.showCaption(); }));
            };
        /**
         * @return {?}
         */
        CollapseComponent.prototype.toggle = /**
         * @return {?}
         */
            function () {
                this.isCollapsed ? this.show() : this.hide();
            };
        /**
         * @return {?}
         */
        CollapseComponent.prototype.show = /**
         * @return {?}
         */
            function () {
                this.expandAnimationState = 'expanded';
                this.isCollapsed = false;
                this.showBsCollapse.emit(this);
                this._cdRef.markForCheck();
            };
        /**
         * @return {?}
         */
        CollapseComponent.prototype.hide = /**
         * @return {?}
         */
            function () {
                this.overflow = 'hidden';
                this.expandAnimationState = 'collapsed';
                this.isCollapsed = true;
                this.hideBsCollapse.emit(this);
                this._cdRef.markForCheck();
            };
        /**
         * @return {?}
         */
        CollapseComponent.prototype.initializeCollapseState = /**
         * @return {?}
         */
            function () {
                this.isCollapsed ? this.hide() : this.show();
            };
        /**
         * @return {?}
         */
        CollapseComponent.prototype.ngOnInit = /**
         * @return {?}
         */
            function () {
                this.initializeCollapseState();
            };
        CollapseComponent.decorators = [
            { type: i0.Component, args: [{
                        // tslint:disable-next-line:component-selector
                        selector: '[mdbCollapse]',
                        exportAs: 'bs-collapse',
                        template: '<ng-content></ng-content>',
                        animations: [
                            animations.trigger('expandBody', [
                                animations.state('collapsed', animations.style({ height: '0px' })),
                                animations.state('expanded', animations.style({ height: '*' })),
                                animations.transition('expanded <=> collapsed', animations.animate('500ms ease')),
                            ]),
                        ],
                        changeDetection: i0.ChangeDetectionStrategy.OnPush
                    }] }
        ];
        /** @nocollapse */
        CollapseComponent.ctorParameters = function () {
            return [
                { type: i0.ChangeDetectorRef }
            ];
        };
        CollapseComponent.propDecorators = {
            captions: [{ type: i0.ContentChildren, args: [FixedButtonCaptionDirective,] }],
            isCollapsed: [{ type: i0.Input }],
            showBsCollapse: [{ type: i0.Output }],
            shownBsCollapse: [{ type: i0.Output }],
            hideBsCollapse: [{ type: i0.Output }],
            hiddenBsCollapse: [{ type: i0.Output }],
            collapsed: [{ type: i0.Output }],
            expanded: [{ type: i0.Output }],
            expandAnimationState: [{ type: i0.HostBinding, args: ['@expandBody',] }],
            overflow: [{ type: i0.HostBinding, args: ['style.overflow',] }],
            onExpandBodyDone: [{ type: i0.HostListener, args: ['@expandBody.done', ['$event'],] }]
        };
        return CollapseComponent;
    }());

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */
    var CollapseModule = /** @class */ (function () {
        function CollapseModule() {
        }
        /**
         * @return {?}
         */
        CollapseModule.forRoot = /**
         * @return {?}
         */
            function () {
                return { ngModule: CollapseModule, providers: [] };
            };
        CollapseModule.decorators = [
            { type: i0.NgModule, args: [{
                        declarations: [CollapseComponent],
                        exports: [CollapseComponent]
                    },] }
        ];
        return CollapseModule;
    }());

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */

    /*! *****************************************************************************
    Copyright (c) Microsoft Corporation. All rights reserved.
    Licensed under the Apache License, Version 2.0 (the "License"); you may not use
    this file except in compliance with the License. You may obtain a copy of the
    License at http://www.apache.org/licenses/LICENSE-2.0

    THIS CODE IS PROVIDED ON AN *AS IS* BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
    KIND, EITHER EXPRESS OR IMPLIED, INCLUDING WITHOUT LIMITATION ANY IMPLIED
    WARRANTIES OR CONDITIONS OF TITLE, FITNESS FOR A PARTICULAR PURPOSE,
    MERCHANTABLITY OR NON-INFRINGEMENT.

    See the Apache Version 2.0 License for specific language governing permissions
    and limitations under the License.
    ***************************************************************************** */
    var __assign = function () {
        __assign = Object.assign || function __assign(t) {
            for (var s, i = 1, n = arguments.length; i < n; i++) {
                s = arguments[i];
                for (var p in s)
                    if (Object.prototype.hasOwnProperty.call(s, p))
                        t[p] = s[p];
            }
            return t;
        };
        return __assign.apply(this, arguments);
    };
    function __decorate(decorators, target, key, desc) {
        var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
        if (typeof Reflect === "object" && typeof Reflect.decorate === "function")
            r = Reflect.decorate(decorators, target, key, desc);
        else
            for (var i = decorators.length - 1; i >= 0; i--)
                if (d = decorators[i])
                    r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
        return c > 3 && r && Object.defineProperty(target, key, r), r;
    }
    function __metadata(metadataKey, metadataValue) {
        if (typeof Reflect === "object" && typeof Reflect.metadata === "function")
            return Reflect.metadata(metadataKey, metadataValue);
    }
    function __values(o) {
        var m = typeof Symbol === "function" && o[Symbol.iterator], i = 0;
        if (m)
            return m.call(o);
        return {
            next: function () {
                if (o && i >= o.length)
                    o = void 0;
                return { value: o && o[i++], done: !o };
            }
        };
    }
    function __read(o, n) {
        var m = typeof Symbol === "function" && o[Symbol.iterator];
        if (!m)
            return o;
        var i = m.call(o), r, ar = [], e;
        try {
            while ((n === void 0 || n-- > 0) && !(r = i.next()).done)
                ar.push(r.value);
        }
        catch (error) {
            e = { error: error };
        }
        finally {
            try {
                if (r && !r.done && (m = i["return"]))
                    m.call(i);
            }
            finally {
                if (e)
                    throw e.error;
            }
        }
        return ar;
    }

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */
    /**
     * @copyright Valor Software
     * @copyright Angular ng-bootstrap team
     */
    var Trigger = /** @class */ (function () {
        function Trigger(open, close) {
            this.open = open;
            this.close = close || open;
        }
        /**
         * @return {?}
         */
        Trigger.prototype.isManual = /**
         * @return {?}
         */
            function () {
                return this.open === 'manual' || this.close === 'manual';
            };
        return Trigger;
    }());

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */
    /** @type {?} */
    var DEFAULT_ALIASES = {
        hover: ['mouseover', 'mouseout'],
        focus: ['focusin', 'focusout']
    };
    /* tslint:disable-next-line: no-any */
    /**
     * @param {?} triggers
     * @param {?=} aliases
     * @return {?}
     */
    function parseTriggers(triggers, aliases) {
        if (aliases === void 0) {
            aliases = DEFAULT_ALIASES;
        }
        /** @type {?} */
        var trimmedTriggers = (triggers || '').trim();
        if (trimmedTriggers.length === 0) {
            return [];
        }
        /** @type {?} */
        var parsedTriggers = trimmedTriggers
            .split(/\s+/)
            .map(( /**
     * @param {?} trigger
     * @return {?}
     */function (trigger) { return trigger.split(':'); }))
            .map(( /**
     * @param {?} triggerPair
     * @return {?}
     */function (triggerPair) {
            /** @type {?} */
            var alias = aliases[triggerPair[0]] || triggerPair;
            return new Trigger(alias[0], alias[1]);
        }));
        /** @type {?} */
        var manualTriggers = parsedTriggers.filter(( /**
         * @param {?} triggerPair
         * @return {?}
         */function (triggerPair) {
            return triggerPair.isManual();
        }));
        if (manualTriggers.length > 1) {
            throw new Error('Triggers parse error: only one manual trigger is allowed');
        }
        if (manualTriggers.length === 1 && parsedTriggers.length > 1) {
            throw new Error('Triggers parse error: manual trigger can\'t be mixed with other triggers');
        }
        return parsedTriggers;
    }
    /**
     * @param {?} renderer
     * @param {?} options
     * @return {?}
     */
    function listenToTriggersV2(renderer, options) {
        /** @type {?} */
        var parsedTriggers = parseTriggers(options.triggers);
        /** @type {?} */
        var target = options.target;
        // do nothing
        if (parsedTriggers.length === 1 && parsedTriggers[0].isManual()) {
            return Function.prototype;
        }
        // all listeners
        /* tslint:disable-next-line: no-any */
        /** @type {?} */
        var listeners = [];
        // lazy listeners registration
        /** @type {?} */
        var _registerHide = [];
        /** @type {?} */
        var registerHide = ( /**
         * @return {?}
         */function () {
            // add hide listeners to unregister array
            _registerHide.forEach(( /**
             * @param {?} fn
             * @return {?}
             */function (fn) { return listeners.push(fn()); }));
            // register hide events only once
            _registerHide.length = 0;
        });
        // register open\close\toggle listeners
        parsedTriggers.forEach(( /**
         * @param {?} trigger
         * @return {?}
         */function (trigger) {
            /** @type {?} */
            var useToggle = trigger.open === trigger.close;
            /** @type {?} */
            var showFn = useToggle ? options.toggle : options.show;
            if (!useToggle) {
                _registerHide.push(( /**
                 * @return {?}
                 */function () {
                    return renderer.listen(target, trigger.close, options.hide);
                }));
            }
            listeners.push(renderer.listen(target, trigger.open, ( /**
             * @return {?}
             */function () { return showFn(registerHide); })));
        }));
        return ( /**
         * @return {?}
         */function () {
            listeners.forEach(( /**
             * @param {?} unsubscribeFn
             * @return {?}
             */function (unsubscribeFn) { return unsubscribeFn(); }));
        });
    }
    /**
     * @param {?} renderer
     * @param {?} options
     * @return {?}
     */
    function registerOutsideClick(renderer, options) {
        if (!options.outsideClick) {
            return Function.prototype;
        }
        /* tslint:disable-next-line: no-any */
        return renderer.listen('document', 'click', ( /**
         * @param {?} event
         * @return {?}
         */function (event) {
            if (options.target && options.target.contains(event.target)) {
                return undefined;
            }
            if (options.targets &&
                options.targets.some(( /**
                 * @param {?} target
                 * @return {?}
                 */function (target) { return target.contains(event.target); }))) {
                return undefined;
            }
            options.hide();
        }));
    }
    /**
     * @param {?} renderer
     * @param {?} options
     * @return {?}
     */
    function registerEscClick(renderer, options) {
        if (!options.outsideEsc) {
            return Function.prototype;
        }
        return renderer.listen('document', 'keyup.esc', ( /**
         * @param {?} event
         * @return {?}
         */function (event) {
            if (options.target && options.target.contains(event.target)) {
                return undefined;
            }
            if (options.targets &&
                options.targets.some(( /**
                 * @param {?} target
                 * @return {?}
                 */function (target) { return target.contains(event.target); }))) {
                return undefined;
            }
            options.hide();
        }));
    }

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */
    /**
     * @license
     * Copyright Google Inc. All Rights Reserved.
     *
     * Use of this source code is governed by an MIT-style license that can be
     * found in the LICENSE file at https://angular.io/license
     */
    /**
     * JS version of browser APIs. This library can only run in the browser.
     * @type {?}
     */
    var win$1 = (typeof window !== 'undefined' && window) || ( /** @type {?} */({}));
    /** @type {?} */
    var document$2 = win$1.document;
    /** @type {?} */
    var location$1 = win$1.location;
    /** @type {?} */
    var gc$1 = win$1.gc ? ( /**
     * @return {?}
     */function () { return win$1.gc(); }) : ( /**
     * @return {?}
     */function () { return null; });
    /** @type {?} */
    var performance$1 = win$1.performance ? win$1.performance : null;
    /** @type {?} */
    var Event$1 = win$1.Event;
    /** @type {?} */
    var MouseEvent$1 = win$1.MouseEvent;
    /** @type {?} */
    var KeyboardEvent$1 = win$1.KeyboardEvent;
    /** @type {?} */
    var EventTarget$1 = win$1.EventTarget;
    /** @type {?} */
    var History$1 = win$1.History;
    /** @type {?} */
    var Location$1 = win$1.Location;
    /** @type {?} */
    var EventListener$1 = win$1.EventListener;

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */
    /**
     * @copyright Valor Software
     * @copyright Angular ng-bootstrap team
     */
    var ContentRef = /** @class */ (function () {
        function ContentRef(
        /* tslint:disable-next-line: no-any */
        nodes, viewRef, 
        /* tslint:disable-next-line: no-any */
        componentRef) {
            this.nodes = nodes;
            this.viewRef = viewRef;
            this.componentRef = componentRef;
        }
        return ContentRef;
    }());

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */
    /**
     * @template T
     */
    var /**
     * @template T
     */ ComponentLoader = /** @class */ (function () {
        /**
         * Do not use this directly, it should be instanced via
         * `ComponentLoadFactory.attach`
         * @internal
         */
        // tslint:disable-next-line
        function ComponentLoader(_viewContainerRef, _renderer, _elementRef, _injector, _componentFactoryResolver, _ngZone, _applicationRef, _posService) {
            this._viewContainerRef = _viewContainerRef;
            this._renderer = _renderer;
            this._elementRef = _elementRef;
            this._injector = _injector;
            this._componentFactoryResolver = _componentFactoryResolver;
            this._ngZone = _ngZone;
            this._applicationRef = _applicationRef;
            this._posService = _posService;
            this.onBeforeShow = new i0.EventEmitter();
            /* tslint:disable-next-line: no-any*/
            this.onShown = new i0.EventEmitter();
            /* tslint:disable-next-line: no-any*/
            this.onBeforeHide = new i0.EventEmitter();
            this.onHidden = new i0.EventEmitter();
            this.shown = new i0.EventEmitter();
            this.hidden = new i0.EventEmitter();
            this._providers = [];
            this._isHiding = false;
            /**
             * A selector used if container element was not found
             */
            this.containerDefaultSelector = 'body';
            this._listenOpts = {};
            this._globalListener = Function.prototype;
        }
        Object.defineProperty(ComponentLoader.prototype, "isShown", {
            get: /**
             * @return {?}
             */ function () {
                if (this._isHiding) {
                    return false;
                }
                return !!this._componentRef;
            },
            enumerable: true,
            configurable: true
        });
        /**
         * @param {?} compType
         * @return {?}
         */
        ComponentLoader.prototype.attach = /**
         * @param {?} compType
         * @return {?}
         */
            function (compType) {
                this._componentFactory = this._componentFactoryResolver
                    .resolveComponentFactory(compType);
                return this;
            };
        // todo: add behaviour: to target element, `body`, custom element
        // todo: add behaviour: to target element, `body`, custom element
        /**
         * @param {?=} container
         * @return {?}
         */
        ComponentLoader.prototype.to =
            // todo: add behaviour: to target element, `body`, custom element
            /**
             * @param {?=} container
             * @return {?}
             */
            function (container) {
                this.container = container || this.container;
                return this;
            };
        /**
         * @param {?=} opts
         * @return {?}
         */
        ComponentLoader.prototype.position = /**
         * @param {?=} opts
         * @return {?}
         */
            function (opts) {
                this.attachment = opts.attachment || this.attachment;
                this._elementRef = (( /** @type {?} */(opts.target))) || this._elementRef;
                return this;
            };
        /**
         * @param {?} provider
         * @return {?}
         */
        ComponentLoader.prototype.provide = /**
         * @param {?} provider
         * @return {?}
         */
            function (provider) {
                this._providers.push(provider);
                return this;
            };
        // todo: appendChild to element or document.querySelector(this.container)
        // todo: appendChild to element or document.querySelector(this.container)
        /**
         * @param {?=} opts
         * @return {?}
         */
        ComponentLoader.prototype.show =
            // todo: appendChild to element or document.querySelector(this.container)
            /**
             * @param {?=} opts
             * @return {?}
             */
            function (opts) {
                if (opts === void 0) {
                    opts = {};
                }
                this._subscribePositioning();
                this._innerComponent = null;
                if (!this._componentRef) {
                    this.onBeforeShow.emit();
                    this._contentRef = this._getContentRef(opts.content, opts.data);
                    /** @type {?} */
                    var injector = i0.Injector.create({
                        providers: this._providers,
                        parent: this._injector
                    });
                    this._componentRef = this._componentFactory.create(injector, this._contentRef.nodes);
                    this._applicationRef.attachView(this._componentRef.hostView);
                    // this._componentRef = this._viewContainerRef
                    //   .createComponent(this._componentFactory, 0, injector, this._contentRef.nodes);
                    this.instance = this._componentRef.instance;
                    Object.assign(this._componentRef.instance, opts);
                    if (this.container instanceof i0.ElementRef) {
                        this.container.nativeElement.appendChild(this._componentRef.location.nativeElement);
                    }
                    if (typeof this.container === 'string' && typeof document !== 'undefined') {
                        /** @type {?} */
                        var selectedElement = document.querySelector(this.container) ||
                            document.querySelector(this.containerDefaultSelector);
                        if (selectedElement) {
                            selectedElement.appendChild(this._componentRef.location.nativeElement);
                        }
                    }
                    if (!this.container &&
                        this._elementRef &&
                        this._elementRef.nativeElement.parentElement) {
                        this._elementRef.nativeElement.parentElement.appendChild(this._componentRef.location.nativeElement);
                    }
                    // we need to manually invoke change detection since events registered
                    // via
                    // Renderer::listen() are not picked up by change detection with the
                    // OnPush strategy
                    if (this._contentRef.componentRef) {
                        this._innerComponent = this._contentRef.componentRef.instance;
                        this._contentRef.componentRef.changeDetectorRef.markForCheck();
                        this._contentRef.componentRef.changeDetectorRef.detectChanges();
                    }
                    this._componentRef.changeDetectorRef.markForCheck();
                    this._componentRef.changeDetectorRef.detectChanges();
                    this.onShown.emit(this._componentRef.instance);
                }
                this._registerOutsideClick();
                return this._componentRef;
            };
        /**
         * @return {?}
         */
        ComponentLoader.prototype.hide = /**
         * @return {?}
         */
            function () {
                if (!this._componentRef) {
                    return this;
                }
                this._posService.deletePositionElement(this._componentRef.location);
                this.onBeforeHide.emit(this._componentRef.instance);
                /** @type {?} */
                var componentEl = this._componentRef.location.nativeElement;
                componentEl.parentNode.removeChild(componentEl);
                if (this._contentRef.componentRef) {
                    this._contentRef.componentRef.destroy();
                }
                this._componentRef.destroy();
                if (this._viewContainerRef && this._contentRef.viewRef) {
                    this._viewContainerRef.remove(this._viewContainerRef.indexOf(this._contentRef.viewRef));
                }
                if (this._contentRef.viewRef) {
                    this._contentRef.viewRef.destroy();
                }
                this._contentRef = null;
                this._componentRef = null;
                this._removeGlobalListener();
                this.onHidden.emit();
                return this;
            };
        /**
         * @return {?}
         */
        ComponentLoader.prototype.toggle = /**
         * @return {?}
         */
            function () {
                if (this.isShown) {
                    this.hide();
                    return;
                }
                this.show();
            };
        /**
         * @return {?}
         */
        ComponentLoader.prototype.dispose = /**
         * @return {?}
         */
            function () {
                if (this.isShown) {
                    this.hide();
                }
                this._unsubscribePositioning();
                if (this._unregisterListenersFn) {
                    this._unregisterListenersFn();
                }
            };
        /**
         * @param {?} listenOpts
         * @return {?}
         */
        ComponentLoader.prototype.listen = /**
         * @param {?} listenOpts
         * @return {?}
         */
            function (listenOpts) {
                var _this = this;
                this.triggers = listenOpts.triggers || this.triggers;
                this._listenOpts.outsideClick = listenOpts.outsideClick;
                this._listenOpts.outsideEsc = listenOpts.outsideEsc;
                listenOpts.target = listenOpts.target || this._elementRef.nativeElement;
                /** @type {?} */
                var hide = (this._listenOpts.hide = ( /**
                 * @return {?}
                 */function () {
                    return listenOpts.hide ? listenOpts.hide() : void _this.hide();
                }));
                /** @type {?} */
                var show = (this._listenOpts.show = ( /**
                 * @param {?} registerHide
                 * @return {?}
                 */function (registerHide) {
                    listenOpts.show ? listenOpts.show(registerHide) : _this.show(registerHide);
                    registerHide();
                }));
                /** @type {?} */
                var toggle = ( /**
                 * @param {?} registerHide
                 * @return {?}
                 */function (registerHide) {
                    _this.isShown ? hide() : show(registerHide);
                });
                this._unregisterListenersFn = listenToTriggersV2(this._renderer, {
                    target: listenOpts.target,
                    triggers: listenOpts.triggers,
                    show: show,
                    hide: hide,
                    toggle: toggle
                });
                return this;
            };
        /**
         * @return {?}
         */
        ComponentLoader.prototype._removeGlobalListener = /**
         * @return {?}
         */
            function () {
                if (this._globalListener) {
                    this._globalListener();
                    this._globalListener = null;
                }
            };
        /**
         * @param {?} vRef
         * @param {?} template
         * @return {?}
         */
        ComponentLoader.prototype.attachInline = /**
         * @param {?} vRef
         * @param {?} template
         * @return {?}
         */
            function (vRef, 
            /* tslint:disable-next-line: no-any*/
            template) {
                this._inlineViewRef = vRef.createEmbeddedView(template);
                return this;
            };
        /**
         * @return {?}
         */
        ComponentLoader.prototype._registerOutsideClick = /**
         * @return {?}
         */
            function () {
                var _this = this;
                if (!this._componentRef || !this._componentRef.location) {
                    return;
                }
                // why: should run after first event bubble
                if (this._listenOpts && this._listenOpts.outsideClick) {
                    /** @type {?} */
                    var target_1 = this._componentRef.location.nativeElement;
                    setTimeout(( /**
                     * @return {?}
                     */function () {
                        _this._globalListener = registerOutsideClick(_this._renderer, {
                            targets: [target_1, _this._elementRef.nativeElement],
                            outsideClick: _this._listenOpts.outsideClick,
                            hide: ( /**
                             * @return {?}
                             */function () { return _this._listenOpts.hide(); })
                        });
                    }));
                }
                if (this._listenOpts.outsideEsc) {
                    /** @type {?} */
                    var target = this._componentRef.location.nativeElement;
                    this._globalListener = registerEscClick(this._renderer, {
                        targets: [target, this._elementRef.nativeElement],
                        outsideEsc: this._listenOpts.outsideEsc,
                        hide: ( /**
                         * @return {?}
                         */function () { return _this._listenOpts.hide(); })
                    });
                }
            };
        /**
         * @return {?}
         */
        ComponentLoader.prototype.getInnerComponent = /**
         * @return {?}
         */
            function () {
                return this._innerComponent;
            };
        /**
         * @private
         * @return {?}
         */
        ComponentLoader.prototype._subscribePositioning = /**
         * @private
         * @return {?}
         */
            function () {
                var _this = this;
                if (this._zoneSubscription || !this.attachment) {
                    return;
                }
                this.onShown.subscribe(( /**
                 * @return {?}
                 */function () {
                    _this._posService.position({
                        element: _this._componentRef.location,
                        target: _this._elementRef,
                        attachment: _this.attachment,
                        appendToBody: _this.container === 'body'
                    });
                }));
                this._zoneSubscription = this._ngZone.onStable.subscribe(( /**
                 * @return {?}
                 */function () {
                    if (!_this._componentRef) {
                        return;
                    }
                    _this._posService.calcPosition();
                }));
            };
        /**
         * @private
         * @return {?}
         */
        ComponentLoader.prototype._unsubscribePositioning = /**
         * @private
         * @return {?}
         */
            function () {
                if (!this._zoneSubscription) {
                    return;
                }
                this._zoneSubscription.unsubscribe();
                this._zoneSubscription = null;
            };
        /**
         * @private
         * @param {?} content
         * @param {?=} data
         * @return {?}
         */
        ComponentLoader.prototype._getContentRef = /**
         * @private
         * @param {?} content
         * @param {?=} data
         * @return {?}
         */
            function (
            /* tslint:disable-next-line: no-any*/
            content, 
            /* tslint:disable-next-line: no-any*/
            data) {
                if (!content) {
                    return new ContentRef([]);
                }
                if (content instanceof i0.TemplateRef) {
                    if (this._viewContainerRef) {
                        /** @type {?} */
                        var _viewRef = this._viewContainerRef
                            .createEmbeddedView(content);
                        _viewRef.markForCheck();
                        return new ContentRef([_viewRef.rootNodes], _viewRef);
                    }
                    /** @type {?} */
                    var viewRef = content.createEmbeddedView({});
                    this._applicationRef.attachView(viewRef);
                    return new ContentRef([viewRef.rootNodes], viewRef);
                }
                if (typeof content === 'function') {
                    /** @type {?} */
                    var contentCmptFactory = this._componentFactoryResolver.resolveComponentFactory(content);
                    /** @type {?} */
                    var modalContentInjector = i0.Injector.create({
                        providers: this._providers,
                        parent: this._injector
                    });
                    /** @type {?} */
                    var componentRef = contentCmptFactory.create(modalContentInjector);
                    Object.assign(componentRef.instance, data);
                    this._applicationRef.attachView(componentRef.hostView);
                    return new ContentRef([[componentRef.location.nativeElement]], componentRef.hostView, componentRef);
                }
                return new ContentRef([[this._renderer.createText("" + content)]]);
            };
        return ComponentLoader;
    }());

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */
    /**
     * Get CSS computed property of the given element
     * @param {?} element
     * @param {?=} property
     * @return {?}
     */
    function getStyleComputedProperty(element, property) {
        if (element.nodeType !== 1) {
            return [];
        }
        // NOTE: 1 DOM access here
        /** @type {?} */
        var window = element.ownerDocument.defaultView;
        /** @type {?} */
        var css = window.getComputedStyle(element, null);
        return property ? css[( /** @type {?} */(property))] : css;
    }

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */
    /**
     * Returns the parentNode or the host of the element
     * @param {?} element
     * @return {?}
     */
    function getParentNode(element) {
        if (element.nodeName === 'HTML') {
            return element;
        }
        return element.parentNode || element.host;
    }

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */
    /**
     * @param {?} element
     * @return {?}
     */
    function getScrollParent(element) {
        // Return body, `getScroll` will take care to get the correct `scrollTop` from it
        if (!element) {
            return document.body;
        }
        switch (element.nodeName) {
            case 'HTML':
            case 'BODY':
                return element.ownerDocument.body;
            case '#document':
                return element.body;
            default:
        }
        // Firefox want us to check `-x` and `-y` variations as well
        var _a = getStyleComputedProperty(element), overflow = _a.overflow, overflowX = _a.overflowX, overflowY = _a.overflowY;
        if (/(auto|scroll|overlay)/.test(String(overflow) + String(overflowY) + String(overflowX))) {
            return element;
        }
        return getScrollParent(getParentNode(element));
    }

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */
    /** @type {?} */
    var isBrowser = typeof window !== 'undefined' && typeof document !== 'undefined';

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */
    /** @type {?} */
    var isIE11 = isBrowser && !!((( /** @type {?} */(window))).MSInputMethodContext && (( /** @type {?} */(document))).documentMode);
    /** @type {?} */
    var isIE10 = isBrowser && !!((( /** @type {?} */(window))).MSInputMethodContext && /MSIE 10/.test((( /** @type {?} */(navigator))).userAgent));
    /**
     * @param {?=} version
     * @return {?}
     */
    function isIE(version) {
        if (version === 11) {
            return isIE11;
        }
        if (version === 10) {
            return isIE10;
        }
        return isIE11 || isIE10;
    }

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */
    /**
     * @param {?} element
     * @return {?}
     */
    function getOffsetParent(element) {
        if (!element) {
            return document.documentElement;
        }
        /** @type {?} */
        var noOffsetParent = isIE(10) ? document.body : null;
        // NOTE: 1 DOM access here
        /** @type {?} */
        var offsetParent = element.offsetParent || null;
        // Skip hidden elements which don't have an offsetParent
        /** @type {?} */
        var sibling;
        while (offsetParent === noOffsetParent && element.nextElementSibling && element.nodeName !== 'BODY') {
            sibling = element.nextElementSibling;
            offsetParent = sibling.offsetParent;
        }
        /** @type {?} */
        var nodeName = offsetParent && offsetParent.nodeName;
        if (!nodeName || nodeName === 'BODY' || nodeName === 'HTML') {
            return sibling ? sibling.ownerDocument.documentElement : document.documentElement;
        }
        // .offsetParent will return the closest TH, TD or TABLE in case
        // no offsetParent is present, I hate this job...
        if (['TH', 'TD', 'TABLE'].indexOf(offsetParent.nodeName) !== -1 &&
            getStyleComputedProperty(offsetParent, 'position') === 'static') {
            return getOffsetParent(offsetParent);
        }
        return offsetParent;
    }

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */
    /**
     * @param {?} element
     * @return {?}
     */
    function isOffsetContainer(element) {
        var nodeName = element.nodeName;
        if (nodeName === 'BODY') {
            return false;
        }
        return (nodeName === 'HTML' || getOffsetParent(element.firstElementChild) === element);
    }

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */
    /**
     * Finds the root node (document, shadowDOM root) of the given element
     * @param {?} node
     * @return {?}
     */
    function getRoot(node) {
        if (node.parentNode !== null) {
            return getRoot(node.parentNode);
        }
        return node;
    }

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */
    /**
     * @param {?} element1
     * @param {?} element2
     * @return {?}
     */
    function findCommonOffsetParent(element1, element2) {
        // This check is needed to avoid errors in case one of the elements isn't defined for any reason
        if (!element1 || !element1.nodeType || !element2 || !element2.nodeType) {
            return document.documentElement;
        }
        // Here we make sure to give as "start" the element that comes first in the DOM
        /* tslint:disable-next-line: no-bitwise */
        /** @type {?} */
        var order = element1.compareDocumentPosition(element2) & Node.DOCUMENT_POSITION_FOLLOWING;
        /** @type {?} */
        var start = order ? element1 : element2;
        /** @type {?} */
        var end = order ? element2 : element1;
        // Get common ancestor container
        /** @type {?} */
        var range = document.createRange();
        range.setStart(start, 0);
        range.setEnd(end, 0);
        var commonAncestorContainer = range.commonAncestorContainer;
        // Both nodes are inside #document
        if ((element1 !== commonAncestorContainer &&
            element2 !== commonAncestorContainer) ||
            start.contains(end)) {
            if (isOffsetContainer(commonAncestorContainer)) {
                return commonAncestorContainer;
            }
            return getOffsetParent(commonAncestorContainer);
        }
        // one of the nodes is inside shadowDOM, find which one
        /** @type {?} */
        var element1root = getRoot(element1);
        if (element1root.host) {
            return findCommonOffsetParent(element1root.host, element2);
        }
        else {
            return findCommonOffsetParent(element1, getRoot(element2).host);
        }
    }

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */
    /**
     * Helper to detect borders of a given element
     */
    /**
     * @param {?} styles
     * @param {?} axis
     * @return {?}
     */
    function getBordersSize(styles, axis) {
        /** @type {?} */
        var sideA = axis === 'x' ? 'Left' : 'Top';
        /** @type {?} */
        var sideB = sideA === 'Left' ? 'Right' : 'Bottom';
        return (parseFloat(styles[( /** @type {?} */("border" + sideA + "Width"))]) +
            parseFloat(styles[( /** @type {?} */("border" + sideB + "Width"))]));
    }

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */
    /**
     * @param {?} axis
     * @param {?} body
     * @param {?} html
     * @param {?} computedStyle
     * @return {?}
     */
    function getSize(axis, body, html, computedStyle) {
        return Math.max((( /** @type {?} */(body)))["offset" + axis], (( /** @type {?} */(body)))["scroll" + axis], (( /** @type {?} */(html)))["client" + axis], (( /** @type {?} */(html)))["offset" + axis], (( /** @type {?} */(html)))["scroll" + axis], isIE(10)
            ? (parseInt((( /** @type {?} */(html)))["offset" + axis], 10) +
                parseInt(computedStyle[( /** @type {?} */("margin" + (axis === 'Height' ? 'Top' : 'Left')))], 10) +
                parseInt(computedStyle[( /** @type {?} */("margin" + (axis === 'Height' ? 'Bottom' : 'Right')))], 10))
            : 0);
    }
    /**
     * @param {?} document
     * @return {?}
     */
    function getWindowSizes(document) {
        /** @type {?} */
        var body = document.body;
        /** @type {?} */
        var html = document.documentElement;
        /** @type {?} */
        var computedStyle = isIE(10) && getComputedStyle(html);
        return {
            height: getSize('Height', body, html, computedStyle),
            width: getSize('Width', body, html, computedStyle)
        };
    }

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */
    /**
     * Gets the scroll value of the given element in the given side (top and left)
     * @param {?} element
     * @param {?=} side
     * @return {?}
     */
    function getScroll(element, side) {
        if (side === void 0) {
            side = 'top';
        }
        /** @type {?} */
        var upperSide = side === 'top' ? 'scrollTop' : 'scrollLeft';
        /** @type {?} */
        var nodeName = element.nodeName;
        if (nodeName === 'BODY' || nodeName === 'HTML') {
            /** @type {?} */
            var html = element.ownerDocument.documentElement;
            /** @type {?} */
            var scrollingElement = element.ownerDocument.scrollingElement || html;
            return scrollingElement[upperSide];
        }
        return element[upperSide];
    }

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */
    /**
     * @param {?} offsets
     * @return {?}
     */
    function getClientRect(offsets) {
        return __assign({}, offsets, { right: offsets.left + offsets.width, bottom: offsets.top + offsets.height });
    }

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */
    /**
     * @param {?} element
     * @return {?}
     */
    function getBoundingClientRect(element) {
        /** @type {?} */
        var rect = {};
        // IE10 10 FIX: Please, don't ask, the element isn't
        // considered in DOM in some circumstances...
        // This isn't reproducible in IE10 compatibility mode of IE11
        try {
            if (isIE(10)) {
                rect = element.getBoundingClientRect();
                /** @type {?} */
                var scrollTop = getScroll(element, 'top');
                /** @type {?} */
                var scrollLeft = getScroll(element, 'left');
                rect.top += scrollTop;
                rect.left += scrollLeft;
                rect.bottom += scrollTop;
                rect.right += scrollLeft;
            }
            else {
                rect = element.getBoundingClientRect();
            }
        }
        catch (e) {
            return undefined;
        }
        /** @type {?} */
        var result = {
            left: rect.left,
            top: rect.top,
            width: rect.right - rect.left,
            height: rect.bottom - rect.top
        };
        // subtract scrollbar size from sizes
        /** @type {?} */
        var sizes = element.nodeName === 'HTML' ? getWindowSizes(element.ownerDocument) : {};
        /** @type {?} */
        var width = sizes.width || element.clientWidth || result.right - result.left;
        /** @type {?} */
        var height = sizes.height || element.clientHeight || result.bottom - result.top;
        /** @type {?} */
        var horizScrollbar = element.offsetWidth - width;
        /** @type {?} */
        var vertScrollbar = element.offsetHeight - height;
        // if an hypothetical scrollbar is detected, we must be sure it's not a `border`
        // we make this check conditional for performance reasons
        if (horizScrollbar || vertScrollbar) {
            /** @type {?} */
            var styles = getStyleComputedProperty(element);
            horizScrollbar -= getBordersSize(styles, 'x');
            vertScrollbar -= getBordersSize(styles, 'y');
            result.width -= horizScrollbar;
            result.height -= vertScrollbar;
        }
        return getClientRect(result);
    }

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */
    /**
     * @param {?} rect
     * @param {?} element
     * @param {?=} subtract
     * @return {?}
     */
    function includeScroll(rect, element, subtract) {
        if (subtract === void 0) {
            subtract = false;
        }
        /** @type {?} */
        var scrollTop = getScroll(element, 'top');
        /** @type {?} */
        var scrollLeft = getScroll(element, 'left');
        /** @type {?} */
        var modifier = subtract ? -1 : 1;
        rect.top += scrollTop * modifier;
        rect.bottom += scrollTop * modifier;
        rect.left += scrollLeft * modifier;
        rect.right += scrollLeft * modifier;
        return rect;
    }

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */
    /**
     * @param {?} children
     * @param {?} parent
     * @param {?=} fixedPosition
     * @return {?}
     */
    function getOffsetRectRelativeToArbitraryNode(children, parent, fixedPosition) {
        if (fixedPosition === void 0) {
            fixedPosition = false;
        }
        /** @type {?} */
        var isIE10 = isIE(10);
        /** @type {?} */
        var isHTML = parent.nodeName === 'HTML';
        /** @type {?} */
        var childrenRect = getBoundingClientRect(children);
        /** @type {?} */
        var parentRect = getBoundingClientRect(parent);
        /** @type {?} */
        var scrollParent = getScrollParent(children);
        /** @type {?} */
        var styles = getStyleComputedProperty(parent);
        /** @type {?} */
        var borderTopWidth = parseFloat(styles.borderTopWidth);
        /** @type {?} */
        var borderLeftWidth = parseFloat(styles.borderLeftWidth);
        // In cases where the parent is fixed, we must ignore negative scroll in offset calc
        if (fixedPosition && isHTML) {
            parentRect.top = Math.max(parentRect.top, 0);
            parentRect.left = Math.max(parentRect.left, 0);
        }
        /** @type {?} */
        var offsets = getClientRect({
            top: childrenRect.top - parentRect.top - borderTopWidth,
            left: childrenRect.left - parentRect.left - borderLeftWidth,
            width: childrenRect.width,
            height: childrenRect.height
        });
        offsets.marginTop = 0;
        offsets.marginLeft = 0;
        // Subtract margins of documentElement in case it's being used as parent
        // we do this only on HTML because it's the only element that behaves
        // differently when margins are applied to it. The margins are included in
        // the box of the documentElement, in the other cases not.
        if (!isIE10 && isHTML) {
            /** @type {?} */
            var marginTop = parseFloat(styles.marginTop);
            /** @type {?} */
            var marginLeft = parseFloat(styles.marginLeft);
            offsets.top -= borderTopWidth - marginTop;
            offsets.bottom -= borderTopWidth - marginTop;
            offsets.left -= borderLeftWidth - marginLeft;
            offsets.right -= borderLeftWidth - marginLeft;
            // Attach marginTop and marginLeft because in some circumstances we may need them
            offsets.marginTop = marginTop;
            offsets.marginLeft = marginLeft;
        }
        if (isIE10 && !fixedPosition
            ? parent.contains(scrollParent)
            : parent === scrollParent && scrollParent.nodeName !== 'BODY') {
            offsets = includeScroll(offsets, parent);
        }
        return offsets;
    }

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */
    /**
     * @param {?} element
     * @param {?=} excludeScroll
     * @return {?}
     */
    function getViewportOffsetRectRelativeToArtbitraryNode(element, excludeScroll) {
        if (excludeScroll === void 0) {
            excludeScroll = false;
        }
        /** @type {?} */
        var html = element.ownerDocument.documentElement;
        /** @type {?} */
        var relativeOffset = getOffsetRectRelativeToArbitraryNode(element, html);
        /** @type {?} */
        var width = Math.max(html.clientWidth, window.innerWidth || 0);
        /** @type {?} */
        var height = Math.max(html.clientHeight, window.innerHeight || 0);
        /** @type {?} */
        var scrollTop = !excludeScroll ? getScroll(html) : 0;
        /** @type {?} */
        var scrollLeft = !excludeScroll ? getScroll(html, 'left') : 0;
        /** @type {?} */
        var offset = {
            top: scrollTop - Number(relativeOffset.top) + Number(relativeOffset.marginTop),
            left: scrollLeft - Number(relativeOffset.left) + Number(relativeOffset.marginLeft),
            width: width,
            height: height
        };
        return getClientRect(offset);
    }

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */
    /**
     * @param {?} element
     * @return {?}
     */
    function isFixed(element) {
        /** @type {?} */
        var nodeName = element.nodeName;
        if (nodeName === 'BODY' || nodeName === 'HTML') {
            return false;
        }
        if (getStyleComputedProperty(element, 'position') === 'fixed') {
            return true;
        }
        return isFixed(getParentNode(element));
    }

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */
    /**
     * @param {?} element
     * @return {?}
     */
    function getFixedPositionOffsetParent(element) {
        // This check is needed to avoid errors in case one of the elements isn't defined for any reason
        if (!element || !element.parentElement || isIE()) {
            return document.documentElement;
        }
        /** @type {?} */
        var el = element.parentElement;
        while (el && getStyleComputedProperty(el, 'transform') === 'none') {
            el = el.parentElement;
        }
        return el || document.documentElement;
    }

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */
    /**
     * @param {?} target
     * @param {?} host
     * @param {?=} padding
     * @param {?=} boundariesElement
     * @param {?=} fixedPosition
     * @return {?}
     */
    function getBoundaries(target, host, padding, boundariesElement, fixedPosition) {
        // NOTE: 1 DOM access here
        if (padding === void 0) {
            padding = 0;
        }
        if (fixedPosition === void 0) {
            fixedPosition = false;
        }
        // NOTE: 1 DOM access here
        /** @type {?} */
        var boundaries = { top: 0, left: 0 };
        /** @type {?} */
        var offsetParent = fixedPosition ? getFixedPositionOffsetParent(target) : findCommonOffsetParent(target, host);
        // Handle viewport case
        if (boundariesElement === 'viewport') {
            boundaries = getViewportOffsetRectRelativeToArtbitraryNode(offsetParent, fixedPosition);
        }
        else {
            // Handle other cases based on DOM element used as boundaries
            /** @type {?} */
            var boundariesNode = void 0;
            if (boundariesElement === 'scrollParent') {
                boundariesNode = getScrollParent(getParentNode(host));
                if (boundariesNode.nodeName === 'BODY') {
                    boundariesNode = target.ownerDocument.documentElement;
                }
            }
            else if (boundariesElement === 'window') {
                boundariesNode = target.ownerDocument.documentElement;
            }
            else {
                boundariesNode = boundariesElement;
            }
            /** @type {?} */
            var offsets = getOffsetRectRelativeToArbitraryNode(boundariesNode, offsetParent, fixedPosition);
            // In case of HTML, we need a different computation
            if (boundariesNode.nodeName === 'HTML' && !isFixed(offsetParent)) {
                var _a = getWindowSizes(target.ownerDocument), height = _a.height, width = _a.width;
                boundaries.top += offsets.top - offsets.marginTop;
                boundaries.bottom = Number(height) + Number(offsets.top);
                boundaries.left += offsets.left - offsets.marginLeft;
                boundaries.right = Number(width) + Number(offsets.left);
            }
            else {
                // for all the other DOM elements, this one is good
                boundaries = offsets;
            }
        }
        // Add paddings
        boundaries.left += padding;
        boundaries.top += padding;
        boundaries.right -= padding;
        boundaries.bottom -= padding;
        return boundaries;
    }

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */
    /**
     * @param {?} __0
     * @return {?}
     */
    function getArea(_a) {
        var width = _a.width, height = _a.height;
        return width * height;
    }
    /**
     * @param {?} placement
     * @param {?} refRect
     * @param {?} target
     * @param {?} host
     * @param {?=} allowedPositions
     * @param {?=} boundariesElement
     * @param {?=} padding
     * @return {?}
     */
    function computeAutoPlacement(placement, refRect, target, host, allowedPositions, boundariesElement, padding) {
        if (allowedPositions === void 0) {
            allowedPositions = ['top', 'left', 'bottom', 'right'];
        }
        if (boundariesElement === void 0) {
            boundariesElement = 'viewport';
        }
        if (padding === void 0) {
            padding = 0;
        }
        if (placement.indexOf('auto') === -1) {
            return placement;
        }
        /** @type {?} */
        var boundaries = getBoundaries(target, host, padding, boundariesElement);
        /** @type {?} */
        var rects = {
            top: {
                width: boundaries.width,
                height: refRect.top - boundaries.top
            },
            right: {
                width: boundaries.right - refRect.right,
                height: boundaries.height
            },
            bottom: {
                width: boundaries.width,
                height: boundaries.bottom - refRect.bottom
            },
            left: {
                width: refRect.left - boundaries.left,
                height: boundaries.height
            }
        };
        /** @type {?} */
        var sortedAreas = Object.keys(rects)
            .map(( /**
     * @param {?} key
     * @return {?}
     */function (key) { return (__assign({ key: key }, rects[key], { area: getArea(rects[key]) })); }))
            .sort(( /**
     * @param {?} a
     * @param {?} b
     * @return {?}
     */function (a, b) { return b.area - a.area; }));
        /** @type {?} */
        var filteredAreas = sortedAreas.filter(( /**
         * @param {?} __0
         * @return {?}
         */function (_a) {
            var width = _a.width, height = _a.height;
            return width >= target.clientWidth && height >= target.clientHeight;
        }));
        filteredAreas = allowedPositions
            .reduce(( /**
     * @param {?} obj
     * @param {?} key
     * @return {?}
     */function (obj, key) {
            var _a;
            return __assign({}, obj, (_a = {}, _a[key] = filteredAreas[key], _a));
        }), {});
        /** @type {?} */
        var computedPlacement = filteredAreas.length > 0
            ? filteredAreas[0].key
            : sortedAreas[0].key;
        /** @type {?} */
        var variation = placement.split(' ')[1];
        target.className = target.className.replace(/auto/g, computedPlacement);
        return computedPlacement + (variation ? "-" + variation : '');
    }

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */
    /**
     * @param {?} data
     * @return {?}
     */
    function getOffsets(data) {
        return {
            width: data.offsets.target.width,
            height: data.offsets.target.height,
            left: Math.floor(data.offsets.target.left),
            top: Math.round(data.offsets.target.top),
            bottom: Math.round(data.offsets.target.bottom),
            right: Math.floor(data.offsets.target.right)
        };
    }

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */
    /**
     * Get the opposite placement of the given one
     * @param {?} placement
     * @return {?}
     */
    function getOppositePlacement(placement) {
        /** @type {?} */
        var hash = { left: 'right', right: 'left', bottom: 'top', top: 'bottom' };
        return placement.replace(/left|right|bottom|top/g, ( /**
         * @param {?} matched
         * @return {?}
         */function (matched) { return (( /** @type {?} */(hash)))[matched]; }));
    }

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */
    /**
     * Get the opposite placement variation of the given one
     * @param {?} variation
     * @return {?}
     */
    function getOppositeVariation(variation) {
        if (variation === 'right') {
            return 'left';
        }
        else if (variation === 'left') {
            return 'right';
        }
        return variation;
    }

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */
    /**
     * Get the outer sizes of the given element (offset size + margins)
     * @param {?} element
     * @return {?}
     */
    function getOuterSizes(element) {
        /** @type {?} */
        var window = element.ownerDocument.defaultView;
        /** @type {?} */
        var styles = window.getComputedStyle(element);
        /** @type {?} */
        var x = parseFloat(styles.marginTop || 0) + parseFloat(styles.marginBottom || 0);
        /** @type {?} */
        var y = parseFloat(styles.marginLeft || 0) + parseFloat(styles.marginRight || 0);
        return {
            width: Number(element.offsetWidth) + y,
            height: Number(element.offsetHeight) + x
        };
    }

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */
    /**
     * @param {?} target
     * @param {?} host
     * @param {?=} fixedPosition
     * @return {?}
     */
    function getReferenceOffsets(target, host, fixedPosition) {
        if (fixedPosition === void 0) {
            fixedPosition = null;
        }
        /** @type {?} */
        var commonOffsetParent = fixedPosition
            ? getFixedPositionOffsetParent(target)
            : findCommonOffsetParent(target, host);
        return getOffsetRectRelativeToArbitraryNode(host, commonOffsetParent, fixedPosition);
    }

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */
    /**
     * @param {?} target
     * @param {?} hostOffsets
     * @param {?} position
     * @return {?}
     */
    function getTargetOffsets(target, hostOffsets, position) {
        /** @type {?} */
        var placement = position.split(' ')[0];
        // Get target node sizes
        /** @type {?} */
        var targetRect = getOuterSizes(target);
        // Add position, width and height to our offsets object
        /** @type {?} */
        var targetOffsets = {
            width: targetRect.width,
            height: targetRect.height
        };
        // depending by the target placement we have to compute its offsets slightly differently
        /** @type {?} */
        var isHoriz = ['right', 'left'].indexOf(placement) !== -1;
        /** @type {?} */
        var mainSide = isHoriz ? 'top' : 'left';
        /** @type {?} */
        var secondarySide = isHoriz ? 'left' : 'top';
        /** @type {?} */
        var measurement = isHoriz ? 'height' : 'width';
        /** @type {?} */
        var secondaryMeasurement = !isHoriz ? 'height' : 'width';
        (( /** @type {?} */(targetOffsets)))[mainSide] =
            hostOffsets[mainSide] +
                hostOffsets[measurement] / 2 -
                targetRect[measurement] / 2;
        (( /** @type {?} */(targetOffsets)))[secondarySide] = placement === secondarySide
            ? hostOffsets[secondarySide] - targetRect[secondaryMeasurement]
            : (( /** @type {?} */(hostOffsets)))[getOppositePlacement(secondarySide)];
        return targetOffsets;
    }

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */
    /**
     * Helper used to know if the given modifier is enabled.
     * @param {?} options
     * @param {?} modifierName
     * @return {?}
     */
    function isModifierEnabled(options, modifierName) {
        return options
            && options.modifiers
            && options.modifiers[modifierName]
            && options.modifiers[modifierName].enabled;
    }

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */
    /**
     * Tells if a given input is a number
     * @param {?} n
     * @return {?}
     */
    function isNumeric(n) {
        return n !== '' && !isNaN(parseFloat(n)) && isFinite(n);
    }

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */
    /**
     * @param {?} element
     * @param {?} styles
     * @param {?=} renderer
     * @return {?}
     */
    function setStyles(element, styles, renderer) {
        Object.keys(styles).forEach(( /**
         * @param {?} prop
         * @return {?}
         */function (prop) {
            /** @type {?} */
            var unit = '';
            // add unit if the value is numeric and is one of the following
            if (['width', 'height', 'top', 'right', 'bottom', 'left'].indexOf(prop) !== -1 &&
                isNumeric(styles[prop])) {
                unit = 'px';
            }
            if (renderer) {
                renderer.setStyle(element, prop, "" + String(styles[prop]) + unit);
                return;
            }
            element.style[prop] = String(styles[prop]) + unit;
        }));
    }

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */
    /**
     * @param {?} data
     * @param {?=} renderer
     * @return {?}
     */
    function setAllStyles(data, renderer) {
        /** @type {?} */
        var target = data.instance.target;
        /** @type {?} */
        var offsets = getOffsets(data);
        setStyles(target, {
            'will-change': 'transform',
            top: '0px',
            left: '0px',
            transform: "translate3d(" + offsets.left + "px, " + offsets.top + "px, 0px)"
        }, renderer);
        if (data.instance.arrow) {
            setStyles(data.instance.arrow, data.offsets.arrow, renderer);
        }
        if (data.placementAuto) {
            if (renderer) {
                renderer.setAttribute(target, 'class', target.className.replace(/bs-popover-auto/g, "bs-popover-" + data.placement));
                renderer.setAttribute(target, 'class', target.className.replace(/bs-tooltip-auto/g, "bs-tooltip-" + data.placement));
                renderer.setAttribute(target, 'class', target.className.replace(/\sauto/g, "s" + data.placement));
                if (target.className.match(/popover/g)) {
                    renderer.addClass(target, 'popover-auto');
                }
                if (target.className.match(/tooltip/g)) {
                    renderer.addClass(target, 'tooltip-auto');
                }
            }
            else {
                target.className = target.className.replace(/bs-popover-auto/g, "bs-popover-" + data.placement);
                target.className = target.className.replace(/bs-tooltip-auto/g, "bs-tooltip-" + data.placement);
                target.className = target.className.replace(/\sauto/g, "s" + data.placement);
                if (target.className.match(/popover/g)) {
                    target.classList.add('popover-auto');
                }
                if (target.className.match(/tooltip/g)) {
                    target.classList.add('tooltip-auto');
                }
            }
        }
        if (renderer) {
            renderer.setAttribute(target, 'class', target.className.replace(/left|right|top|bottom/g, "" + data.placement.split(' ')[0]));
        }
        else {
            target.className = target.className.replace(/left|right|top|bottom/g, "" + data.placement.split(' ')[0]);
        }
    }

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */
    /**
     * @param {?} data
     * @return {?}
     */
    function arrow(data) {
        var _a;
        /** @type {?} */
        var targetOffsets = data.offsets.target;
        // if arrowElement is a string, suppose it's a CSS selector
        /** @type {?} */
        var arrowElement = data.instance.target.querySelector('.arrow');
        // if arrowElement is not found, don't run the modifier
        if (!arrowElement) {
            return data;
        }
        /** @type {?} */
        var isVertical = ['left', 'right'].indexOf(data.placement) !== -1;
        /** @type {?} */
        var len = isVertical ? 'height' : 'width';
        /** @type {?} */
        var sideCapitalized = isVertical ? 'Top' : 'Left';
        /** @type {?} */
        var side = sideCapitalized.toLowerCase();
        /** @type {?} */
        var altSide = isVertical ? 'left' : 'top';
        /** @type {?} */
        var opSide = isVertical ? 'bottom' : 'right';
        /** @type {?} */
        var arrowElementSize = getOuterSizes(arrowElement)[len];
        // top/left side
        if (data.offsets.host[opSide] - arrowElementSize < (( /** @type {?} */(targetOffsets)))[side]) {
            (( /** @type {?} */(targetOffsets)))[side] -=
                (( /** @type {?} */(targetOffsets)))[side] - (data.offsets.host[opSide] - arrowElementSize);
        }
        // bottom/right side
        if (Number((( /** @type {?} */(data))).offsets.host[side]) + Number(arrowElementSize) > (( /** @type {?} */(targetOffsets)))[opSide]) {
            (( /** @type {?} */(targetOffsets)))[side] +=
                Number((( /** @type {?} */(data))).offsets.host[side]) + Number(arrowElementSize) - Number((( /** @type {?} */(targetOffsets)))[opSide]);
        }
        targetOffsets = getClientRect(targetOffsets);
        // compute center of the target
        /** @type {?} */
        var center = Number((( /** @type {?} */(data))).offsets.host[side]) + Number(data.offsets.host[len] / 2 - arrowElementSize / 2);
        // Compute the sideValue using the updated target offsets
        // take target margin in account because we don't have this info available
        /** @type {?} */
        var css = getStyleComputedProperty(data.instance.target);
        /** @type {?} */
        var targetMarginSide = parseFloat(css["margin" + sideCapitalized]);
        /** @type {?} */
        var targetBorderSide = parseFloat(css["border" + sideCapitalized + "Width"]);
        /** @type {?} */
        var sideValue = center - (( /** @type {?} */(targetOffsets)))[side] - targetMarginSide - targetBorderSide;
        // prevent arrowElement from being placed not contiguously to its target
        sideValue = Math.max(Math.min(targetOffsets[len] - arrowElementSize, sideValue), 0);
        data.offsets.arrow = (_a = {},
            _a[side] = Math.round(sideValue),
            _a[altSide] = '' // make sure to unset any eventual altSide value from the DOM node
            ,
                _a);
        data.instance.arrow = arrowElement;
        return data;
    }

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */
    /**
     * @param {?} data
     * @return {?}
     */
    function flip(data) {
        data.offsets.target = getClientRect(data.offsets.target);
        if (!isModifierEnabled(data.options, 'flip')) {
            data.offsets.target = __assign({}, data.offsets.target, getTargetOffsets(data.instance.target, data.offsets.host, data.placement));
            return data;
        }
        /** @type {?} */
        var boundaries = getBoundaries(data.instance.target, data.instance.host, 0, // padding
        'viewport', false // positionFixed
        );
        /** @type {?} */
        var placement = data.placement.split(' ')[0];
        /** @type {?} */
        var variation = data.placement.split(' ')[1] || '';
        /** @type {?} */
        var offsetsHost = data.offsets.host;
        /** @type {?} */
        var target = data.instance.target;
        /** @type {?} */
        var host = data.instance.host;
        /** @type {?} */
        var adaptivePosition = variation
            ? computeAutoPlacement('auto', offsetsHost, target, host, ['top', 'bottom'])
            : computeAutoPlacement('auto', offsetsHost, target, host);
        /** @type {?} */
        var flipOrder = [placement, adaptivePosition];
        /* tslint:disable-next-line: cyclomatic-complexity */
        flipOrder.forEach(( /**
         * @param {?} step
         * @param {?} index
         * @return {?}
         */function (step, index) {
            if (placement !== step || flipOrder.length === index + 1) {
                return data;
            }
            placement = data.placement.split(' ')[0];
            // using floor because the host offsets may contain decimals we are not going to consider here
            /** @type {?} */
            var overlapsRef = (placement === 'left' &&
                Math.floor(data.offsets.target.right) > Math.floor(data.offsets.host.left)) ||
                (placement === 'right' &&
                    Math.floor(data.offsets.target.left) < Math.floor(data.offsets.host.right)) ||
                (placement === 'top' &&
                    Math.floor(data.offsets.target.bottom) > Math.floor(data.offsets.host.top)) ||
                (placement === 'bottom' &&
                    Math.floor(data.offsets.target.top) < Math.floor(data.offsets.host.bottom));
            /** @type {?} */
            var overflowsLeft = Math.floor(data.offsets.target.left) < Math.floor(boundaries.left);
            /** @type {?} */
            var overflowsRight = Math.floor(data.offsets.target.right) > Math.floor(boundaries.right);
            /** @type {?} */
            var overflowsTop = Math.floor(data.offsets.target.top) < Math.floor(boundaries.top);
            /** @type {?} */
            var overflowsBottom = Math.floor(data.offsets.target.bottom) > Math.floor(boundaries.bottom);
            /** @type {?} */
            var overflowsBoundaries = (placement === 'left' && overflowsLeft) ||
                (placement === 'right' && overflowsRight) ||
                (placement === 'top' && overflowsTop) ||
                (placement === 'bottom' && overflowsBottom);
            // flip the variation if required
            /** @type {?} */
            var isVertical = ['top', 'bottom'].indexOf(placement) !== -1;
            /** @type {?} */
            var flippedVariation = ((isVertical && variation === 'left' && overflowsLeft) ||
                (isVertical && variation === 'right' && overflowsRight) ||
                (!isVertical && variation === 'left' && overflowsTop) ||
                (!isVertical && variation === 'right' && overflowsBottom));
            if (overlapsRef || overflowsBoundaries || flippedVariation) {
                if (overlapsRef || overflowsBoundaries) {
                    placement = flipOrder[index + 1];
                }
                if (flippedVariation) {
                    variation = getOppositeVariation(variation);
                }
                data.placement = placement + (variation ? " " + variation : '');
                data.offsets.target = __assign({}, data.offsets.target, getTargetOffsets(data.instance.target, data.offsets.host, data.placement));
            }
        }));
        return data;
    }

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */
    /**
     * @param {?} targetElement
     * @param {?} hostElement
     * @param {?} position
     * @param {?} options
     * @return {?}
     */
    function initData(targetElement, hostElement, position, options) {
        /** @type {?} */
        var hostElPosition = getReferenceOffsets(targetElement, hostElement);
        /** @type {?} */
        var placementAuto = !!position.match(/auto/g);
        // support old placements 'auto left|right|top|bottom'
        /** @type {?} */
        var placement = !!position.match(/auto\s(left|right|top|bottom)/g)
            ? position.split(' ')[1] || ''
            : position;
        /** @type {?} */
        var targetOffset = getTargetOffsets(targetElement, hostElPosition, placement);
        placement = computeAutoPlacement(placement, hostElPosition, targetElement, hostElement);
        return {
            options: options,
            instance: {
                target: targetElement,
                host: hostElement,
                arrow: null
            },
            offsets: {
                target: targetOffset,
                host: hostElPosition,
                arrow: null
            },
            positionFixed: false,
            placement: placement,
            placementAuto: placementAuto
        };
    }

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */
    /**
     * @param {?} data
     * @return {?}
     */
    function preventOverflow(data) {
        if (!isModifierEnabled(data.options, 'preventOverflow')) {
            return data;
        }
        // NOTE: DOM access here
        // resets the targetOffsets's position so that the document size can be calculated excluding
        // the size of the targetOffsets element itself
        /** @type {?} */
        var transformProp = 'transform';
        /** @type {?} */
        var targetStyles = data.instance.target.style;
        // assignment to help minification
        var top = targetStyles.top, left = targetStyles.left, _a = transformProp, transform = targetStyles[_a];
        targetStyles.top = '';
        targetStyles.left = '';
        targetStyles[transformProp] = '';
        /** @type {?} */
        var boundaries = getBoundaries(data.instance.target, data.instance.host, 0, // padding
        'scrollParent', false // positionFixed
        );
        // NOTE: DOM access here
        // restores the original style properties after the offsets have been computed
        targetStyles.top = top;
        targetStyles.left = left;
        targetStyles[transformProp] = transform;
        /** @type {?} */
        var order = ['left', 'right', 'top', 'bottom'];
        /** @type {?} */
        var check = {
            primary: /**
             * @param {?} placement
             * @return {?}
             */ function (placement) {
                var _a;
                /** @type {?} */
                var value = (( /** @type {?} */(data))).offsets.target[placement];
                if ((( /** @type {?} */(data))).offsets.target[placement] < boundaries[placement] &&
                    !false // options.escapeWithReference
                ) {
                    value = Math.max((( /** @type {?} */(data))).offsets.target[placement], boundaries[placement]);
                }
                return _a = {}, _a[placement] = value, _a;
            },
            secondary: /**
             * @param {?} placement
             * @return {?}
             */ function (placement) {
                var _a;
                /** @type {?} */
                var mainSide = placement === 'right' ? 'left' : 'top';
                /** @type {?} */
                var value = data.offsets.target[mainSide];
                if ((( /** @type {?} */(data))).offsets.target[placement] > boundaries[placement] &&
                    !false // escapeWithReference
                ) {
                    value = Math.min(data.offsets.target[mainSide], boundaries[placement] -
                        (placement === 'right' ? data.offsets.target.width : data.offsets.target.height));
                }
                return _a = {}, _a[mainSide] = value, _a;
            }
        };
        /** @type {?} */
        var side;
        order.forEach(( /**
         * @param {?} placement
         * @return {?}
         */function (placement) {
            side = ['left', 'top']
                .indexOf(placement) !== -1
                ? 'primary'
                : 'secondary';
            data.offsets.target = __assign({}, data.offsets.target, (( /** @type {?} */(check)))[side](placement));
        }));
        return data;
    }

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */
    /**
     * @param {?} data
     * @return {?}
     */
    function shift(data) {
        var _a, _b;
        /** @type {?} */
        var placement = data.placement;
        /** @type {?} */
        var basePlacement = placement.split(' ')[0];
        /** @type {?} */
        var shiftvariation = placement.split(' ')[1];
        if (shiftvariation) {
            var _c = data.offsets, host = _c.host, target = _c.target;
            /** @type {?} */
            var isVertical = ['bottom', 'top'].indexOf(basePlacement) !== -1;
            /** @type {?} */
            var side = isVertical ? 'left' : 'top';
            /** @type {?} */
            var measurement = isVertical ? 'width' : 'height';
            /** @type {?} */
            var shiftOffsets = {
                left: (_a = {}, _a[side] = host[side], _a),
                right: (_b = {},
                    _b[side] = host[side] + host[measurement] - host[measurement],
                    _b)
            };
            data.offsets.target = __assign({}, target, (( /** @type {?} */(shiftOffsets)))[shiftvariation]);
        }
        return data;
    }

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */
    var Positioning = /** @class */ (function () {
        function Positioning() {
        }
        /**
         * @param {?} hostElement
         * @param {?} targetElement
         * @return {?}
         */
        Positioning.prototype.position = /**
         * @param {?} hostElement
         * @param {?} targetElement
         * @return {?}
         */
            function (hostElement, targetElement) {
                return this.offset(hostElement, targetElement);
            };
        /**
         * @param {?} hostElement
         * @param {?} targetElement
         * @return {?}
         */
        Positioning.prototype.offset = /**
         * @param {?} hostElement
         * @param {?} targetElement
         * @return {?}
         */
            function (hostElement, targetElement) {
                return getReferenceOffsets(targetElement, hostElement);
            };
        /**
         * @param {?} hostElement
         * @param {?} targetElement
         * @param {?} position
         * @param {?=} _appendToBody
         * @param {?=} options
         * @return {?}
         */
        Positioning.prototype.positionElements = /**
         * @param {?} hostElement
         * @param {?} targetElement
         * @param {?} position
         * @param {?=} _appendToBody
         * @param {?=} options
         * @return {?}
         */
            function (hostElement, targetElement, position, _appendToBody, options) {
                /** @type {?} */
                var chainOfModifiers = [flip, shift, preventOverflow, arrow];
                return chainOfModifiers.reduce(( /**
                 * @param {?} modifiedData
                 * @param {?} modifier
                 * @return {?}
                 */function (modifiedData, modifier) { return modifier(modifiedData); }), initData(targetElement, hostElement, position, options));
            };
        return Positioning;
    }());
    /** @type {?} */
    var positionService = new Positioning();
    /**
     * @param {?} hostElement
     * @param {?} targetElement
     * @param {?} placement
     * @param {?=} appendToBody
     * @param {?=} options
     * @param {?=} renderer
     * @return {?}
     */
    function positionElements(hostElement, targetElement, placement, appendToBody, options, renderer) {
        /** @type {?} */
        var data = positionService.positionElements(hostElement, targetElement, placement, appendToBody, options);
        setAllStyles(data, renderer);
    }

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */
    var PositioningService = /** @class */ (function () {
        function PositioningService(rendererFactory, platformId, _ngZone) {
            var _this = this;
            this._ngZone = _ngZone;
            this.update$$ = new rxjs.Subject();
            this.positionElements = new Map();
            if (common.isPlatformBrowser(platformId)) {
                this._ngZone.runOutsideAngular(( /**
                 * @return {?}
                 */function () {
                    rxjs.merge(rxjs.fromEvent(window, 'scroll'), rxjs.fromEvent(window, 'resize'), 
                    // tslint:disable-next-line: deprecation
                    rxjs.of(0, rxjs.animationFrameScheduler), _this.update$$).subscribe(( /**
                     * @return {?}
                     */function () {
                        _this.positionElements.forEach(( /**
                         * @param {?} positionElement
                         * @return {?}
                         */function (positionElement) {
                            positionElements(_getHtmlElement(positionElement.target), _getHtmlElement(positionElement.element), positionElement.attachment, positionElement.appendToBody, _this.options, rendererFactory.createRenderer(null, null));
                        }));
                    }));
                }));
            }
        }
        /**
         * @param {?} options
         * @return {?}
         */
        PositioningService.prototype.position = /**
         * @param {?} options
         * @return {?}
         */
            function (options) {
                this.addPositionElement(options);
            };
        /**
         * @param {?} options
         * @return {?}
         */
        PositioningService.prototype.addPositionElement = /**
         * @param {?} options
         * @return {?}
         */
            function (options) {
                this.positionElements.set(_getHtmlElement(options.element), options);
            };
        /**
         * @return {?}
         */
        PositioningService.prototype.calcPosition = /**
         * @return {?}
         */
            function () {
                this.update$$.next();
            };
        /**
         * @param {?} elRef
         * @return {?}
         */
        PositioningService.prototype.deletePositionElement = /**
         * @param {?} elRef
         * @return {?}
         */
            function (elRef) {
                this.positionElements.delete(_getHtmlElement(elRef));
            };
        /**
         * @param {?} options
         * @return {?}
         */
        PositioningService.prototype.setOptions = /**
         * @param {?} options
         * @return {?}
         */
            function (options) {
                this.options = options;
            };
        PositioningService.decorators = [
            { type: i0.Injectable }
        ];
        /** @nocollapse */
        PositioningService.ctorParameters = function () {
            return [
                { type: i0.RendererFactory2 },
                { type: Number, decorators: [{ type: i0.Inject, args: [i0.PLATFORM_ID,] }] },
                { type: i0.NgZone }
            ];
        };
        return PositioningService;
    }());
    /**
     * @param {?} element
     * @return {?}
     */
    function _getHtmlElement(element) {
        // it means that we got a selector
        if (element && typeof element === 'string') {
            return document.querySelector(element);
        }
        if (element instanceof i0.ElementRef) {
            return element.nativeElement;
        }
        return element;
    }

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */
    var ComponentLoaderFactory = /** @class */ (function () {
        function ComponentLoaderFactory(_componentFactoryResolver, _ngZone, _injector, _posService, _applicationRef) {
            this._componentFactoryResolver = _componentFactoryResolver;
            this._ngZone = _ngZone;
            this._injector = _injector;
            this._posService = _posService;
            this._applicationRef = _applicationRef;
        }
        /**
         * @template T
         * @param {?} _elementRef
         * @param {?} _viewContainerRef
         * @param {?} _renderer
         * @return {?}
         */
        ComponentLoaderFactory.prototype.createLoader = /**
         * @template T
         * @param {?} _elementRef
         * @param {?} _viewContainerRef
         * @param {?} _renderer
         * @return {?}
         */
            function (_elementRef, _viewContainerRef, _renderer) {
                return new ComponentLoader(_viewContainerRef, _renderer, _elementRef, this._injector, this._componentFactoryResolver, this._ngZone, this._applicationRef, this._posService);
            };
        ComponentLoaderFactory.decorators = [
            { type: i0.Injectable }
        ];
        /** @nocollapse */
        ComponentLoaderFactory.ctorParameters = function () {
            return [
                { type: i0.ComponentFactoryResolver },
                { type: i0.NgZone },
                { type: i0.Injector },
                { type: PositioningService },
                { type: i0.ApplicationRef }
            ];
        };
        return ComponentLoaderFactory;
    }());

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */
    /**
     * Default dropdown configuration
     */
    var BsDropdownConfig = /** @class */ (function () {
        function BsDropdownConfig() {
            /**
             * default dropdown auto closing behavior
             */
            this.autoClose = true;
        }
        BsDropdownConfig.decorators = [
            { type: i0.Injectable }
        ];
        return BsDropdownConfig;
    }());

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */
    var BsDropdownState = /** @class */ (function () {
        function BsDropdownState() {
            var _this = this;
            this.direction = 'down';
            this.isOpenChange = new i0.EventEmitter();
            this.isDisabledChange = new i0.EventEmitter();
            this.toggleClick = new i0.EventEmitter();
            this.dropdownMenu = new Promise(( /**
             * @param {?} resolve
             * @return {?}
             */function (resolve) {
                _this.resolveDropdownMenu = resolve;
            }));
        }
        BsDropdownState.decorators = [
            { type: i0.Injectable }
        ];
        /** @nocollapse */
        BsDropdownState.ctorParameters = function () { return []; };
        return BsDropdownState;
    }());

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */
    var BsDropdownContainerComponent = /** @class */ (function () {
        function BsDropdownContainerComponent(_state) {
            var _this = this;
            this._state = _state;
            this.isOpen = false;
            this.display = 'block';
            this.position = 'absolute';
            this._subscription = _state.isOpenChange.subscribe(( /**
             * @param {?} value
             * @return {?}
             */function (value) {
                _this.isOpen = value;
            }));
        }
        Object.defineProperty(BsDropdownContainerComponent.prototype, "direction", {
            get: /**
             * @return {?}
             */ function () {
                return this._state.direction;
            },
            enumerable: true,
            configurable: true
        });
        /**
         * @return {?}
         */
        BsDropdownContainerComponent.prototype.ngOnDestroy = /**
         * @return {?}
         */
            function () {
                this._subscription.unsubscribe();
            };
        BsDropdownContainerComponent.decorators = [
            { type: i0.Component, args: [{
                        selector: 'mdb-dropdown-container',
                        changeDetection: i0.ChangeDetectionStrategy.OnPush,
                        template: "\n    <div\n      [class.dropup]=\"direction === 'up'\"\n      [class.dropdown]=\"direction === 'down'\"\n      [class.show]=\"isOpen\"\n      [class.open]=\"isOpen\"\n    >\n      <ng-content></ng-content>\n    </div>\n  "
                    }] }
        ];
        /** @nocollapse */
        BsDropdownContainerComponent.ctorParameters = function () {
            return [
                { type: BsDropdownState }
            ];
        };
        BsDropdownContainerComponent.propDecorators = {
            display: [{ type: i0.HostBinding, args: ['style.display',] }],
            position: [{ type: i0.HostBinding, args: ['style.position',] }]
        };
        return BsDropdownContainerComponent;
    }());

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */
    var BsDropdownDirective = /** @class */ (function () {
        function BsDropdownDirective(_elementRef, _renderer, _viewContainerRef, _cis, _config, _state, cdRef) {
            this._elementRef = _elementRef;
            this._renderer = _renderer;
            this._viewContainerRef = _viewContainerRef;
            this._cis = _cis;
            this._config = _config;
            this._state = _state;
            this.cdRef = cdRef;
            this.dropupDefault = false;
            this._isInlineOpen = false;
            this._subscriptions = [];
            this._isInited = false;
            // create dropdown component loader
            this._dropdown = this._cis
                .createLoader(this._elementRef, this._viewContainerRef, this._renderer)
                .provide({ provide: BsDropdownState, useValue: this._state });
            this.onShown = this._dropdown.onShown;
            this.shown = this._dropdown.shown;
            this.onHidden = this._dropdown.onHidden;
            this.hidden = this._dropdown.hidden;
            this.isOpenChange = this._state.isOpenChange;
            // set initial dropdown state from config
            this._state.autoClose = this._config.autoClose;
        }
        Object.defineProperty(BsDropdownDirective.prototype, "isDropup", {
            /**
             * This attribute indicates that the dropdown should be opened upwards
             */
            get: /**
             * This attribute indicates that the dropdown should be opened upwards
             * @return {?}
             */ function () {
                if (this.dropup) {
                    this._isDropupDefault = false;
                    return this.dropup;
                }
                else if (this.dropupDefault) {
                    this._isDropupDefault = true;
                    return this.dropupDefault;
                }
                else if (this.dropupDefault && this.dropup) {
                    this._isDropupDefault = false;
                    return this.dropup;
                }
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(BsDropdownDirective.prototype, "autoClose", {
            get: /**
             * @return {?}
             */ function () {
                return this._state.autoClose;
            },
            /**
             * Indicates that dropdown will be closed on item or document click,
             * and after pressing ESC
             */
            set: /**
             * Indicates that dropdown will be closed on item or document click,
             * and after pressing ESC
             * @param {?} value
             * @return {?}
             */ function (value) {
                if (typeof value === 'boolean') {
                    this._state.autoClose = value;
                }
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(BsDropdownDirective.prototype, "isDisabled", {
            get: /**
             * @return {?}
             */ function () {
                return this._isDisabled;
            },
            /**
             * Disables dropdown toggle and hides dropdown menu if opened
             */
            set: /**
             * Disables dropdown toggle and hides dropdown menu if opened
             * @param {?} value
             * @return {?}
             */ function (value) {
                this._isDisabled = value;
                this._state.isDisabledChange.emit(value);
                if (value) {
                    this.hide();
                }
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(BsDropdownDirective.prototype, "isOpen", {
            /**
             * Returns whether or not the popover is currently being shown
             */
            get: /**
             * Returns whether or not the popover is currently being shown
             * @return {?}
             */ function () {
                if (this._showInline) {
                    return this._isInlineOpen;
                }
                return this._dropdown.isShown;
            },
            set: /**
             * @param {?} value
             * @return {?}
             */ function (value) {
                if (value) {
                    this.show();
                }
                else {
                    this.hide();
                }
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(BsDropdownDirective.prototype, "isBs4", {
            get: /**
             * @return {?}
             */ function () {
                return !isBs3();
            },
            enumerable: true,
            configurable: true
        });
        /**
         * @return {?}
         */
        BsDropdownDirective.prototype.ngOnInit = /**
         * @return {?}
         */
            function () {
                var _this = this;
                // fix: seems there are an issue with `routerLinkActive`
                // which result in duplicated call ngOnInit without call to ngOnDestroy
                // read more: https://github.com/valor-software/ngx-bootstrap/issues/1885
                if (this._isInited) {
                    return;
                }
                this._isInited = true;
                this._showInline = !this.container;
                // attach DOM listeners
                this._dropdown.listen({
                    triggers: this.triggers,
                    show: ( /**
                     * @return {?}
                     */function () { return _this.show(); }),
                });
                // toggle visibility on toggle element click
                this._subscriptions.push(this._state.toggleClick.subscribe(( /**
                 * @param {?} value
                 * @return {?}
                 */function (value) { return _this.toggle(value); })));
                // hide dropdown if set disabled while opened
                this._subscriptions.push(this._state.isDisabledChange.subscribe(( /**
                 * @param {?} element
                 * @return {?}
                 */function (element) {
                    if (element === true) {
                        _this.hide();
                    }
                })));
                // attach dropdown menu inside of dropdown
                if (this._showInline) {
                    this._state.dropdownMenu.then(( /**
                     * @param {?} dropdownMenu
                     * @return {?}
                     */function (dropdownMenu) {
                        _this._inlinedMenu = dropdownMenu.viewContainer.createEmbeddedView(dropdownMenu.templateRef);
                    }));
                }
                this._state.isOpenChange.subscribe(( /**
                 * @return {?}
                 */function () {
                    setTimeout(( /**
                     * @return {?}
                     */function () {
                        /** @type {?} */
                        var dropdownContainer = _this._elementRef.nativeElement.querySelector('.dropdown-menu');
                        /** @type {?} */
                        var left = dropdownContainer.getBoundingClientRect().left;
                        if (dropdownContainer.classList.contains('dropdown-menu-right') &&
                            left <= dropdownContainer.clientWidth) {
                            if (left < 0) {
                                _this._renderer.setStyle(dropdownContainer, 'right', left + 'px');
                            }
                            else {
                                _this._renderer.setStyle(dropdownContainer, 'right', '0');
                            }
                        }
                    }), 0);
                }));
            };
        /**
         * Opens an element’s popover. This is considered a “manual” triggering of
         * the popover.
         */
        /**
         * Opens an element’s popover. This is considered a “manual” triggering of
         * the popover.
         * @return {?}
         */
        BsDropdownDirective.prototype.show = /**
         * Opens an element’s popover. This is considered a “manual” triggering of
         * the popover.
         * @return {?}
         */
            function () {
                var _this = this;
                if (this.isOpen || this.isDisabled) {
                    return;
                }
                // material and dropup dropdown animation
                /** @type {?} */
                var button = this._elementRef.nativeElement.children[0];
                /** @type {?} */
                var container = this._elementRef.nativeElement.querySelector('.dropdown-menu');
                if (!container.parentNode.classList.contains('btn-group') &&
                    !container.parentNode.classList.contains('dropdown') &&
                    !this._isDropupDefault) {
                    container.parentNode.classList.add('dropdown');
                }
                if (this.dropup && !this._isDropupDefault) {
                    container.parentNode.classList.add('dropup-material');
                }
                if (button.tagName !== 'BUTTON') {
                    if (button.tagName === 'A') {
                        container.classList.add('a-various-dropdown');
                    }
                    else {
                        container.classList.add('various-dropdown');
                    }
                }
                else {
                    if (button.classList.contains('btn-sm')) {
                        container.classList.add('small-dropdown');
                    }
                    if (button.classList.contains('btn-md')) {
                        container.classList.add('medium-dropdown');
                    }
                    if (button.classList.contains('btn-lg')) {
                        container.classList.add('large-dropdown');
                    }
                }
                setTimeout(( /**
                 * @return {?}
                 */function () {
                    container.classList.add('fadeInDropdown');
                }), 0);
                if (this._showInline) {
                    this._isInlineOpen = true;
                    if (container.parentNode.classList.contains('dropdown') ||
                        container.parentNode.classList.contains('dropup-material')) {
                        setTimeout(( /**
                         * @return {?}
                         */function () {
                            _this.onShown.emit(true);
                            _this.shown.emit(true);
                        }), 560);
                    }
                    else {
                        setTimeout(( /**
                         * @return {?}
                         */function () {
                            _this.onShown.emit(true);
                            _this.shown.emit(true);
                        }), 0);
                    }
                    this._state.isOpenChange.emit(true);
                    return;
                }
                this._state.dropdownMenu.then(( /**
                 * @param {?} dropdownMenu
                 * @return {?}
                 */function (dropdownMenu) {
                    // check direction in which dropdown should be opened
                    /** @type {?} */
                    var _dropup = _this.dropup === true || _this.dropupDefault === true;
                    _this._state.direction = _dropup ? 'up' : 'down';
                    /** @type {?} */
                    var _placement = _this.placement || (_dropup ? 'top left' : 'bottom left');
                    // show dropdown
                    _this._dropdown
                        .attach(BsDropdownContainerComponent)
                        .to(_this.container)
                        .position({ attachment: _placement })
                        .show({
                        content: dropdownMenu.templateRef,
                        placement: _placement,
                    });
                    _this._state.isOpenChange.emit(true);
                }));
            };
        /**
         * Closes an element’s popover. This is considered a “manual” triggering of
         * the popover.
         */
        /**
         * Closes an element’s popover. This is considered a “manual” triggering of
         * the popover.
         * @return {?}
         */
        BsDropdownDirective.prototype.hide = /**
         * Closes an element’s popover. This is considered a “manual” triggering of
         * the popover.
         * @return {?}
         */
            function () {
                var _this = this;
                if (!this.isOpen) {
                    return;
                }
                /** @type {?} */
                var container = this._elementRef.nativeElement.querySelector('.dropdown-menu');
                container.classList.remove('fadeInDropdown');
                if (container.parentNode.classList.contains('dropdown') ||
                    container.parentNode.classList.contains('dropup-material')) {
                    setTimeout(( /**
                     * @return {?}
                     */function () {
                        if (_this._showInline) {
                            _this._isInlineOpen = false;
                            _this.onHidden.emit(true);
                            _this.hidden.emit(true);
                            _this.cdRef.markForCheck();
                        }
                        else {
                            _this._dropdown.hide();
                        }
                        _this._state.isOpenChange.emit(false);
                    }), 560);
                }
                else {
                    setTimeout(( /**
                     * @return {?}
                     */function () {
                        if (_this._showInline) {
                            _this._isInlineOpen = false;
                            _this.onHidden.emit(true);
                            _this.hidden.emit(true);
                            _this.cdRef.markForCheck();
                        }
                        else {
                            _this._dropdown.hide();
                        }
                        _this._state.isOpenChange.emit(false);
                    }), 0);
                }
            };
        /**
         * Toggles an element’s popover. This is considered a “manual” triggering of
         * the popover.
         */
        /**
         * Toggles an element’s popover. This is considered a “manual” triggering of
         * the popover.
         * @param {?=} value
         * @return {?}
         */
        BsDropdownDirective.prototype.toggle = /**
         * Toggles an element’s popover. This is considered a “manual” triggering of
         * the popover.
         * @param {?=} value
         * @return {?}
         */
            function (value) {
                if (this.isOpen || value === false) {
                    return this.hide();
                }
                return this.show();
            };
        /**
         * @return {?}
         */
        BsDropdownDirective.prototype.ngOnDestroy = /**
         * @return {?}
         */
            function () {
                var e_1, _a;
                try {
                    // clean up subscriptions and destroy dropdown
                    for (var _b = __values(this._subscriptions), _c = _b.next(); !_c.done; _c = _b.next()) {
                        var sub = _c.value;
                        sub.unsubscribe();
                    }
                }
                catch (e_1_1) {
                    e_1 = { error: e_1_1 };
                }
                finally {
                    try {
                        if (_c && !_c.done && (_a = _b.return))
                            _a.call(_b);
                    }
                    finally {
                        if (e_1)
                            throw e_1.error;
                    }
                }
                this._dropdown.dispose();
            };
        BsDropdownDirective.decorators = [
            { type: i0.Component, args: [{
                        // tslint:disable-next-line:component-selector
                        selector: '[mdbDropdown],[dropdown]',
                        exportAs: 'bs-dropdown',
                        template: '<ng-content></ng-content>',
                        encapsulation: i0.ViewEncapsulation.None,
                        providers: [BsDropdownState],
                        styles: [".mdb-color.lighten-5{background-color:#d0d6e2!important}.mdb-color.lighten-4{background-color:#b1bace!important}.mdb-color.lighten-3{background-color:#929fba!important}.mdb-color.lighten-2{background-color:#7283a7!important}.mdb-color.lighten-1{background-color:#59698d!important}.mdb-color{background-color:#45526e!important}.mdb-color-text{color:#45526e!important}.rgba-mdb-color-slight,.rgba-mdb-color-slight:after{background-color:rgba(69,82,110,.1)}.rgba-mdb-color-light,.rgba-mdb-color-light:after{background-color:rgba(69,82,110,.3)}.rgba-mdb-color-strong,.rgba-mdb-color-strong:after{background-color:rgba(69,82,110,.7)}.mdb-color.darken-1{background-color:#3b465e!important}.mdb-color.darken-2{background-color:#2e3951!important}.mdb-color.darken-3{background-color:#1c2a48!important}.mdb-color.darken-4{background-color:#1c2331!important}.red.lighten-5{background-color:#ffebee!important}.red.lighten-4{background-color:#ffcdd2!important}.red.lighten-3{background-color:#ef9a9a!important}.red.lighten-2{background-color:#e57373!important}.red.lighten-1{background-color:#ef5350!important}.red{background-color:#f44336!important}.red-text{color:#f44336!important}.rgba-red-slight,.rgba-red-slight:after{background-color:rgba(244,67,54,.1)}.rgba-red-light,.rgba-red-light:after{background-color:rgba(244,67,54,.3)}.rgba-red-strong,.rgba-red-strong:after{background-color:rgba(244,67,54,.7)}.red.darken-1{background-color:#e53935!important}.red.darken-2{background-color:#d32f2f!important}.red.darken-3{background-color:#c62828!important}.red.darken-4{background-color:#b71c1c!important}.red.accent-1{background-color:#ff8a80!important}.red.accent-2{background-color:#ff5252!important}.red.accent-3{background-color:#ff1744!important}.red.accent-4{background-color:#d50000!important}.pink.lighten-5{background-color:#fce4ec!important}.pink.lighten-4{background-color:#f8bbd0!important}.pink.lighten-3{background-color:#f48fb1!important}.pink.lighten-2{background-color:#f06292!important}.pink.lighten-1{background-color:#ec407a!important}.pink{background-color:#e91e63!important}.pink-text{color:#e91e63!important}.rgba-pink-slight,.rgba-pink-slight:after{background-color:rgba(233,30,99,.1)}.rgba-pink-light,.rgba-pink-light:after{background-color:rgba(233,30,99,.3)}.rgba-pink-strong,.rgba-pink-strong:after{background-color:rgba(233,30,99,.7)}.pink.darken-1{background-color:#d81b60!important}.pink.darken-2{background-color:#c2185b!important}.pink.darken-3{background-color:#ad1457!important}.pink.darken-4{background-color:#880e4f!important}.pink.accent-1{background-color:#ff80ab!important}.pink.accent-2{background-color:#ff4081!important}.pink.accent-3{background-color:#f50057!important}.pink.accent-4{background-color:#c51162!important}.purple.lighten-5{background-color:#f3e5f5!important}.purple.lighten-4{background-color:#e1bee7!important}.purple.lighten-3{background-color:#ce93d8!important}.purple.lighten-2{background-color:#ba68c8!important}.purple.lighten-1{background-color:#ab47bc!important}.purple{background-color:#9c27b0!important}.purple-text{color:#9c27b0!important}.rgba-purple-slight,.rgba-purple-slight:after{background-color:rgba(156,39,176,.1)}.rgba-purple-light,.rgba-purple-light:after{background-color:rgba(156,39,176,.3)}.rgba-purple-strong,.rgba-purple-strong:after{background-color:rgba(156,39,176,.7)}.purple.darken-1{background-color:#8e24aa!important}.purple.darken-2{background-color:#7b1fa2!important}.purple.darken-3{background-color:#6a1b9a!important}.purple.darken-4{background-color:#4a148c!important}.purple.accent-1{background-color:#ea80fc!important}.purple.accent-2{background-color:#e040fb!important}.purple.accent-3{background-color:#d500f9!important}.purple.accent-4{background-color:#a0f!important}.deep-purple.lighten-5{background-color:#ede7f6!important}.deep-purple.lighten-4{background-color:#d1c4e9!important}.deep-purple.lighten-3{background-color:#b39ddb!important}.deep-purple.lighten-2{background-color:#9575cd!important}.deep-purple.lighten-1{background-color:#7e57c2!important}.deep-purple{background-color:#673ab7!important}.deep-purple-text{color:#673ab7!important}.rgba-deep-purple-slight,.rgba-deep-purple-slight:after{background-color:rgba(103,58,183,.1)}.rgba-deep-purple-light,.rgba-deep-purple-light:after{background-color:rgba(103,58,183,.3)}.rgba-deep-purple-strong,.rgba-deep-purple-strong:after{background-color:rgba(103,58,183,.7)}.deep-purple.darken-1{background-color:#5e35b1!important}.deep-purple.darken-2{background-color:#512da8!important}.deep-purple.darken-3{background-color:#4527a0!important}.deep-purple.darken-4{background-color:#311b92!important}.deep-purple.accent-1{background-color:#b388ff!important}.deep-purple.accent-2{background-color:#7c4dff!important}.deep-purple.accent-3{background-color:#651fff!important}.deep-purple.accent-4{background-color:#6200ea!important}.indigo.lighten-5{background-color:#e8eaf6!important}.indigo.lighten-4{background-color:#c5cae9!important}.indigo.lighten-3{background-color:#9fa8da!important}.indigo.lighten-2{background-color:#7986cb!important}.indigo.lighten-1{background-color:#5c6bc0!important}.indigo{background-color:#3f51b5!important}.indigo-text{color:#3f51b5!important}.rgba-indigo-slight,.rgba-indigo-slight:after{background-color:rgba(63,81,181,.1)}.rgba-indigo-light,.rgba-indigo-light:after{background-color:rgba(63,81,181,.3)}.rgba-indigo-strong,.rgba-indigo-strong:after{background-color:rgba(63,81,181,.7)}.indigo.darken-1{background-color:#3949ab!important}.indigo.darken-2{background-color:#303f9f!important}.indigo.darken-3{background-color:#283593!important}.indigo.darken-4{background-color:#1a237e!important}.indigo.accent-1{background-color:#8c9eff!important}.indigo.accent-2{background-color:#536dfe!important}.indigo.accent-3{background-color:#3d5afe!important}.indigo.accent-4{background-color:#304ffe!important}.blue.lighten-5{background-color:#e3f2fd!important}.blue.lighten-4{background-color:#bbdefb!important}.blue.lighten-3{background-color:#90caf9!important}.blue.lighten-2{background-color:#64b5f6!important}.blue.lighten-1{background-color:#42a5f5!important}.blue{background-color:#2196f3!important}.blue-text{color:#2196f3!important}.rgba-blue-slight,.rgba-blue-slight:after{background-color:rgba(33,150,243,.1)}.rgba-blue-light,.rgba-blue-light:after{background-color:rgba(33,150,243,.3)}.rgba-blue-strong,.rgba-blue-strong:after{background-color:rgba(33,150,243,.7)}.blue.darken-1{background-color:#1e88e5!important}.blue.darken-2{background-color:#1976d2!important}.blue.darken-3{background-color:#1565c0!important}.blue.darken-4{background-color:#0d47a1!important}.blue.accent-1{background-color:#82b1ff!important}.blue.accent-2{background-color:#448aff!important}.blue.accent-3{background-color:#2979ff!important}.blue.accent-4{background-color:#2962ff!important}.light-blue.lighten-5{background-color:#e1f5fe!important}.light-blue.lighten-4{background-color:#b3e5fc!important}.light-blue.lighten-3{background-color:#81d4fa!important}.light-blue.lighten-2{background-color:#4fc3f7!important}.light-blue.lighten-1{background-color:#29b6f6!important}.light-blue{background-color:#03a9f4!important}.light-blue-text{color:#03a9f4!important}.rgba-light-blue-slight,.rgba-light-blue-slight:after{background-color:rgba(3,169,244,.1)}.rgba-light-blue-light,.rgba-light-blue-light:after{background-color:rgba(3,169,244,.3)}.rgba-light-blue-strong,.rgba-light-blue-strong:after{background-color:rgba(3,169,244,.7)}.light-blue.darken-1{background-color:#039be5!important}.light-blue.darken-2{background-color:#0288d1!important}.light-blue.darken-3{background-color:#0277bd!important}.light-blue.darken-4{background-color:#01579b!important}.light-blue.accent-1{background-color:#80d8ff!important}.light-blue.accent-2{background-color:#40c4ff!important}.light-blue.accent-3{background-color:#00b0ff!important}.light-blue.accent-4{background-color:#0091ea!important}.cyan.lighten-5{background-color:#e0f7fa!important}.cyan.lighten-4{background-color:#b2ebf2!important}.cyan.lighten-3{background-color:#80deea!important}.cyan.lighten-2{background-color:#4dd0e1!important}.cyan.lighten-1{background-color:#26c6da!important}.cyan{background-color:#00bcd4!important}.cyan-text{color:#00bcd4!important}.rgba-cyan-slight,.rgba-cyan-slight:after{background-color:rgba(0,188,212,.1)}.rgba-cyan-light,.rgba-cyan-light:after{background-color:rgba(0,188,212,.3)}.rgba-cyan-strong,.rgba-cyan-strong:after{background-color:rgba(0,188,212,.7)}.cyan.darken-1{background-color:#00acc1!important}.cyan.darken-2{background-color:#0097a7!important}.cyan.darken-3{background-color:#00838f!important}.cyan.darken-4{background-color:#006064!important}.cyan.accent-1{background-color:#84ffff!important}.cyan.accent-2{background-color:#18ffff!important}.cyan.accent-3{background-color:#00e5ff!important}.cyan.accent-4{background-color:#00b8d4!important}.teal.lighten-5{background-color:#e0f2f1!important}.teal.lighten-4{background-color:#b2dfdb!important}.teal.lighten-3{background-color:#80cbc4!important}.teal.lighten-2{background-color:#4db6ac!important}.teal.lighten-1{background-color:#26a69a!important}.teal{background-color:#009688!important}.teal-text{color:#009688!important}.rgba-teal-slight,.rgba-teal-slight:after{background-color:rgba(0,150,136,.1)}.rgba-teal-light,.rgba-teal-light:after{background-color:rgba(0,150,136,.3)}.rgba-teal-strong,.rgba-teal-strong:after{background-color:rgba(0,150,136,.7)}.teal.darken-1{background-color:#00897b!important}.teal.darken-2{background-color:#00796b!important}.teal.darken-3{background-color:#00695c!important}.teal.darken-4{background-color:#004d40!important}.teal.accent-1{background-color:#a7ffeb!important}.teal.accent-2{background-color:#64ffda!important}.teal.accent-3{background-color:#1de9b6!important}.teal.accent-4{background-color:#00bfa5!important}.green.lighten-5{background-color:#e8f5e9!important}.green.lighten-4{background-color:#c8e6c9!important}.green.lighten-3{background-color:#a5d6a7!important}.green.lighten-2{background-color:#81c784!important}.green.lighten-1{background-color:#66bb6a!important}.green{background-color:#4caf50!important}.green-text{color:#4caf50!important}.rgba-green-slight,.rgba-green-slight:after{background-color:rgba(76,175,80,.1)}.rgba-green-light,.rgba-green-light:after{background-color:rgba(76,175,80,.3)}.rgba-green-strong,.rgba-green-strong:after{background-color:rgba(76,175,80,.7)}.green.darken-1{background-color:#43a047!important}.green.darken-2{background-color:#388e3c!important}.green.darken-3{background-color:#2e7d32!important}.green.darken-4{background-color:#1b5e20!important}.green.accent-1{background-color:#b9f6ca!important}.green.accent-2{background-color:#69f0ae!important}.green.accent-3{background-color:#00e676!important}.green.accent-4{background-color:#00c853!important}.light-green.lighten-5{background-color:#f1f8e9!important}.light-green.lighten-4{background-color:#dcedc8!important}.light-green.lighten-3{background-color:#c5e1a5!important}.light-green.lighten-2{background-color:#aed581!important}.light-green.lighten-1{background-color:#9ccc65!important}.light-green{background-color:#8bc34a!important}.light-green-text{color:#8bc34a!important}.rgba-light-green-slight,.rgba-light-green-slight:after{background-color:rgba(139,195,74,.1)}.rgba-light-green-light,.rgba-light-green-light:after{background-color:rgba(139,195,74,.3)}.rgba-light-green-strong,.rgba-light-green-strong:after{background-color:rgba(139,195,74,.7)}.light-green.darken-1{background-color:#7cb342!important}.light-green.darken-2{background-color:#689f38!important}.light-green.darken-3{background-color:#558b2f!important}.light-green.darken-4{background-color:#33691e!important}.light-green.accent-1{background-color:#ccff90!important}.light-green.accent-2{background-color:#b2ff59!important}.light-green.accent-3{background-color:#76ff03!important}.light-green.accent-4{background-color:#64dd17!important}.lime.lighten-5{background-color:#f9fbe7!important}.lime.lighten-4{background-color:#f0f4c3!important}.lime.lighten-3{background-color:#e6ee9c!important}.lime.lighten-2{background-color:#dce775!important}.lime.lighten-1{background-color:#d4e157!important}.lime{background-color:#cddc39!important}.lime-text{color:#cddc39!important}.rgba-lime-slight,.rgba-lime-slight:after{background-color:rgba(205,220,57,.1)}.rgba-lime-light,.rgba-lime-light:after{background-color:rgba(205,220,57,.3)}.rgba-lime-strong,.rgba-lime-strong:after{background-color:rgba(205,220,57,.7)}.lime.darken-1{background-color:#c0ca33!important}.lime.darken-2{background-color:#afb42b!important}.lime.darken-3{background-color:#9e9d24!important}.lime.darken-4{background-color:#827717!important}.lime.accent-1{background-color:#f4ff81!important}.lime.accent-2{background-color:#eeff41!important}.lime.accent-3{background-color:#c6ff00!important}.lime.accent-4{background-color:#aeea00!important}.yellow.lighten-5{background-color:#fffde7!important}.yellow.lighten-4{background-color:#fff9c4!important}.yellow.lighten-3{background-color:#fff59d!important}.yellow.lighten-2{background-color:#fff176!important}.yellow.lighten-1{background-color:#ffee58!important}.yellow{background-color:#ffeb3b!important}.yellow-text{color:#ffeb3b!important}.rgba-yellow-slight,.rgba-yellow-slight:after{background-color:rgba(255,235,59,.1)}.rgba-yellow-light,.rgba-yellow-light:after{background-color:rgba(255,235,59,.3)}.rgba-yellow-strong,.rgba-yellow-strong:after{background-color:rgba(255,235,59,.7)}.yellow.darken-1{background-color:#fdd835!important}.yellow.darken-2{background-color:#fbc02d!important}.yellow.darken-3{background-color:#f9a825!important}.yellow.darken-4{background-color:#f57f17!important}.yellow.accent-1{background-color:#ffff8d!important}.yellow.accent-2{background-color:#ff0!important}.yellow.accent-3{background-color:#ffea00!important}.yellow.accent-4{background-color:#ffd600!important}.amber.lighten-5{background-color:#fff8e1!important}.amber.lighten-4{background-color:#ffecb3!important}.amber.lighten-3{background-color:#ffe082!important}.amber.lighten-2{background-color:#ffd54f!important}.amber.lighten-1{background-color:#ffca28!important}.amber{background-color:#ffc107!important}.amber-text{color:#ffc107!important}.rgba-amber-slight,.rgba-amber-slight:after{background-color:rgba(255,193,7,.1)}.rgba-amber-light,.rgba-amber-light:after{background-color:rgba(255,193,7,.3)}.rgba-amber-strong,.rgba-amber-strong:after{background-color:rgba(255,193,7,.7)}.amber.darken-1{background-color:#ffb300!important}.amber.darken-2{background-color:#ffa000!important}.amber.darken-3{background-color:#ff8f00!important}.amber.darken-4{background-color:#ff6f00!important}.amber.accent-1{background-color:#ffe57f!important}.amber.accent-2{background-color:#ffd740!important}.amber.accent-3{background-color:#ffc400!important}.amber.accent-4{background-color:#ffab00!important}.orange.lighten-5{background-color:#fff3e0!important}.orange.lighten-4{background-color:#ffe0b2!important}.orange.lighten-3{background-color:#ffcc80!important}.orange.lighten-2{background-color:#ffb74d!important}.orange.lighten-1{background-color:#ffa726!important}.orange{background-color:#ff9800!important}.orange-text{color:#ff9800!important}.rgba-orange-slight,.rgba-orange-slight:after{background-color:rgba(255,152,0,.1)}.rgba-orange-light,.rgba-orange-light:after{background-color:rgba(255,152,0,.3)}.rgba-orange-strong,.rgba-orange-strong:after{background-color:rgba(255,152,0,.7)}.orange.darken-1{background-color:#fb8c00!important}.orange.darken-2{background-color:#f57c00!important}.orange.darken-3{background-color:#ef6c00!important}.orange.darken-4{background-color:#e65100!important}.orange.accent-1{background-color:#ffd180!important}.orange.accent-2{background-color:#ffab40!important}.orange.accent-3{background-color:#ff9100!important}.orange.accent-4{background-color:#ff6d00!important}.deep-orange.lighten-5{background-color:#fbe9e7!important}.deep-orange.lighten-4{background-color:#ffccbc!important}.deep-orange.lighten-3{background-color:#ffab91!important}.deep-orange.lighten-2{background-color:#ff8a65!important}.deep-orange.lighten-1{background-color:#ff7043!important}.deep-orange{background-color:#ff5722!important}.deep-orange-text{color:#ff5722!important}.rgba-deep-orange-slight,.rgba-deep-orange-slight:after{background-color:rgba(255,87,34,.1)}.rgba-deep-orange-light,.rgba-deep-orange-light:after{background-color:rgba(255,87,34,.3)}.rgba-deep-orange-strong,.rgba-deep-orange-strong:after{background-color:rgba(255,87,34,.7)}.deep-orange.darken-1{background-color:#f4511e!important}.deep-orange.darken-2{background-color:#e64a19!important}.deep-orange.darken-3{background-color:#d84315!important}.deep-orange.darken-4{background-color:#bf360c!important}.deep-orange.accent-1{background-color:#ff9e80!important}.deep-orange.accent-2{background-color:#ff6e40!important}.deep-orange.accent-3{background-color:#ff3d00!important}.deep-orange.accent-4{background-color:#dd2c00!important}.brown.lighten-5{background-color:#efebe9!important}.brown.lighten-4{background-color:#d7ccc8!important}.brown.lighten-3{background-color:#bcaaa4!important}.brown.lighten-2{background-color:#a1887f!important}.brown.lighten-1{background-color:#8d6e63!important}.brown{background-color:#795548!important}.brown-text{color:#795548!important}.rgba-brown-slight,.rgba-brown-slight:after{background-color:rgba(121,85,72,.1)}.rgba-brown-light,.rgba-brown-light:after{background-color:rgba(121,85,72,.3)}.rgba-brown-strong,.rgba-brown-strong:after{background-color:rgba(121,85,72,.7)}.brown.darken-1{background-color:#6d4c41!important}.brown.darken-2{background-color:#5d4037!important}.brown.darken-3{background-color:#4e342e!important}.brown.darken-4{background-color:#3e2723!important}.blue-grey.lighten-5{background-color:#eceff1!important}.blue-grey.lighten-4{background-color:#cfd8dc!important}.blue-grey.lighten-3{background-color:#b0bec5!important}.blue-grey.lighten-2{background-color:#90a4ae!important}.blue-grey.lighten-1{background-color:#78909c!important}.blue-grey{background-color:#607d8b!important}.blue-grey-text{color:#607d8b!important}.rgba-blue-grey-slight,.rgba-blue-grey-slight:after{background-color:rgba(96,125,139,.1)}.rgba-blue-grey-light,.rgba-blue-grey-light:after{background-color:rgba(96,125,139,.3)}.rgba-blue-grey-strong,.rgba-blue-grey-strong:after{background-color:rgba(96,125,139,.7)}.blue-grey.darken-1{background-color:#546e7a!important}.blue-grey.darken-2{background-color:#455a64!important}.blue-grey.darken-3{background-color:#37474f!important}.blue-grey.darken-4{background-color:#263238!important}.grey.lighten-5{background-color:#fafafa!important}.grey.lighten-4{background-color:#f5f5f5!important}.grey.lighten-3{background-color:#eee!important}.grey.lighten-2{background-color:#e0e0e0!important}.grey.lighten-1{background-color:#bdbdbd!important}.grey{background-color:#9e9e9e!important}.grey-text{color:#9e9e9e!important}.rgba-grey-slight,.rgba-grey-slight:after{background-color:rgba(158,158,158,.1)}.rgba-grey-light,.rgba-grey-light:after{background-color:rgba(158,158,158,.3)}.rgba-grey-strong,.rgba-grey-strong:after{background-color:rgba(158,158,158,.7)}.grey.darken-1{background-color:#757575!important}.grey.darken-2{background-color:#616161!important}.grey.darken-3{background-color:#424242!important}.grey.darken-4{background-color:#212121!important}.black{background-color:#000!important}.black-text{color:#000!important}.rgba-black-slight,.rgba-black-slight:after{background-color:rgba(0,0,0,.1)}.rgba-black-light,.rgba-black-light:after{background-color:rgba(0,0,0,.3)}.rgba-black-strong,.rgba-black-strong:after{background-color:rgba(0,0,0,.7)}.white{background-color:#fff!important}.white-text{color:#fff!important}.rgba-white-slight,.rgba-white-slight:after{background-color:rgba(255,255,255,.1)}.rgba-white-light,.rgba-white-light:after{background-color:rgba(255,255,255,.3)}.rgba-white-strong,.rgba-white-strong:after{background-color:rgba(255,255,255,.7)}.rgba-stylish-slight{background-color:rgba(62,69,81,.1)}.rgba-stylish-light{background-color:rgba(62,69,81,.3)}.rgba-stylish-strong{background-color:rgba(62,69,81,.7)}.primary-color{background-color:#4285f4!important}.primary-color-dark{background-color:#0d47a1!important}.secondary-color{background-color:#a6c!important}.secondary-color-dark{background-color:#93c!important}.default-color{background-color:#2bbbad!important}.default-color-dark{background-color:#00695c!important}.info-color{background-color:#33b5e5!important}.info-color-dark{background-color:#09c!important}.success-color{background-color:#00c851!important}.success-color-dark{background-color:#007e33!important}.warning-color{background-color:#fb3!important}.warning-color-dark{background-color:#f80!important}.danger-color{background-color:#ff3547!important}.danger-color-dark{background-color:#c00!important}.elegant-color{background-color:#2e2e2e!important}.elegant-color-dark{background-color:#212121!important}.stylish-color{background-color:#4b515d!important}.stylish-color-dark{background-color:#3e4551!important}.unique-color{background-color:#3f729b!important}.unique-color-dark{background-color:#1c2331!important}.special-color{background-color:#37474f!important}.special-color-dark{background-color:#263238!important}.purple-gradient{background:linear-gradient(40deg,#ff6ec4,#7873f5)!important}.peach-gradient{background:linear-gradient(40deg,#ffd86f,#fc6262)!important}.aqua-gradient{background:linear-gradient(40deg,#2096ff,#05ffa3)!important}.blue-gradient{background:linear-gradient(40deg,#45cafc,#303f9f)!important}.purple-gradient-rgba{background:linear-gradient(40deg,rgba(255,110,196,.9),rgba(120,115,245,.9))!important}.peach-gradient-rgba{background:linear-gradient(40deg,rgba(255,216,111,.9),rgba(252,98,98,.9))!important}.aqua-gradient-rgba{background:linear-gradient(40deg,rgba(32,150,255,.9),rgba(5,255,163,.9))!important}.blue-gradient-rgba{background:linear-gradient(40deg,rgba(69,202,252,.9),rgba(48,63,159,.9))!important}.dark-grey-text,.dark-grey-text:focus,.dark-grey-text:hover{color:#4f4f4f!important}.hoverable{box-shadow:none;transition:.55s ease-in-out}.hoverable:hover{box-shadow:0 8px 17px 0 rgba(0,0,0,.2),0 6px 20px 0 rgba(0,0,0,.19);transition:.55s ease-in-out}.z-depth-0{box-shadow:none!important}.z-depth-1{box-shadow:0 2px 5px 0 rgba(0,0,0,.16),0 2px 10px 0 rgba(0,0,0,.12)!important}.z-depth-1-half{box-shadow:0 5px 11px 0 rgba(0,0,0,.18),0 4px 15px 0 rgba(0,0,0,.15)!important}.z-depth-2{box-shadow:0 8px 17px 0 rgba(0,0,0,.2),0 6px 20px 0 rgba(0,0,0,.19)!important}.z-depth-3{box-shadow:0 12px 15px 0 rgba(0,0,0,.24),0 17px 50px 0 rgba(0,0,0,.19)!important}.z-depth-4{box-shadow:0 16px 28px 0 rgba(0,0,0,.22),0 25px 55px 0 rgba(0,0,0,.21)!important}.z-depth-5{box-shadow:0 27px 24px 0 rgba(0,0,0,.2),0 40px 77px 0 rgba(0,0,0,.22)!important}.disabled,:disabled{pointer-events:none!important}a{cursor:pointer;text-decoration:none;color:#0275d8;transition:.2s ease-in-out}a:hover{text-decoration:none;color:#014c8c;transition:.2s ease-in-out}a.disabled:hover,a:disabled:hover{color:#0275d8}a:not([href]):not([tabindex]),a:not([href]):not([tabindex]):focus,a:not([href]):not([tabindex]):hover{color:inherit;text-decoration:none}.dropdown-menu .dropdown-item:active{background-color:#757575}.show>.dropdown-menu{display:block}.show>a{outline:0}.various-dropdown{-webkit-transform:translate3d(0,21px,0)!important;transform:translate3d(0,21px,0)!important}.a-various-dropdown{-webkit-transform:translate3d(0,29px,0)!important;transform:translate3d(0,29px,0)!important}.medium-dropdown{-webkit-transform:translate3d(0,36px,0)!important;transform:translate3d(0,36px,0)!important}.small-dropdown{-webkit-transform:translate3d(5px,34px,0)!important;transform:translate3d(5px,34px,0)!important}.large-dropdown{-webkit-transform:translate3d(5px,57px,0)!important;transform:translate3d(5px,57px,0)!important}.btn-group>.dropdown-menu{-webkit-transform:translate3d(0,43px,0);transform:translate3d(0,43px,0)}.dropup>.dropdown-menu{display:none;-webkit-transform:translate3d(117px,0,0)!important;transform:translate3d(117px,0,0)!important;will-change:transform}.dropup.show .dropdown-menu{display:block;opacity:0}.dropup.show .fadeInDropdown{opacity:1}.dropup-material.show .dropdown-menu{transition:.55s}.dropdown-menu{margin-top:5px;will-change:transform;display:none;position:absolute;-webkit-transform:translate3d(6px,49px,0);transform:translate3d(6px,49px,0);top:0;left:0;will-change:transform}.dropdown.show .dropdown-menu{display:block;opacity:0;transition:.55s}.dropdown.show .fadeInDropdown{opacity:1}"]
                    }] }
        ];
        /** @nocollapse */
        BsDropdownDirective.ctorParameters = function () {
            return [
                { type: i0.ElementRef },
                { type: i0.Renderer2 },
                { type: i0.ViewContainerRef },
                { type: ComponentLoaderFactory },
                { type: BsDropdownConfig },
                { type: BsDropdownState },
                { type: i0.ChangeDetectorRef }
            ];
        };
        BsDropdownDirective.propDecorators = {
            placement: [{ type: i0.Input }],
            triggers: [{ type: i0.Input }],
            container: [{ type: i0.Input }],
            dropup: [{ type: i0.Input }],
            dropupDefault: [{ type: i0.Input }],
            isDropup: [{ type: i0.HostBinding, args: ['class.dropup',] }],
            autoClose: [{ type: i0.Input }],
            isDisabled: [{ type: i0.Input }],
            isOpen: [{ type: i0.HostBinding, args: ['class.open',] }, { type: i0.HostBinding, args: ['class.show',] }, { type: i0.Input }],
            isOpenChange: [{ type: i0.Output }],
            onShown: [{ type: i0.Output }],
            shown: [{ type: i0.Output }],
            onHidden: [{ type: i0.Output }],
            hidden: [{ type: i0.Output }]
        };
        return BsDropdownDirective;
    }());

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */
    var BsDropdownMenuDirective = /** @class */ (function () {
        function BsDropdownMenuDirective(_state, _viewContainer, _templateRef) {
            _state.resolveDropdownMenu({
                templateRef: _templateRef,
                viewContainer: _viewContainer
            });
        }
        BsDropdownMenuDirective.decorators = [
            { type: i0.Directive, args: [{
                        selector: '[mdbDropdownMenu],[dropdownMenu]',
                        exportAs: 'bs-dropdown-menu'
                    },] }
        ];
        /** @nocollapse */
        BsDropdownMenuDirective.ctorParameters = function () {
            return [
                { type: BsDropdownState },
                { type: i0.ViewContainerRef },
                { type: i0.TemplateRef }
            ];
        };
        return BsDropdownMenuDirective;
    }());

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */
    var BsDropdownToggleDirective = /** @class */ (function () {
        function BsDropdownToggleDirective(_state, _element) {
            var _this = this;
            this._state = _state;
            this._element = _element;
            this._subscriptions = [];
            this.ariaHaspopup = true;
            this.isDisabled = null;
            // sync is open value with state
            this._subscriptions.push(this._state.isOpenChange.subscribe(( /**
             * @param {?} value
             * @return {?}
             */function (value) { return (_this.isOpen = value); })));
            // populate disabled state
            this._subscriptions.push(this._state.isDisabledChange.subscribe(( /**
             * @param {?} value
             * @return {?}
             */function (value) { return (_this.isDisabled = value || null); })));
        }
        /**
         * @return {?}
         */
        BsDropdownToggleDirective.prototype.onClick = /**
         * @return {?}
         */
            function () {
                if (this.isDisabled) {
                    return;
                }
                this._state.toggleClick.emit();
            };
        /**
         * @param {?} event
         * @return {?}
         */
        BsDropdownToggleDirective.prototype.onDocumentClick = /**
         * @param {?} event
         * @return {?}
         */
            function (event) {
                if (this._state.autoClose &&
                    event.button !== 2 &&
                    !this._element.nativeElement.contains(event.target)) {
                    this._state.toggleClick.emit(false);
                }
            };
        /**
         * @return {?}
         */
        BsDropdownToggleDirective.prototype.onEsc = /**
         * @return {?}
         */
            function () {
                if (this._state.autoClose) {
                    this._state.toggleClick.emit(false);
                }
            };
        /**
         * @return {?}
         */
        BsDropdownToggleDirective.prototype.ngOnDestroy = /**
         * @return {?}
         */
            function () {
                var e_1, _a;
                try {
                    for (var _b = __values(this._subscriptions), _c = _b.next(); !_c.done; _c = _b.next()) {
                        var sub = _c.value;
                        sub.unsubscribe();
                    }
                }
                catch (e_1_1) {
                    e_1 = { error: e_1_1 };
                }
                finally {
                    try {
                        if (_c && !_c.done && (_a = _b.return))
                            _a.call(_b);
                    }
                    finally {
                        if (e_1)
                            throw e_1.error;
                    }
                }
            };
        BsDropdownToggleDirective.decorators = [
            { type: i0.Directive, args: [{
                        selector: '[mdbDropdownToggle],[dropdownToggle]',
                        exportAs: 'bs-dropdown-toggle',
                    },] }
        ];
        /** @nocollapse */
        BsDropdownToggleDirective.ctorParameters = function () {
            return [
                { type: BsDropdownState },
                { type: i0.ElementRef }
            ];
        };
        BsDropdownToggleDirective.propDecorators = {
            ariaHaspopup: [{ type: i0.HostBinding, args: ['attr.aria-haspopup',] }],
            isDisabled: [{ type: i0.HostBinding, args: ['attr.disabled',] }],
            isOpen: [{ type: i0.HostBinding, args: ['attr.aria-expanded',] }],
            onClick: [{ type: i0.HostListener, args: ['click',] }],
            onDocumentClick: [{ type: i0.HostListener, args: ['document:click', ['$event'],] }],
            onEsc: [{ type: i0.HostListener, args: ['keyup.esc',] }]
        };
        return BsDropdownToggleDirective;
    }());

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */
    var DropdownModule = /** @class */ (function () {
        function DropdownModule() {
        }
        /**
         * @param {?=} config
         * @return {?}
         */
        DropdownModule.forRoot = /**
         * @param {?=} config
         * @return {?}
         */
            function (config) {
                return {
                    ngModule: DropdownModule, providers: [
                        ComponentLoaderFactory,
                        PositioningService,
                        BsDropdownState,
                        { provide: BsDropdownConfig, useValue: config ? config : { autoClose: true } }
                    ]
                };
            };
        DropdownModule.decorators = [
            { type: i0.NgModule, args: [{
                        declarations: [
                            BsDropdownMenuDirective,
                            BsDropdownToggleDirective,
                            BsDropdownContainerComponent,
                            BsDropdownDirective
                        ],
                        exports: [
                            BsDropdownMenuDirective,
                            BsDropdownToggleDirective,
                            BsDropdownDirective
                        ],
                        entryComponents: [BsDropdownContainerComponent]
                    },] }
        ];
        return DropdownModule;
    }());

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */
    /*tslint:disable:no-invalid-this */
    /**
     * @return {?}
     */
    function OnChange$1() {
        /** @type {?} */
        var sufix = 'Change';
        return ( /**
         * @param {?} target
         * @param {?} propertyKey
         * @return {?}
         */function OnChangeHandler(target, propertyKey) {
            /** @type {?} */
            var _key = " __" + propertyKey + "Value";
            Object.defineProperty(target, propertyKey, {
                get: /**
                 * @return {?}
                 */ function () { return this[_key]; },
                set: /**
                 * @param {?} value
                 * @return {?}
                 */ function (value) {
                    /** @type {?} */
                    var prevValue = this[_key];
                    this[_key] = value;
                    if (prevValue !== value && this[propertyKey + sufix]) {
                        this[propertyKey + sufix].emit(value);
                    }
                }
            });
        });
    }

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */
    var Utils$1 = /** @class */ (function () {
        function Utils() {
        }
        /**
         * @param {?} element
         * @return {?}
         */
        Utils.reflow = /**
         * @param {?} element
         * @return {?}
         */
            function (element) {
                (( /**
                 * @param {?} bs
                 * @return {?}
                 */function (bs) { return bs; }))(element.offsetHeight);
            };
        // source: https://github.com/jquery/jquery/blob/master/src/css/var/getStyles.js
        // source: https://github.com/jquery/jquery/blob/master/src/css/var/getStyles.js
        /**
         * @param {?} elem
         * @return {?}
         */
        Utils.getStyles =
            // source: https://github.com/jquery/jquery/blob/master/src/css/var/getStyles.js
            /**
             * @param {?} elem
             * @return {?}
             */
            function (elem) {
                // Support: IE <=11 only, Firefox <=30 (#15098, #14150)
                // IE throws on elements created in popups
                // FF meanwhile throws on frame elements through "defaultView.getComputedStyle"
                /** @type {?} */
                var view = elem.ownerDocument.defaultView;
                if (!view || !view.opener) {
                    view = win;
                }
                return view.getComputedStyle(elem);
            };
        /**
         * @param {?} event
         * @param {?} el
         * @return {?}
         */
        Utils.prototype.focusTrapModal = /**
         * @param {?} event
         * @param {?} el
         * @return {?}
         */
            function (event, el) {
                /** @type {?} */
                var focusableElements;
                /** @type {?} */
                var firstFocusableElement;
                /** @type {?} */
                var lastFocusableElement;
                /** @type {?} */
                var KEYCODE_TAB = 9;
                /*tslint:disable-next-line:max-line-length */
                focusableElements = el.nativeElement.querySelectorAll('a[href], button, textarea, input, select, form, mdb-select, mdb-auto-completer, mdb-checkbox, mdb-range-input');
                firstFocusableElement = focusableElements[0];
                lastFocusableElement = focusableElements[focusableElements.length - 1];
                if (event.key === 'Tab' || event.keyCode === KEYCODE_TAB) {
                    if (event.shiftKey) {
                        if (document$1 && document$1.activeElement === firstFocusableElement) {
                            lastFocusableElement.focus();
                            event.preventDefault();
                        }
                    }
                    else {
                        if (document$1 && document$1.activeElement === lastFocusableElement) {
                            firstFocusableElement.focus();
                            event.preventDefault();
                        }
                    }
                }
            };
        /**
         * @param {?} el
         * @param {?} selector
         * @return {?}
         */
        Utils.prototype.getClosestEl = /**
         * @param {?} el
         * @param {?} selector
         * @return {?}
         */
            function (el, selector) {
                for (; el && el !== document$1; el = el.parentNode) {
                    if (el.matches && el.matches(selector)) {
                        return el;
                    }
                }
                return null;
            };
        /**
         * @param {?} elem
         * @return {?}
         */
        Utils.prototype.getCoords = /**
         * @param {?} elem
         * @return {?}
         */
            function (elem) {
                /** @type {?} */
                var box = elem.getBoundingClientRect();
                /** @type {?} */
                var body = document$1.body;
                /** @type {?} */
                var docEl = document$1.documentElement;
                /** @type {?} */
                var scrollTop = win.pageYOffset || docEl.scrollTop || body.scrollTop;
                /** @type {?} */
                var scrollLeft = win.pageXOffset || docEl.scrollLeft || body.scrollLeft;
                /** @type {?} */
                var clientTop = docEl.clientTop || body.clientTop || 0;
                /** @type {?} */
                var clientLeft = docEl.clientLeft || body.clientLeft || 0;
                /** @type {?} */
                var top = box.top + scrollTop - clientTop;
                /** @type {?} */
                var left = box.left + scrollLeft - clientLeft;
                return { top: Math.round(top), left: Math.round(left) };
            };
        return Utils;
    }());

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */
    var MdbIconComponent = /** @class */ (function () {
        function MdbIconComponent(_el, _renderer) {
            this._el = _el;
            this._renderer = _renderer;
            this.fab = false;
            this.far = false;
            this.fal = false;
            this.fas = true;
            this.sizeClass = '';
            this.utils = new Utils$1();
        }
        /**
         * @return {?}
         */
        MdbIconComponent.prototype.ngOnInit = /**
         * @return {?}
         */
            function () {
                var _this = this;
                if (this.size) {
                    this.sizeClass = "fa-" + this.size;
                }
                if (this._el.nativeElement.parentElement.classList.contains('md-form')) {
                    this._renderer.addClass(this._el.nativeElement, 'prefix');
                }
                /** @type {?} */
                var classList = this._el.nativeElement.classList;
                this.fab = classList.contains('fab');
                this.far = classList.contains('far');
                this.fas = classList.contains('fas');
                this.fal = classList.contains('fal');
                /** @type {?} */
                var formWrapper = this.utils.getClosestEl(this._el.nativeElement, '.md-form') ||
                    this.utils.getClosestEl(this._el.nativeElement, '.md-outline');
                if (formWrapper) {
                    formWrapper.childNodes.forEach(( /**
                     * @param {?} el
                     * @return {?}
                     */function (el) {
                        if (el.tagName === 'INPUT') {
                            _this._renderer.listen(el, 'focus', ( /**
                             * @return {?}
                             */function () {
                                _this._renderer.addClass(_this._el.nativeElement, 'active');
                            }));
                            _this._renderer.listen(el, 'blur', ( /**
                             * @return {?}
                             */function () {
                                _this._renderer.removeClass(_this._el.nativeElement, 'active');
                            }));
                        }
                    }));
                }
            };
        MdbIconComponent.decorators = [
            { type: i0.Component, args: [{
                        selector: 'mdb-icon',
                        template: "<i [ngClass]=\"{'fas': fas, 'far': far, 'fab': fab, 'fal': fal}\" class=\"fa-{{icon}} {{class}} {{classInside}} {{sizeClass}}\"></i>\n",
                        changeDetection: i0.ChangeDetectionStrategy.OnPush
                    }] }
        ];
        /** @nocollapse */
        MdbIconComponent.ctorParameters = function () {
            return [
                { type: i0.ElementRef },
                { type: i0.Renderer2 }
            ];
        };
        MdbIconComponent.propDecorators = {
            icon: [{ type: i0.Input }],
            size: [{ type: i0.Input }],
            class: [{ type: i0.Input }],
            classInside: [{ type: i0.Input }]
        };
        return MdbIconComponent;
    }());

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */
    // tslint:disable-next-line:directive-selector
    var FalDirective = /** @class */ (function () {
        function FalDirective(_el, _r) {
            this._el = _el;
            this._r = _r;
            this._r.addClass(this._el.nativeElement, 'fal');
        }
        FalDirective.decorators = [
            { type: i0.Directive, args: [{ selector: '[fal], [light]' },] }
        ];
        /** @nocollapse */
        FalDirective.ctorParameters = function () {
            return [
                { type: i0.ElementRef },
                { type: i0.Renderer2 }
            ];
        };
        return FalDirective;
    }());

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */
    // tslint:disable-next-line:directive-selector
    var FarDirective = /** @class */ (function () {
        function FarDirective(_el, _r) {
            this._el = _el;
            this._r = _r;
            this._r.addClass(this._el.nativeElement, 'far');
        }
        FarDirective.decorators = [
            { type: i0.Directive, args: [{ selector: '[far], [regular]' },] }
        ];
        /** @nocollapse */
        FarDirective.ctorParameters = function () {
            return [
                { type: i0.ElementRef },
                { type: i0.Renderer2 }
            ];
        };
        return FarDirective;
    }());

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */
    // tslint:disable-next-line:directive-selector
    var FasDirective = /** @class */ (function () {
        function FasDirective(_el, _r) {
            this._el = _el;
            this._r = _r;
            this._r.addClass(this._el.nativeElement, 'fas');
        }
        FasDirective.decorators = [
            { type: i0.Directive, args: [{ selector: '[fas], [solid]' },] }
        ];
        /** @nocollapse */
        FasDirective.ctorParameters = function () {
            return [
                { type: i0.ElementRef },
                { type: i0.Renderer2 }
            ];
        };
        return FasDirective;
    }());

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */
    // tslint:disable-next-line:directive-selector
    var FabDirective = /** @class */ (function () {
        function FabDirective(_el, _r) {
            this._el = _el;
            this._r = _r;
            this._r.addClass(this._el.nativeElement, 'fab');
        }
        FabDirective.decorators = [
            { type: i0.Directive, args: [{ selector: '[fab], [brands]' },] }
        ];
        /** @nocollapse */
        FabDirective.ctorParameters = function () {
            return [
                { type: i0.ElementRef },
                { type: i0.Renderer2 }
            ];
        };
        return FabDirective;
    }());

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */
    var IconsModule = /** @class */ (function () {
        function IconsModule() {
        }
        IconsModule.decorators = [
            { type: i0.NgModule, args: [{
                        declarations: [MdbIconComponent, FabDirective, FarDirective, FasDirective, FalDirective],
                        imports: [common.CommonModule],
                        exports: [MdbIconComponent, FabDirective, FarDirective, FasDirective, FalDirective],
                    },] }
        ];
        return IconsModule;
    }());

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */
    /** @type {?} */
    var defaultIdNumber$1 = 0;
    var MdbErrorDirective = /** @class */ (function () {
        function MdbErrorDirective(el, renderer) {
            this.el = el;
            this.renderer = renderer;
            this.id = "mdb-error-" + defaultIdNumber$1++;
            this.errorMsg = true;
            this.messageId = this.id;
            this.utils = new Utils$1();
        }
        /**
         * @private
         * @return {?}
         */
        MdbErrorDirective.prototype._calculateMarginTop = /**
         * @private
         * @return {?}
         */
            function () {
                /** @type {?} */
                var parent = this.el.nativeElement.parentNode.querySelector('.form-check');
                /** @type {?} */
                var heightParent = parent ? parent.offsetHeight : null;
                if (heightParent) {
                    /** @type {?} */
                    var margin = heightParent / 12.5;
                    this.el.nativeElement.style.top = heightParent + heightParent / margin + "px";
                }
            };
        /**
         * @return {?}
         */
        MdbErrorDirective.prototype.ngOnInit = /**
         * @return {?}
         */
            function () {
                var _this = this;
                /** @type {?} */
                var textarea = this.utils.getClosestEl(this.el.nativeElement, '.md-textarea');
                this._calculateMarginTop();
                if (textarea) {
                    /** @type {?} */
                    var height_1 = textarea.offsetHeight + 4 + 'px';
                    this.renderer.setStyle(this.el.nativeElement, 'top', height_1);
                    this.textareaListenFunction = this.renderer.listen(textarea, 'keyup', ( /**
                     * @return {?}
                     */function () {
                        height_1 = textarea.offsetHeight + 4 + 'px';
                        _this.renderer.setStyle(_this.el.nativeElement, 'top', height_1);
                    }));
                }
            };
        /**
         * @return {?}
         */
        MdbErrorDirective.prototype.ngOnDestroy = /**
         * @return {?}
         */
            function () {
                if (this.textareaListenFunction) {
                    this.textareaListenFunction();
                }
            };
        MdbErrorDirective.decorators = [
            { type: i0.Component, args: [{
                        selector: 'mdb-error',
                        template: '<ng-content></ng-content>',
                        encapsulation: i0.ViewEncapsulation.None,
                        styles: [".error-message{position:absolute;top:40px;left:0;font-size:.8rem;color:#f44336}.success-message{position:absolute;top:40px;left:0;font-size:.8rem;color:#00c851}"]
                    }] }
        ];
        /** @nocollapse */
        MdbErrorDirective.ctorParameters = function () {
            return [
                { type: i0.ElementRef },
                { type: i0.Renderer2 }
            ];
        };
        MdbErrorDirective.propDecorators = {
            id: [{ type: i0.Input }],
            errorMsg: [{ type: i0.HostBinding, args: ['class.error-message',] }],
            messageId: [{ type: i0.HostBinding, args: ['attr.id',] }]
        };
        return MdbErrorDirective;
    }());

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */
    /** @type {?} */
    var defaultIdNumber$2 = 0;
    var MdbSuccessDirective = /** @class */ (function () {
        function MdbSuccessDirective(el, renderer) {
            this.el = el;
            this.renderer = renderer;
            this.id = "mdb-success-" + defaultIdNumber$2++;
            this.successMsg = true;
            this.messageId = this.id;
            this.utils = new Utils$1();
        }
        /**
         * @private
         * @return {?}
         */
        MdbSuccessDirective.prototype._calculateMarginTop = /**
         * @private
         * @return {?}
         */
            function () {
                /** @type {?} */
                var parent = this.el.nativeElement.parentNode.querySelector('.form-check');
                /** @type {?} */
                var heightParent = parent ? parent.offsetHeight : null;
                if (heightParent) {
                    /** @type {?} */
                    var margin = heightParent / 12.5;
                    this.el.nativeElement.style.top = heightParent + heightParent / margin + "px";
                }
            };
        /**
         * @return {?}
         */
        MdbSuccessDirective.prototype.ngOnInit = /**
         * @return {?}
         */
            function () {
                var _this = this;
                /** @type {?} */
                var textarea = this.utils.getClosestEl(this.el.nativeElement, '.md-textarea');
                this._calculateMarginTop();
                if (textarea) {
                    /** @type {?} */
                    var height_1 = textarea.offsetHeight + 4 + 'px';
                    this.renderer.setStyle(this.el.nativeElement, 'top', height_1);
                    this.textareaListenFunction = this.renderer.listen(textarea, 'keyup', ( /**
                     * @return {?}
                     */function () {
                        height_1 = textarea.offsetHeight + 4 + 'px';
                        _this.renderer.setStyle(_this.el.nativeElement, 'top', height_1);
                    }));
                }
            };
        /**
         * @return {?}
         */
        MdbSuccessDirective.prototype.ngOnDestroy = /**
         * @return {?}
         */
            function () {
                if (this.textareaListenFunction) {
                    this.textareaListenFunction();
                }
            };
        MdbSuccessDirective.decorators = [
            { type: i0.Component, args: [{
                        selector: 'mdb-success',
                        template: '<ng-content></ng-content>',
                        encapsulation: i0.ViewEncapsulation.None,
                        styles: [".error-message{position:absolute;top:40px;left:0;font-size:.8rem;color:#f44336}.success-message{position:absolute;top:40px;left:0;font-size:.8rem;color:#00c851}"]
                    }] }
        ];
        /** @nocollapse */
        MdbSuccessDirective.ctorParameters = function () {
            return [
                { type: i0.ElementRef },
                { type: i0.Renderer2 }
            ];
        };
        MdbSuccessDirective.propDecorators = {
            id: [{ type: i0.Input }],
            successMsg: [{ type: i0.HostBinding, args: ['class.success-message',] }],
            messageId: [{ type: i0.HostBinding, args: ['attr.id',] }]
        };
        return MdbSuccessDirective;
    }());

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */
    var MdbValidateDirective = /** @class */ (function () {
        function MdbValidateDirective(renderer, el) {
            this.renderer = renderer;
            this.el = el;
            this._validate = true;
            this._validateSuccess = true;
            this._validateError = true;
        }
        Object.defineProperty(MdbValidateDirective.prototype, "validate", {
            get: /**
             * @return {?}
             */ function () {
                return this._validate;
            },
            set: /**
             * @param {?} value
             * @return {?}
             */ function (value) {
                this._validate = value;
                this.updateErrorClass();
                this.updateSuccessClass();
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(MdbValidateDirective.prototype, "validateSuccess", {
            get: /**
             * @return {?}
             */ function () {
                return this._validateSuccess;
            },
            set: /**
             * @param {?} value
             * @return {?}
             */ function (value) {
                this._validateSuccess = value;
                this.updateSuccessClass();
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(MdbValidateDirective.prototype, "validateError", {
            get: /**
             * @return {?}
             */ function () {
                return this._validateError;
            },
            set: /**
             * @param {?} value
             * @return {?}
             */ function (value) {
                this._validateError = value;
                this.updateErrorClass();
                this.updateSuccessClass();
            },
            enumerable: true,
            configurable: true
        });
        /**
         * @return {?}
         */
        MdbValidateDirective.prototype.updateSuccessClass = /**
         * @return {?}
         */
            function () {
                if (this.validate && this.validateSuccess) {
                    this.renderer.addClass(this.el.nativeElement, 'validate-success');
                }
                else {
                    this.renderer.removeClass(this.el.nativeElement, 'validate-success');
                }
            };
        /**
         * @return {?}
         */
        MdbValidateDirective.prototype.updateErrorClass = /**
         * @return {?}
         */
            function () {
                if (this.validate && this.validateError) {
                    this.renderer.addClass(this.el.nativeElement, 'validate-error');
                }
                else {
                    this.renderer.removeClass(this.el.nativeElement, 'validate-error');
                }
            };
        /**
         * @return {?}
         */
        MdbValidateDirective.prototype.ngOnInit = /**
         * @return {?}
         */
            function () {
                this.updateSuccessClass();
                this.updateErrorClass();
            };
        MdbValidateDirective.decorators = [
            { type: i0.Directive, args: [{
                        selector: '[mdbValidate]',
                    },] }
        ];
        /** @nocollapse */
        MdbValidateDirective.ctorParameters = function () {
            return [
                { type: i0.Renderer2 },
                { type: i0.ElementRef }
            ];
        };
        MdbValidateDirective.propDecorators = {
            mdbValidate: [{ type: i0.Input }],
            validate: [{ type: i0.Input }],
            validateSuccess: [{ type: i0.Input }],
            validateError: [{ type: i0.Input }]
        };
        return MdbValidateDirective;
    }());

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */
    var InputUtilitiesModule = /** @class */ (function () {
        function InputUtilitiesModule() {
        }
        InputUtilitiesModule.decorators = [
            { type: i0.NgModule, args: [{
                        imports: [common.CommonModule],
                        declarations: [MdbErrorDirective, MdbSuccessDirective, MdbValidateDirective],
                        exports: [MdbErrorDirective, MdbSuccessDirective, MdbValidateDirective],
                    },] }
        ];
        return InputUtilitiesModule;
    }());

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */
    var EqualValidatorDirective = /** @class */ (function () {
        function EqualValidatorDirective(validateEqual, reverse) {
            this.validateEqual = validateEqual;
            this.reverse = reverse;
        }
        Object.defineProperty(EqualValidatorDirective.prototype, "isReverse", {
            get: /**
             * @private
             * @return {?}
             */ function () {
                if (!this.reverse) {
                    return false;
                }
                return this.reverse === 'true' ? true : false;
            },
            enumerable: true,
            configurable: true
        });
        /**
         * @param {?} c
         * @return {?}
         */
        EqualValidatorDirective.prototype.validate = /**
         * @param {?} c
         * @return {?}
         */
            function (c) {
                // self value (e.g. retype password)
                /** @type {?} */
                var v = c.value;
                // control value (e.g. password)
                /** @type {?} */
                var e = c.root.get(this.validateEqual);
                // value not equal
                if (e && v !== e.value) {
                    return { validateEqual: false };
                }
                // value equal and reverse
                if (e && v === e.value && this.isReverse) {
                    delete e.errors['validateEqual'];
                    if (!Object.keys(e.errors).length) {
                        e.setErrors(null);
                    }
                }
                // value not equal and reverse
                if (e && v !== e.value && this.isReverse) {
                    e.setErrors({
                        validateEqual: false,
                    });
                }
                // return null;
                return null;
            };
        EqualValidatorDirective.decorators = [
            { type: i0.Directive, args: [{
                        selector: '[mdb-validateEqual][formControlName],[validateEqual][formControl],[validateEqual][ngModel]',
                        providers: [
                            { provide: forms.NG_VALIDATORS, useExisting: i0.forwardRef(( /**
                                     * @return {?}
                                     */function () { return EqualValidatorDirective; })), multi: true },
                        ],
                    },] }
        ];
        /** @nocollapse */
        EqualValidatorDirective.ctorParameters = function () {
            return [
                { type: String, decorators: [{ type: i0.Attribute, args: ['validateEqual',] }] },
                { type: String, decorators: [{ type: i0.Attribute, args: ['reverse',] }] }
            ];
        };
        return EqualValidatorDirective;
    }());

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */
    var MdbInputDirective = /** @class */ (function () {
        function MdbInputDirective(_elRef, _renderer, platformId) {
            this._elRef = _elRef;
            this._renderer = _renderer;
            this.el = null;
            this.elLabel = null;
            this.elIcon = null;
            this.element = null;
            this.mdbValidate = true;
            this.validateSuccess = true;
            this.validateError = true;
            this.focusCheckbox = true;
            this.focusRadio = true;
            this.isBrowser = false;
            this.isClicked = false;
            this.isBrowser = common.isPlatformBrowser(platformId);
        }
        /**
         * @return {?}
         */
        MdbInputDirective.prototype.onfocus = /**
         * @return {?}
         */
            function () {
                try {
                    this._renderer.addClass(this.elLabel, 'active');
                    this.isClicked = true;
                }
                catch (error) { }
            };
        /**
         * @return {?}
         */
        MdbInputDirective.prototype.onblur = /**
         * @return {?}
         */
            function () {
                this.validationFunction();
                try {
                    if (this.el.nativeElement.value === '') {
                        this._renderer.removeClass(this.elLabel, 'active');
                    }
                    this.isClicked = false;
                }
                catch (error) { }
            };
        /**
         * @return {?}
         */
        MdbInputDirective.prototype.onchange = /**
         * @return {?}
         */
            function () {
                try {
                    this.checkValue();
                }
                catch (error) { }
            };
        /**
         * @return {?}
         */
        MdbInputDirective.prototype.oniput = /**
         * @return {?}
         */
            function () {
                this.validationFunction();
            };
        /**
         * @param {?} event
         * @return {?}
         */
        MdbInputDirective.prototype.onkeydown = /**
         * @param {?} event
         * @return {?}
         */
            function (event) {
                try {
                    if (event.target.type === 'number') {
                        if (event.shiftKey) {
                            switch (event.keyCode) {
                                case UP_ARROW:
                                    event.target.value = +event.target.value + 10;
                                    break;
                                case DOWN_ARROW:
                                    event.target.value = +event.target.value - 10;
                                    break;
                            }
                        }
                        if (event.altKey) {
                            switch (event.keyCode) {
                                case UP_ARROW:
                                    event.target.value = +event.target.value + 0.1;
                                    break;
                                case DOWN_ARROW:
                                    event.target.value = +event.target.value - 0.1;
                                    break;
                            }
                        }
                    }
                }
                catch (error) { }
                this.delayedResize();
            };
        /**
         * @return {?}
         */
        MdbInputDirective.prototype.oncut = /**
         * @return {?}
         */
            function () {
                var _this = this;
                try {
                    setTimeout(( /**
                     * @return {?}
                     */function () {
                        _this.delayedResize();
                    }), 0);
                }
                catch (error) { }
            };
        /**
         * @return {?}
         */
        MdbInputDirective.prototype.onpaste = /**
         * @return {?}
         */
            function () {
                var _this = this;
                try {
                    setTimeout(( /**
                     * @return {?}
                     */function () {
                        _this.delayedResize();
                    }), 0);
                }
                catch (error) { }
            };
        /**
         * @return {?}
         */
        MdbInputDirective.prototype.ondrop = /**
         * @return {?}
         */
            function () {
                var _this = this;
                try {
                    setTimeout(( /**
                     * @return {?}
                     */function () {
                        _this.delayedResize();
                    }), 0);
                }
                catch (error) { }
            };
        /**
         * @param {?} value
         * @return {?}
         */
        MdbInputDirective.prototype.updateErrorMsg = /**
         * @param {?} value
         * @return {?}
         */
            function (value) {
                if (this.wrongTextContainer) {
                    this.wrongTextContainer.innerHTML = value;
                }
            };
        /**
         * @param {?} value
         * @return {?}
         */
        MdbInputDirective.prototype.updateSuccessMsg = /**
         * @param {?} value
         * @return {?}
         */
            function (value) {
                if (this.rightTextContainer) {
                    this.rightTextContainer.innerHTML = value;
                }
            };
        /**
         * @return {?}
         */
        MdbInputDirective.prototype.ngOnInit = /**
         * @return {?}
         */
            function () {
                var _this = this;
                try {
                    setTimeout(( /**
                     * @return {?}
                     */function () {
                        _this.delayedResize();
                    }), 0);
                }
                catch (error) {
                    console.log(error);
                }
                // Inititalise a new <span> wrong/right elements and render it below the host component.
                if (this.mdbValidate) {
                    this.wrongTextContainer = this._renderer.createElement('span');
                    this._renderer.addClass(this.wrongTextContainer, 'inputVal');
                    this._renderer.addClass(this.wrongTextContainer, 'text-danger');
                    this._renderer.appendChild(this._elRef.nativeElement.parentElement, this.wrongTextContainer);
                    /** @type {?} */
                    var textWrong = this._elRef.nativeElement.getAttribute('data-error');
                    this.wrongTextContainer.innerHTML = textWrong ? textWrong : 'wrong';
                    if (!textWrong && this.errorMessage !== undefined) {
                        this.wrongTextContainer.innerHTML = this.errorMessage;
                    }
                    this._renderer.setStyle(this.wrongTextContainer, 'visibility', 'hidden');
                    this.rightTextContainer = this._renderer.createElement('span');
                    this._renderer.addClass(this.rightTextContainer, 'inputVal');
                    this._renderer.addClass(this.rightTextContainer, 'text-success');
                    this._renderer.appendChild(this._elRef.nativeElement.parentElement, this.rightTextContainer);
                    /** @type {?} */
                    var textSuccess = this._elRef.nativeElement.getAttribute('data-success');
                    this.rightTextContainer.innerHTML = textSuccess ? textSuccess : 'success';
                    if (!textSuccess && this.successMessage !== undefined) {
                        this.rightTextContainer.innerHTML = this.successMessage;
                    }
                    this._renderer.setStyle(this.rightTextContainer, 'visibility', 'hidden');
                }
            };
        /**
         * @param {?} changes
         * @return {?}
         */
        MdbInputDirective.prototype.ngOnChanges = /**
         * @param {?} changes
         * @return {?}
         */
            function (changes) {
                if (changes.hasOwnProperty('errorMessage')) {
                    /** @type {?} */
                    var newErrorMsg = changes.errorMessage.currentValue;
                    this.updateErrorMsg(newErrorMsg);
                }
                if (changes.hasOwnProperty('successMessage')) {
                    /** @type {?} */
                    var newSuccessMsg = changes.successMessage.currentValue;
                    this.updateSuccessMsg(newSuccessMsg);
                }
            };
        /**
         * @return {?}
         */
        MdbInputDirective.prototype.ngDoCheck = /**
         * @return {?}
         */
            function () {
                if (this.mdbValidate &&
                    this._elRef.nativeElement.classList.contains('ng-valid') &&
                    this._elRef.nativeElement.classList.contains('ng-dirty') &&
                    !this._elRef.nativeElement.classList.contains('counter-success')) {
                    this._renderer.addClass(this._elRef.nativeElement, 'counter-success');
                    this._renderer.setStyle(this.wrongTextContainer, 'visibility', 'hidden');
                    this._renderer.setStyle(this.rightTextContainer, 'visibility', 'visible');
                    this._renderer.setStyle(this.rightTextContainer, 'top', this._elRef.nativeElement.offsetHeight + 'px');
                    this._renderer.setStyle(this.wrongTextContainer, 'top', this._elRef.nativeElement.offsetHeight + 'px');
                }
                if (this.mdbValidate &&
                    this._elRef.nativeElement.classList.contains('ng-invalid') &&
                    this._elRef.nativeElement.classList.contains('ng-dirty') &&
                    !this._elRef.nativeElement.classList.contains('counter-danger')) {
                    this._renderer.addClass(this._elRef.nativeElement, 'counter-danger');
                    this._renderer.setStyle(this.rightTextContainer, 'visibility', 'hidden');
                    this._renderer.setStyle(this.wrongTextContainer, 'visibility', 'visible');
                    this._renderer.setStyle(this.rightTextContainer, 'top', this._elRef.nativeElement.offsetHeight + 'px');
                    this._renderer.setStyle(this.wrongTextContainer, 'top', this._elRef.nativeElement.offsetHeight + 'px');
                }
                if ((this._elRef.nativeElement.classList.contains('ng-invalid') &&
                    this._elRef.nativeElement.classList.contains('ng-pristine') &&
                    this._elRef.nativeElement.classList.contains('ng-untouched')) ||
                    this._elRef.nativeElement.disabled) {
                    if (this._elRef.nativeElement.classList.contains('counter-success')) {
                        this._renderer.removeClass(this._elRef.nativeElement, 'counter-success');
                        this._renderer.setStyle(this.rightTextContainer, 'visibility', 'hidden');
                    }
                    else if (this._elRef.nativeElement.classList.contains('counter-danger')) {
                        this._renderer.removeClass(this._elRef.nativeElement, 'counter-danger');
                        this._renderer.setStyle(this.wrongTextContainer, 'visibility', 'hidden');
                    }
                }
                if (!this.validateSuccess) {
                    this._renderer.removeClass(this._elRef.nativeElement, 'counter-success');
                    this._renderer.setStyle(this.rightTextContainer, 'display', 'none');
                    if (this._elRef.nativeElement.classList.contains('ng-valid')) {
                        this._renderer.removeClass(this._elRef.nativeElement, 'counter-danger');
                    }
                }
                if (!this.validateError) {
                    this._renderer.removeClass(this._elRef.nativeElement, 'counter-danger');
                    this._renderer.setStyle(this.wrongTextContainer, 'display', 'none');
                    if (this._elRef.nativeElement.classList.contains('ng-invalid')) {
                        this._renderer.removeClass(this._elRef.nativeElement, 'counter-success');
                    }
                }
            };
        /**
         * @return {?}
         */
        MdbInputDirective.prototype.validationFunction = /**
         * @return {?}
         */
            function () {
                var _this = this;
                setTimeout(( /**
                 * @return {?}
                 */function () {
                    if (_this._elRef.nativeElement.classList.contains('ng-invalid')) {
                        _this._renderer.removeClass(_this._elRef.nativeElement, 'counter-success');
                        _this._renderer.removeClass(_this._elRef.nativeElement, 'counter-danger');
                    }
                    if (_this._elRef.nativeElement.classList.contains('ng-touched') &&
                        _this._elRef.nativeElement.classList.contains('ng-invalid')) {
                        if (_this.mdbValidate) {
                            _this._renderer.addClass(_this._elRef.nativeElement, 'counter-danger');
                            _this._renderer.setStyle(_this.rightTextContainer, 'visibility', 'hidden');
                            _this._renderer.setStyle(_this.wrongTextContainer, 'visibility', 'visible');
                            _this._renderer.setStyle(_this.rightTextContainer, 'top', _this._elRef.nativeElement.offsetHeight + 'px');
                            _this._renderer.setStyle(_this.wrongTextContainer, 'top', _this._elRef.nativeElement.offsetHeight + 'px');
                        }
                    }
                    else if (_this._elRef.nativeElement.classList.contains('ng-touched') &&
                        _this._elRef.nativeElement.classList.contains('ng-valid')) {
                        if (_this.mdbValidate) {
                            _this._renderer.addClass(_this._elRef.nativeElement, 'counter-success');
                            _this._renderer.setStyle(_this.rightTextContainer, 'visibility', 'visible');
                            _this._renderer.setStyle(_this.wrongTextContainer, 'visibility', 'hidden');
                            _this._renderer.setStyle(_this.rightTextContainer, 'top', _this._elRef.nativeElement.offsetHeight + 'px');
                            _this._renderer.setStyle(_this.wrongTextContainer, 'top', _this._elRef.nativeElement.offsetHeight + 'px');
                        }
                    }
                }), 0);
            };
        /**
         * @return {?}
         */
        MdbInputDirective.prototype.ngAfterViewInit = /**
         * @return {?}
         */
            function () {
                if (this.isBrowser) {
                    try {
                        this.element = document.querySelector('.md-textarea-auto');
                    }
                    catch (error) { }
                }
                /** @type {?} */
                var type = this.el.nativeElement.type;
                if (this.focusCheckbox && type === 'checkbox') {
                    this._renderer.addClass(this.el.nativeElement, 'onFocusSelect');
                }
                if (this.focusRadio && type === 'radio') {
                    this._renderer.addClass(this.el.nativeElement, 'onFocusSelect');
                }
            };
        /**
         * @return {?}
         */
        MdbInputDirective.prototype.ngAfterViewChecked = /**
         * @return {?}
         */
            function () {
                this.initComponent();
                this.checkValue();
            };
        /**
         * @return {?}
         */
        MdbInputDirective.prototype.resize = /**
         * @return {?}
         */
            function () {
                if (this.el.nativeElement.classList.contains('md-textarea-auto')) {
                    this._renderer.setStyle(this.el.nativeElement, 'height', 'auto');
                    this._renderer.setStyle(this.el.nativeElement, 'height', this.el.nativeElement.scrollHeight + 'px');
                }
            };
        /**
         * @return {?}
         */
        MdbInputDirective.prototype.delayedResize = /**
         * @return {?}
         */
            function () {
                var _this = this;
                setTimeout(( /**
                 * @return {?}
                 */function () {
                    _this.resize();
                }), 0);
            };
        /**
         * @return {?}
         */
        MdbInputDirective.prototype.initComponent = /**
         * @return {?}
         */
            function () {
                /** @type {?} */
                var inputId;
                /** @type {?} */
                var inputP;
                if (this.isBrowser) {
                    try {
                        inputId = this.el.nativeElement.id;
                    }
                    catch (err) { }
                    try {
                        inputP = this.el.nativeElement.parentNode;
                    }
                    catch (err) { }
                    this.elLabel =
                        inputP.querySelector('label[for="' + inputId + '"]') || inputP.querySelector('label');
                    if (this.elLabel && this.el.nativeElement.value !== '') {
                        this._renderer.addClass(this.elLabel, 'active');
                    }
                    this.elIcon = inputP.querySelector('i') || false;
                    if (this.elIcon) {
                        this._renderer.addClass(this.elIcon, 'active');
                    }
                }
            };
        /**
         * @private
         * @return {?}
         */
        MdbInputDirective.prototype.checkValue = /**
         * @private
         * @return {?}
         */
            function () {
                /** @type {?} */
                var value = '';
                if (this.elLabel != null) {
                    value = this.el.nativeElement.value || '';
                    if (value === '') {
                        this._renderer.removeClass(this.elLabel, 'active');
                        if (this.elIcon) {
                            this._renderer.removeClass(this.elIcon, 'active');
                        }
                        // tslint:disable-next-line:max-line-length
                    }
                    if ((value === '' && this.isClicked) ||
                        (value === '' && this.el.nativeElement.placeholder) ||
                        (value === '' && this.el.nativeElement.attributes.placeholder)) {
                        this._renderer.addClass(this.elLabel, 'active');
                    }
                }
            };
        MdbInputDirective.decorators = [
            { type: i0.Directive, args: [{
                        selector: '[mdbInputDirective]',
                    },] }
        ];
        /** @nocollapse */
        MdbInputDirective.ctorParameters = function () {
            return [
                { type: i0.ElementRef },
                { type: i0.Renderer2 },
                { type: String, decorators: [{ type: i0.Inject, args: [i0.PLATFORM_ID,] }] }
            ];
        };
        MdbInputDirective.propDecorators = {
            mdbInputDirective: [{ type: i0.Input }],
            customRegex: [{ type: i0.Input }],
            mdbValidate: [{ type: i0.Input }],
            validateSuccess: [{ type: i0.Input }],
            validateError: [{ type: i0.Input }],
            focusCheckbox: [{ type: i0.Input }],
            focusRadio: [{ type: i0.Input }],
            errorMessage: [{ type: i0.Input }],
            successMessage: [{ type: i0.Input }],
            onfocus: [{ type: i0.HostListener, args: ['focus',] }],
            onblur: [{ type: i0.HostListener, args: ['blur',] }],
            onchange: [{ type: i0.HostListener, args: ['change',] }],
            oniput: [{ type: i0.HostListener, args: ['input',] }],
            onkeydown: [{ type: i0.HostListener, args: ['keydown', ['$event'],] }],
            oncut: [{ type: i0.HostListener, args: ['cut',] }],
            onpaste: [{ type: i0.HostListener, args: ['paste',] }],
            ondrop: [{ type: i0.HostListener, args: ['drop',] }]
        };
        return MdbInputDirective;
    }());

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */
    var MdbInput = /** @class */ (function () {
        function MdbInput(el, _renderer, platformId) {
            this.el = el;
            this._renderer = _renderer;
            this.elLabel = null;
            this.elIcon = null;
            this.focusCheckbox = true;
            this.focusRadio = true;
            this.isBrowser = false;
            this.isClicked = false;
            this.element = null;
            this.isBrowser = common.isPlatformBrowser(platformId);
        }
        /**
         * @return {?}
         */
        MdbInput.prototype.onfocus = /**
         * @return {?}
         */
            function () {
                try {
                    this._renderer.addClass(this.elLabel, 'active');
                    this.isClicked = true;
                }
                catch (error) { }
            };
        /**
         * @return {?}
         */
        MdbInput.prototype.onblur = /**
         * @return {?}
         */
            function () {
                try {
                    if (this.el.nativeElement.value === '') {
                        this._renderer.removeClass(this.elLabel, 'active');
                    }
                    this.isClicked = false;
                }
                catch (error) { }
            };
        /**
         * @return {?}
         */
        MdbInput.prototype.onchange = /**
         * @return {?}
         */
            function () {
                try {
                    this.checkValue();
                }
                catch (error) { }
            };
        /**
         * @param {?} event
         * @return {?}
         */
        MdbInput.prototype.onkeydown = /**
         * @param {?} event
         * @return {?}
         */
            function (event) {
                try {
                    if (event.target.type === 'number') {
                        if (event.shiftKey) {
                            switch (event.keyCode) {
                                case UP_ARROW:
                                    event.target.value = +event.target.value + 10;
                                    break;
                                case DOWN_ARROW:
                                    event.target.value = +event.target.value - 10;
                                    break;
                            }
                        }
                        if (event.altKey) {
                            switch (event.keyCode) {
                                case UP_ARROW:
                                    event.target.value = +event.target.value + 0.1;
                                    break;
                                case DOWN_ARROW:
                                    event.target.value = +event.target.value - 0.1;
                                    break;
                            }
                        }
                    }
                }
                catch (error) { }
                this.delayedResize();
            };
        /**
         * @return {?}
         */
        MdbInput.prototype.oncut = /**
         * @return {?}
         */
            function () {
                var _this = this;
                try {
                    setTimeout(( /**
                     * @return {?}
                     */function () {
                        _this.delayedResize();
                    }), 0);
                }
                catch (error) { }
            };
        /**
         * @return {?}
         */
        MdbInput.prototype.onpaste = /**
         * @return {?}
         */
            function () {
                var _this = this;
                try {
                    setTimeout(( /**
                     * @return {?}
                     */function () {
                        _this.delayedResize();
                    }), 0);
                }
                catch (error) { }
            };
        /**
         * @return {?}
         */
        MdbInput.prototype.ondrop = /**
         * @return {?}
         */
            function () {
                var _this = this;
                try {
                    setTimeout(( /**
                     * @return {?}
                     */function () {
                        _this.delayedResize();
                    }), 0);
                }
                catch (error) { }
            };
        /**
         * @return {?}
         */
        MdbInput.prototype.ngAfterViewInit = /**
         * @return {?}
         */
            function () {
                if (this.isBrowser) {
                    try {
                        this.element = document.querySelector('.md-textarea-auto');
                    }
                    catch (error) { }
                }
                /** @type {?} */
                var type = this.el.nativeElement.type;
                if (this.focusCheckbox && type === 'checkbox') {
                    this._renderer.addClass(this.el.nativeElement, 'onFocusSelect');
                }
                if (this.focusRadio && type === 'radio') {
                    this._renderer.addClass(this.el.nativeElement, 'onFocusSelect');
                }
            };
        /**
         * @return {?}
         */
        MdbInput.prototype.ngAfterViewChecked = /**
         * @return {?}
         */
            function () {
                this.initComponent();
                this.checkValue();
            };
        /**
         * @return {?}
         */
        MdbInput.prototype.resize = /**
         * @return {?}
         */
            function () {
                if (this.el.nativeElement.classList.contains('md-textarea-auto')) {
                    this._renderer.setStyle(this.el.nativeElement, 'height', 'auto');
                    this._renderer.setStyle(this.el.nativeElement, 'height', this.el.nativeElement.scrollHeight + 'px');
                }
            };
        /**
         * @return {?}
         */
        MdbInput.prototype.delayedResize = /**
         * @return {?}
         */
            function () {
                var _this = this;
                setTimeout(( /**
                 * @return {?}
                 */function () {
                    _this.resize();
                }), 0);
            };
        /**
         * @return {?}
         */
        MdbInput.prototype.initComponent = /**
         * @return {?}
         */
            function () {
                /** @type {?} */
                var inputId;
                /** @type {?} */
                var inputP;
                if (this.isBrowser) {
                    try {
                        inputId = this.el.nativeElement.id;
                    }
                    catch (err) { }
                    try {
                        inputP = this.el.nativeElement.parentNode;
                    }
                    catch (err) { }
                    this.elLabel =
                        inputP.querySelector('label[for="' + inputId + '"]') || inputP.querySelector('label');
                    if (this.elLabel && this.el.nativeElement.value !== '') {
                        this._renderer.addClass(this.elLabel, 'active');
                    }
                    this.elIcon = inputP.querySelector('i') || false;
                    if (this.elIcon) {
                        this._renderer.addClass(this.elIcon, 'active');
                    }
                }
            };
        /**
         * @private
         * @return {?}
         */
        MdbInput.prototype.checkValue = /**
         * @private
         * @return {?}
         */
            function () {
                /** @type {?} */
                var value = '';
                if (this.elLabel != null) {
                    value = this.el.nativeElement.value || '';
                    if (value === '') {
                        this._renderer.removeClass(this.elLabel, 'active');
                        if (this.elIcon) {
                            this._renderer.removeClass(this.elIcon, 'active');
                        }
                    }
                    if ((value === '' && this.isClicked) ||
                        (value === '' && this.el.nativeElement.placeholder) ||
                        (value === '' && this.el.nativeElement.attributes.placeholder)) {
                        this._renderer.addClass(this.elLabel, 'active');
                    }
                }
            };
        MdbInput.decorators = [
            { type: i0.Directive, args: [{
                        selector: '[mdbInput]',
                    },] }
        ];
        /** @nocollapse */
        MdbInput.ctorParameters = function () {
            return [
                { type: i0.ElementRef },
                { type: i0.Renderer2 },
                { type: String, decorators: [{ type: i0.Inject, args: [i0.PLATFORM_ID,] }] }
            ];
        };
        MdbInput.propDecorators = {
            focusCheckbox: [{ type: i0.Input }],
            focusRadio: [{ type: i0.Input }],
            onfocus: [{ type: i0.HostListener, args: ['focus',] }],
            onblur: [{ type: i0.HostListener, args: ['blur',] }],
            onchange: [{ type: i0.HostListener, args: ['change',] }],
            onkeydown: [{ type: i0.HostListener, args: ['keydown', ['$event'],] }],
            oncut: [{ type: i0.HostListener, args: ['cut',] }],
            onpaste: [{ type: i0.HostListener, args: ['paste',] }],
            ondrop: [{ type: i0.HostListener, args: ['drop',] }]
        };
        return MdbInput;
    }());

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */
    var InputsModule = /** @class */ (function () {
        function InputsModule() {
        }
        /**
         * @return {?}
         */
        InputsModule.forRoot = /**
         * @return {?}
         */
            function () {
                return { ngModule: InputsModule, providers: [] };
            };
        InputsModule.decorators = [
            { type: i0.NgModule, args: [{
                        declarations: [MdbInput, MdbInputDirective, EqualValidatorDirective],
                        exports: [MdbInput, MdbInputDirective, EqualValidatorDirective],
                        schemas: [i0.NO_ERRORS_SCHEMA],
                    },] }
        ];
        return InputsModule;
    }());

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */
    var ModalOptions = /** @class */ (function () {
        function ModalOptions() {
        }
        ModalOptions.decorators = [
            { type: i0.Injectable }
        ];
        return ModalOptions;
    }());
    var MDBModalRef = /** @class */ (function () {
        function MDBModalRef() {
        }
        /**
         * Hides the modal
         */
        /**
         * Hides the modal
         * @return {?}
         */
        MDBModalRef.prototype.hide = /**
         * Hides the modal
         * @return {?}
         */
            function () { };
        MDBModalRef.decorators = [
            { type: i0.Injectable }
        ];
        return MDBModalRef;
    }());
    var ɵ0 = {};
    /** @type {?} */
    var modalConfigDefaults = {
        backdrop: true,
        keyboard: true,
        focus: true,
        show: false,
        ignoreBackdropClick: false,
        class: '',
        containerClass: '',
        animated: true,
        scroll: false,
        data: ɵ0,
    };
    /** @type {?} */
    var ClassName = {
        SCROLLBAR_MEASURER: 'modal-scrollbar-measure',
        BACKDROP: 'modal-backdrop',
        OPEN: 'modal-open',
        FADE: 'fade',
        IN: 'in',
        // bs3
        SHOW: 'show',
    };
    /** @type {?} */
    var TransitionDurations = {
        MODAL: 300,
        BACKDROP: 150,
    };
    /** @type {?} */
    var DISMISS_REASONS = {
        BACKRDOP: 'backdrop-click',
        ESC: 'esc',
    };

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */
    var ModalBackdropOptions = /** @class */ (function () {
        function ModalBackdropOptions(options) {
            this.animate = true;
            Object.assign(this, options);
        }
        return ModalBackdropOptions;
    }());
    /**
     * This component will be added as background layout for modals if enabled
     */
    var ModalBackdropComponent = /** @class */ (function () {
        function ModalBackdropComponent(element, renderer) {
            this.element = element;
            this.renderer = renderer;
            this.classNameBackDrop = true;
            this._isShown = false;
        }
        Object.defineProperty(ModalBackdropComponent.prototype, "isAnimated", {
            get: /**
             * @return {?}
             */ function () {
                return this._isAnimated;
            },
            set: /**
             * @param {?} value
             * @return {?}
             */ function (value) {
                this._isAnimated = value;
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(ModalBackdropComponent.prototype, "isShown", {
            get: /**
             * @return {?}
             */ function () {
                return this._isShown;
            },
            set: /**
             * @param {?} value
             * @return {?}
             */ function (value) {
                this._isShown = value;
                if (value) {
                    this.renderer.addClass(this.element.nativeElement, "" + ClassName.IN);
                    if (!isBs3()) {
                        this.renderer.addClass(this.element.nativeElement, "" + ClassName.SHOW);
                    }
                }
                else {
                    this.renderer.removeClass(this.element.nativeElement, "" + ClassName.IN);
                    if (!isBs3()) {
                        this.renderer.removeClass(this.element.nativeElement, "" + ClassName.SHOW);
                    }
                }
            },
            enumerable: true,
            configurable: true
        });
        /**
         * @return {?}
         */
        ModalBackdropComponent.prototype.ngOnInit = /**
         * @return {?}
         */
            function () {
                if (this.isAnimated) {
                    this.renderer.addClass(this.element.nativeElement, "" + ClassName.FADE);
                    Utils$1.reflow(this.element.nativeElement);
                }
                else {
                    this.renderer.addClass(this.element.nativeElement, "" + ClassName.FADE);
                    Utils$1.reflow(this.element.nativeElement);
                }
                this.isShown = true;
            };
        ModalBackdropComponent.decorators = [
            { type: i0.Component, args: [{
                        selector: 'mdb-modal-backdrop',
                        template: ""
                    }] }
        ];
        /** @nocollapse */
        ModalBackdropComponent.ctorParameters = function () {
            return [
                { type: i0.ElementRef },
                { type: i0.Renderer2 }
            ];
        };
        ModalBackdropComponent.propDecorators = {
            classNameBackDrop: [{ type: i0.HostBinding, args: ['class.modal-backdrop',] }]
        };
        return ModalBackdropComponent;
    }());

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */
    /** @type {?} */
    var TRANSITION_DURATION = 300;
    /** @type {?} */
    var BACKDROP_TRANSITION_DURATION = 150;
    /**
     * Mark any code with directive to show it's content in modal
     */
    var ModalDirective = /** @class */ (function () {
        function ModalDirective(_element, _viewContainerRef, _renderer, clf) {
            this._element = _element;
            this._renderer = _renderer;
            /**
             * This event fires immediately when the `show` instance method is called.
             */
            // tslint:disable-next-line:no-output-on-prefix
            this.onShow = new i0.EventEmitter();
            this.open = new i0.EventEmitter();
            /**
             * This event is fired when the modal has been made visible to the user (will wait for CSS transitions to complete)
             */
            // tslint:disable-next-line:no-output-on-prefix
            this.onShown = new i0.EventEmitter();
            this.opened = new i0.EventEmitter();
            /**
             * This event is fired immediately when the hide instance method has been called.
             */
            // tslint:disable-next-line:no-output-on-prefix
            this.onHide = new i0.EventEmitter();
            this.close = new i0.EventEmitter();
            /**
             * This event is fired when the modal has finished being hidden from the user (will wait for CSS transitions to complete).
             */
            // tslint:disable-next-line:no-output-on-prefix
            this.onHidden = new i0.EventEmitter();
            this.closed = new i0.EventEmitter();
            // seems like an Options
            this.isAnimated = true;
            this._isShown = false;
            this.isBodyOverflowing = false;
            this.originalBodyPadding = 0;
            this.scrollbarWidth = 0;
            this.timerHideModal = 0;
            this.timerRmBackDrop = 0;
            this.isNested = false;
            this.utils = new Utils$1();
            this._backdrop = clf.createLoader(_element, _viewContainerRef, _renderer);
        }
        Object.defineProperty(ModalDirective.prototype, "config", {
            get: /**
             * @return {?}
             */ function () {
                return this._config;
            },
            /** allows to set modal configuration via element property */
            set: /**
             * allows to set modal configuration via element property
             * @param {?} conf
             * @return {?}
             */ function (conf) {
                this._config = this.getConfig(conf);
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(ModalDirective.prototype, "isShown", {
            get: /**
             * @return {?}
             */ function () {
                return this._isShown;
            },
            enumerable: true,
            configurable: true
        });
        /**
         * @param {?} event
         * @return {?}
         */
        ModalDirective.prototype.onKeyDown = /**
         * @param {?} event
         * @return {?}
         */
            function (event) {
                this.utils.focusTrapModal(event, this._element);
            };
        /**
         * @param {?} event
         * @return {?}
         */
        ModalDirective.prototype.onClick = /**
         * @param {?} event
         * @return {?}
         */
            function (event) {
                if (this.config.ignoreBackdropClick ||
                    this.config.backdrop === 'static' ||
                    event.target !== this._element.nativeElement) {
                    return;
                }
                this.dismissReason = DISMISS_REASONS.BACKRDOP;
                this.hide(event);
            };
        // todo: consider preventing default and stopping propagation
        // todo: consider preventing default and stopping propagation
        /**
         * @return {?}
         */
        ModalDirective.prototype.onEsc =
            // todo: consider preventing default and stopping propagation
            /**
             * @return {?}
             */
            function () {
                if (this.config.keyboard) {
                    this.dismissReason = DISMISS_REASONS.ESC;
                    this.hide();
                }
            };
        /**
         * @return {?}
         */
        ModalDirective.prototype.ngOnDestroy = /**
         * @return {?}
         */
            function () {
                this.config = void 0;
                if (this._isShown) {
                    this._isShown = false;
                    this.hideModal();
                    this._backdrop.dispose();
                }
            };
        /**
         * @return {?}
         */
        ModalDirective.prototype.ngAfterViewInit = /**
         * @return {?}
         */
            function () {
                var _this = this;
                this._config = this._config || this.getConfig();
                setTimeout(( /**
                 * @return {?}
                 */function () {
                    if (_this._config.show) {
                        _this.show();
                    }
                }), 0);
            };
        /* Public methods */
        /** Allows to manually toggle modal visibility */
        /* Public methods */
        /**
         * Allows to manually toggle modal visibility
         * @return {?}
         */
        ModalDirective.prototype.toggle = /* Public methods */
            /**
             * Allows to manually toggle modal visibility
             * @return {?}
             */
            function () {
                return this._isShown ? this.hide() : this.show();
            };
        /** Allows to manually open modal */
        /**
         * Allows to manually open modal
         * @return {?}
         */
        ModalDirective.prototype.show = /**
         * Allows to manually open modal
         * @return {?}
         */
            function () {
                var _this = this;
                this.dismissReason = null;
                this.onShow.emit(this);
                this.open.emit(this);
                if (this._isShown) {
                    return;
                }
                clearTimeout(this.timerHideModal);
                clearTimeout(this.timerRmBackDrop);
                this._isShown = true;
                this.checkScrollbar();
                this.setScrollbar();
                if (document$1 && document$1.body) {
                    if (document$1.body.classList.contains(ClassName.OPEN)) {
                        this.isNested = true;
                    }
                    else {
                        this._renderer.addClass(document$1.body, ClassName.OPEN);
                    }
                }
                this.showBackdrop(( /**
                 * @return {?}
                 */function () {
                    _this.showElement();
                }));
                if (!this.config.backdrop && this.config.ignoreBackdropClick) {
                    this._renderer.setStyle(this._element.nativeElement, 'position', 'fixed');
                    if (navigator$1.userAgent.indexOf('Safari') !== -1 &&
                        navigator$1.userAgent.indexOf('Chrome') === -1) {
                        this._renderer.setStyle(this._element.nativeElement, 'overflow', 'unset');
                        this._renderer.setStyle(this._element.nativeElement, 'overflow-y', 'unset');
                        this._renderer.setStyle(this._element.nativeElement, 'overflow-x', 'unset');
                    }
                }
            };
        /** Allows to manually close modal */
        /**
         * Allows to manually close modal
         * @param {?=} event
         * @return {?}
         */
        ModalDirective.prototype.hide = /**
         * Allows to manually close modal
         * @param {?=} event
         * @return {?}
         */
            function (event) {
                var _this = this;
                if (event) {
                    event.preventDefault();
                }
                // fix(modal): resolved problem with not pausing iframe/video when closing modal
                /** @type {?} */
                var iframeElements = Array.from(this._element.nativeElement.querySelectorAll('iframe'));
                /** @type {?} */
                var videoElements = Array.from(this._element.nativeElement.querySelectorAll('video'));
                iframeElements.forEach(( /**
                 * @param {?} iframe
                 * @return {?}
                 */function (iframe) {
                    /** @type {?} */
                    var srcAttribute = iframe.getAttribute('src');
                    _this._renderer.setAttribute(iframe, 'src', srcAttribute);
                }));
                videoElements.forEach(( /**
                 * @param {?} video
                 * @return {?}
                 */function (video) {
                    video.pause();
                }));
                this.onHide.emit(this);
                this.close.emit(this);
                if (!this._isShown) {
                    return;
                }
                clearTimeout(this.timerHideModal);
                clearTimeout(this.timerRmBackDrop);
                this._isShown = false;
                this._renderer.removeClass(this._element.nativeElement, ClassName.IN);
                if (!isBs3()) {
                    this._renderer.removeClass(this._element.nativeElement, ClassName.SHOW);
                }
                if (this.isAnimated) {
                    this.timerHideModal = setTimeout(( /**
                     * @return {?}
                     */function () { return _this.hideModal(); }), TRANSITION_DURATION);
                }
                else {
                    this.hideModal();
                }
            };
        /** Private methods @internal */
        /**
         * Private methods \@internal
         * @protected
         * @param {?=} config
         * @return {?}
         */
        ModalDirective.prototype.getConfig = /**
         * Private methods \@internal
         * @protected
         * @param {?=} config
         * @return {?}
         */
            function (config) {
                return Object.assign({}, modalConfigDefaults, config);
            };
        /**
         *  Show dialog
         *  @internal
         */
        /**
         *  Show dialog
         * \@internal
         * @protected
         * @return {?}
         */
        ModalDirective.prototype.showElement = /**
         *  Show dialog
         * \@internal
         * @protected
         * @return {?}
         */
            function () {
                var _this = this;
                if (!this._element.nativeElement.parentNode ||
                    this._element.nativeElement.parentNode.nodeType !== Node.ELEMENT_NODE) {
                    // don't move modals dom position
                    if (document$1 && document$1.body) {
                        document$1.body.appendChild(this._element.nativeElement);
                    }
                }
                this._renderer.setAttribute(this._element.nativeElement, 'aria-hidden', 'false');
                this._renderer.setStyle(this._element.nativeElement, 'display', 'block');
                this._renderer.setProperty(this._element.nativeElement, 'scrollTop', 0);
                if (this.isAnimated) {
                    Utils$1.reflow(this._element.nativeElement);
                }
                this._renderer.addClass(this._element.nativeElement, ClassName.IN);
                if (!isBs3()) {
                    this._renderer.addClass(this._element.nativeElement, ClassName.SHOW);
                }
                /** @type {?} */
                var transitionComplete = ( /**
                 * @return {?}
                 */function () {
                    if (_this._config.focus) {
                        _this._element.nativeElement.focus();
                    }
                    _this.onShown.emit(_this);
                    _this.opened.emit(_this);
                });
                if (this.isAnimated) {
                    setTimeout(transitionComplete, TRANSITION_DURATION);
                }
                else {
                    transitionComplete();
                }
            };
        /** @internal */
        /**
         * \@internal
         * @protected
         * @return {?}
         */
        ModalDirective.prototype.hideModal = /**
         * \@internal
         * @protected
         * @return {?}
         */
            function () {
                var _this = this;
                this._renderer.setAttribute(this._element.nativeElement, 'aria-hidden', 'true');
                this._renderer.setStyle(this._element.nativeElement, 'display', 'none');
                this.showBackdrop(( /**
                 * @return {?}
                 */function () {
                    if (!_this.isNested) {
                        if (document$1 && document$1.body) {
                            _this._renderer.removeClass(document$1.body, ClassName.OPEN);
                        }
                    }
                    _this.resetAdjustments();
                    _this.focusOtherModal();
                    _this.onHidden.emit(_this);
                    _this.closed.emit(_this);
                }));
            };
        /** @internal */
        /**
         * \@internal
         * @protected
         * @param {?=} callback
         * @return {?}
         */
        ModalDirective.prototype.showBackdrop = /**
         * \@internal
         * @protected
         * @param {?=} callback
         * @return {?}
         */
            function (callback) {
                var _this = this;
                if (this._isShown &&
                    this.config.backdrop &&
                    (!this.backdrop || !this.backdrop.instance.isShown)) {
                    this.removeBackdrop();
                    this._backdrop
                        .attach(ModalBackdropComponent)
                        .to('body')
                        .show({ isAnimated: this.isAnimated });
                    this.backdrop = this._backdrop._componentRef;
                    if (!callback) {
                        return;
                    }
                    if (!this.isAnimated) {
                        callback();
                        return;
                    }
                    setTimeout(callback, BACKDROP_TRANSITION_DURATION);
                }
                else if (!this._isShown && this.backdrop) {
                    this.backdrop.instance.isShown = false;
                    /** @type {?} */
                    var callbackRemove = ( /**
                     * @return {?}
                     */function () {
                        _this.removeBackdrop();
                        if (callback) {
                            callback();
                        }
                    });
                    if (this.backdrop.instance.isAnimated) {
                        this.timerRmBackDrop = setTimeout(callbackRemove, BACKDROP_TRANSITION_DURATION);
                    }
                    else {
                        callbackRemove();
                    }
                }
                else if (callback) {
                    callback();
                }
            };
        /** @internal */
        /**
         * \@internal
         * @protected
         * @return {?}
         */
        ModalDirective.prototype.removeBackdrop = /**
         * \@internal
         * @protected
         * @return {?}
         */
            function () {
                this._backdrop.hide();
            };
        /**
         * @protected
         * @return {?}
         */
        ModalDirective.prototype.focusOtherModal = /**
         * @protected
         * @return {?}
         */
            function () {
                try {
                    /** @type {?} */
                    var otherOpenedModals = this._element.nativeElement.parentElement.querySelectorAll('.in[mdbModal]');
                    if (!otherOpenedModals.length) {
                        return;
                    }
                    otherOpenedModals[otherOpenedModals.length - 1].nativeElement.focus();
                }
                catch (error) { }
            };
        /** @internal */
        /**
         * \@internal
         * @protected
         * @return {?}
         */
        ModalDirective.prototype.resetAdjustments = /**
         * \@internal
         * @protected
         * @return {?}
         */
            function () {
                this._renderer.setStyle(this._element.nativeElement, 'paddingLeft', '');
                this._renderer.setStyle(this._element.nativeElement, 'paddingRight', '');
            };
        /** Scroll bar tricks */
        /** @internal */
        /** Scroll bar tricks */
        /**
         * \@internal
         * @protected
         * @return {?}
         */
        ModalDirective.prototype.checkScrollbar = /** Scroll bar tricks */
            /**
             * \@internal
             * @protected
             * @return {?}
             */
            function () {
                this.isBodyOverflowing = document$1.body.clientWidth < win.innerWidth;
                this.scrollbarWidth = this.getScrollbarWidth();
            };
        /**
         * @protected
         * @return {?}
         */
        ModalDirective.prototype.setScrollbar = /**
         * @protected
         * @return {?}
         */
            function () {
                if (!document$1) {
                    return;
                }
                this.originalBodyPadding = parseInt(win.getComputedStyle(document$1.body).getPropertyValue('padding-right') || 0, 10);
            };
        // thx d.walsh
        // thx d.walsh
        /**
         * @protected
         * @return {?}
         */
        ModalDirective.prototype.getScrollbarWidth =
            // thx d.walsh
            /**
             * @protected
             * @return {?}
             */
            function () {
                /** @type {?} */
                var scrollDiv = this._renderer.createElement('div', void 0);
                this._renderer.appendChild(document$1.body, scrollDiv);
                scrollDiv.className = ClassName.SCROLLBAR_MEASURER;
                /** @type {?} */
                var scrollbarWidth = scrollDiv.offsetWidth - scrollDiv.clientWidth;
                document$1.body.removeChild(scrollDiv);
                return scrollbarWidth;
            };
        ModalDirective.decorators = [
            { type: i0.Component, args: [{
                        // tslint:disable-next-line:component-selector
                        selector: '[mdbModal]',
                        template: '<ng-content></ng-content>',
                        encapsulation: i0.ViewEncapsulation.None,
                        exportAs: 'mdb-modal, mdbModal',
                        styles: [".img-fluid,.modal-dialog.cascading-modal.modal-avatar .modal-header,.video-fluid{max-width:100%;height:auto}.flex-center{display:flex;justify-content:center;align-items:center;height:100%}.flex-center p{margin:0}.flex-center ul{text-align:center}.flex-center ul li{margin-bottom:1rem}.flex-center ul li:last-of-type{margin-bottom:0}.hr-light{border-top:1px solid #fff}.hr-dark{border-top:1px solid #666}.w-responsive{width:75%}@media (max-width:740px){.w-responsive{width:100%}}.collapsible-body{display:none}.jumbotron{box-shadow:0 2px 5px 0 rgba(0,0,0,.16),0 2px 10px 0 rgba(0,0,0,.12);border-radius:.125rem;background-color:#fff}.bg-primary{background-color:#4285f4!important}a.bg-primary:focus,a.bg-primary:hover,button.bg-primary:focus,button.bg-primary:hover{background-color:#1266f1!important}.border-primary{border-color:#4285f4!important}.bg-danger{background-color:#ff3547!important}a.bg-danger:focus,a.bg-danger:hover,button.bg-danger:focus,button.bg-danger:hover{background-color:#ff0219!important}.border-danger{border-color:#ff3547!important}.bg-warning{background-color:#fb3!important}a.bg-warning:focus,a.bg-warning:hover,button.bg-warning:focus,button.bg-warning:hover{background-color:#fa0!important}.border-warning{border-color:#fb3!important}.bg-success{background-color:#00c851!important}a.bg-success:focus,a.bg-success:hover,button.bg-success:focus,button.bg-success:hover{background-color:#00953c!important}.border-success{border-color:#00c851!important}.bg-info{background-color:#33b5e5!important}a.bg-info:focus,a.bg-info:hover,button.bg-info:focus,button.bg-info:hover{background-color:#1a9bcb!important}.border-info{border-color:#33b5e5!important}.bg-default{background-color:#2bbbad!important}a.bg-default:focus,a.bg-default:hover,button.bg-default:focus,button.bg-default:hover{background-color:#219287!important}.border-default{border-color:#2bbbad!important}.bg-secondary{background-color:#a6c!important}a.bg-secondary:focus,a.bg-secondary:hover,button.bg-secondary:focus,button.bg-secondary:hover{background-color:#9540bf!important}.border-secondary{border-color:#a6c!important}.bg-dark{background-color:#212121!important}a.bg-dark:focus,a.bg-dark:hover,button.bg-dark:focus,button.bg-dark:hover{background-color:#080808!important}.border-dark{border-color:#212121!important}.bg-light{background-color:#e0e0e0!important}a.bg-light:focus,a.bg-light:hover,button.bg-light:focus,button.bg-light:hover{background-color:#c7c7c7!important}.border-light{border-color:#e0e0e0!important}.card-img-100{width:100px;height:100px}.card-img-64{width:64px;height:64px}.mml-1{margin-left:-.25rem!important}.flex-1{flex:1}body.modal-open{overflow:auto}.modal-dialog .modal-content .modal-header{border-top-left-radius:.125rem;border-top-right-radius:.125rem}.modal-dialog.cascading-modal .close{opacity:1;text-shadow:none;color:#fff;outline:0}.modal-dialog.cascading-modal .modal-header{box-shadow:0 5px 11px 0 rgba(0,0,0,.18),0 4px 15px 0 rgba(0,0,0,.15);border-radius:.125rem}.modal-dialog.cascading-modal .modal-header .title .fab,.modal-dialog.cascading-modal .modal-header .title .far,.modal-dialog.cascading-modal .modal-header .title .fas{margin-right:9px}.modal-dialog.cascading-modal .modal-c-tabs .md-tabs{box-shadow:0 2px 5px 0 rgba(0,0,0,.16),0 2px 10px 0 rgba(0,0,0,.12);display:flex}.modal-dialog.cascading-modal .modal-c-tabs .md-tabs li{flex:1}.modal-dialog.cascading-modal .modal-c-tabs .md-tabs li a{text-align:center}.modal-dialog.cascading-modal .modal-c-tabs .tab-content{box-shadow:unset;padding:1.7rem 0 0}.modal-dialog.cascading-modal.modal-avatar .modal-header img{box-shadow:0 8px 17px 0 rgba(0,0,0,.2),0 6px 20px 0 rgba(0,0,0,.19);margin-left:auto;margin-right:auto;width:130px}.modal-dialog.modal-notify.modal-primary .modal-header{background-color:#4285f4}.modal-dialog.modal-notify.modal-primary .fab,.modal-dialog.modal-notify.modal-primary .far,.modal-dialog.modal-notify.modal-primary .fas{color:#4285f4}.modal-dialog.modal-notify.modal-primary .badge{background-color:#4285f4}.modal-dialog.modal-notify.modal-primary .btn .fab,.modal-dialog.modal-notify.modal-primary .btn .far,.modal-dialog.modal-notify.modal-primary .btn .fas{color:#fff}.modal-dialog.modal-notify.modal-primary .btn.btn-outline-primary .fab,.modal-dialog.modal-notify.modal-primary .btn.btn-outline-primary .far,.modal-dialog.modal-notify.modal-primary .btn.btn-outline-primary .fas{color:#4285f4}.modal-dialog.modal-notify.modal-danger .fab,.modal-dialog.modal-notify.modal-danger .far,.modal-dialog.modal-notify.modal-danger .fas{color:#ff3547}.modal-dialog.modal-notify.modal-danger .btn .fab,.modal-dialog.modal-notify.modal-danger .btn .far,.modal-dialog.modal-notify.modal-danger .btn .fas{color:#fff}.modal-dialog.modal-notify.modal-danger .btn.btn-outline-danger .fab,.modal-dialog.modal-notify.modal-danger .btn.btn-outline-danger .far,.modal-dialog.modal-notify.modal-danger .btn.btn-outline-danger .fas{color:#ff3547}.modal-dialog.modal-notify.modal-warning .fab,.modal-dialog.modal-notify.modal-warning .far,.modal-dialog.modal-notify.modal-warning .fas{color:#fb3}.modal-dialog.modal-notify.modal-warning .btn .fab,.modal-dialog.modal-notify.modal-warning .btn .far,.modal-dialog.modal-notify.modal-warning .btn .fas{color:#fff}.modal-dialog.modal-notify.modal-warning .btn.btn-outline-warning .fab,.modal-dialog.modal-notify.modal-warning .btn.btn-outline-warning .far,.modal-dialog.modal-notify.modal-warning .btn.btn-outline-warning .fas{color:#fb3}.modal-dialog.modal-notify.modal-success .fab,.modal-dialog.modal-notify.modal-success .far,.modal-dialog.modal-notify.modal-success .fas{color:#00c851}.modal-dialog.modal-notify.modal-success .btn .fab,.modal-dialog.modal-notify.modal-success .btn .far,.modal-dialog.modal-notify.modal-success .btn .fas{color:#fff}.modal-dialog.modal-notify.modal-success .btn.btn-outline-success .fab,.modal-dialog.modal-notify.modal-success .btn.btn-outline-success .far,.modal-dialog.modal-notify.modal-success .btn.btn-outline-success .fas{color:#00c851}.modal-dialog.modal-notify.modal-info .fab,.modal-dialog.modal-notify.modal-info .far,.modal-dialog.modal-notify.modal-info .fas{color:#33b5e5}.modal-dialog.modal-notify.modal-info .btn .fab,.modal-dialog.modal-notify.modal-info .btn .far,.modal-dialog.modal-notify.modal-info .btn .fas{color:#fff}.modal-dialog.modal-notify.modal-info .btn.btn-outline-info .fab,.modal-dialog.modal-notify.modal-info .btn.btn-outline-info .far,.modal-dialog.modal-notify.modal-info .btn.btn-outline-info .fas{color:#33b5e5}@media (min-width:768px){.modal .modal-dialog.modal-top{top:0}.modal .modal-dialog.modal-left{left:0}.modal .modal-dialog.modal-right{right:0}.modal .modal-dialog.modal-bottom{bottom:0}.modal .modal-dialog.modal-top-left{top:10px;left:10px}.modal .modal-dialog.modal-top-right{top:10px;right:10px}.modal .modal-dialog.modal-bottom-left{bottom:10px;left:10px}.modal .modal-dialog.modal-bottom-right{bottom:10px;right:10px}}@media (min-width:992px){.modal.modal-scrolling{position:relative}.modal.modal-scrolling .modal-dialog{position:fixed;z-index:1050}.modal.modal-content-clickable{top:auto;bottom:auto}.modal.modal-content-clickable .modal-dialog{position:fixed}.modal .modal-fluid{width:100%;max-width:100%}.modal .modal-fluid .modal-content{width:100%}.modal .modal-frame{position:absolute;margin:0!important;width:100%;max-width:100%!important}.modal .modal-frame.modal-bottom{bottom:0}.modal .modal-frame.modal-dialog{height:inherit}.modal .modal-full-height{position:absolute;display:flex;margin:0;width:400px;min-height:100%;height:auto;min-height:100%;top:0;right:0}.modal .modal-full-height.modal-bottom,.modal .modal-full-height.modal-top{display:block;width:100%;max-width:100%;height:auto}.modal .modal-full-height.modal-top{bottom:auto}.modal .modal-full-height.modal-bottom{min-height:0;top:auto}.modal .modal-full-height .modal-content{width:100%}.modal .modal-full-height.modal-lg{width:90%;max-width:90%}.modal .modal-side{position:absolute;bottom:10px;right:10px;margin:0;width:400px}}@media (min-width:992px) and (min-width:992px){.modal .modal-full-height.modal-lg{width:800px;max-width:800px}}@media (min-width:992px) and (min-width:1200px){.modal .modal-full-height.modal-lg{width:1000px;max-width:1000px}}body.scrollable{overflow-y:auto}.modal-dialog .modal-content{box-shadow:0 5px 11px 0 rgba(0,0,0,.18),0 4px 15px 0 rgba(0,0,0,.15);border-radius:.125rem;border:0}.modal{padding-right:0!important}@media (min-width:768px){.modal .modal-dialog.modal-top{top:0;left:0;right:0}.modal .modal-dialog.modal-left{left:0}.modal .modal-dialog.modal-right{right:0}.modal .modal-dialog.modal-bottom>.modal-content{position:absolute;bottom:0}.modal .modal-dialog.modal-top-left{top:10px;left:10px}.modal .modal-dialog.modal-top-right{top:10px;right:10px}.modal .modal-dialog.modal-bottom-left{left:10px;bottom:10px}.modal .modal-dialog.modal-bottom-right{right:10px;bottom:10px}.modal-sm{max-width:300px}}.modal .modal-side.modal-top{top:0}.modal .modal-side.modal-left{left:0}.modal .modal-side.modal-right{right:0}.modal .modal-side.modal-bottom{bottom:0}.modal .modal-side.modal-top-left{top:10px;left:10px}.modal .modal-side.modal-top-right{top:10px;right:10px}.modal .modal-side.modal-bottom-left{left:10px;bottom:10px}.modal .modal-side.modal-bottom-right{right:10px;bottom:10px}.modal.fade.top:not(.show) .modal-dialog{-webkit-transform:translate3d(0,-25%,0);transform:translate3d(0,-25%,0)}.modal.fade.left:not(.show) .modal-dialog{-webkit-transform:translate3d(-25%,0,0);transform:translate3d(-25%,0,0)}.modal.fade.right:not(.show) .modal-dialog{-webkit-transform:translate3d(25%,0,0);transform:translate3d(25%,0,0)}.modal.fade.bottom:not(.show) .modal-dialog{-webkit-transform:translate3d(0,25%,0);transform:translate3d(0,25%,0)}.modal.fade.in{opacity:1}.modal.fade.in .modal-dialog{-webkit-transform:translate(0,0);transform:translate(0,0)}.modal.fade.in .modal-dialog .relative{display:inline-block}.modal.modal-scrolling{position:relative}.modal.modal-scrolling .modal-dialog{position:fixed;z-index:1050}.modal.modal-content-clickable{top:auto;bottom:auto}.modal.modal-content-clickable .modal-dialog{position:fixed}.modal .modal-fluid{max-width:100%}.modal .modal-fluid .modal-content{width:100%}.modal .modal-frame{position:absolute;max-width:100%;margin:0}@media (max-width:767px){.modal .modal-frame{padding:.5rem}}.modal .modal-frame.modal-bottom{bottom:0}.modal .modal-full-height{display:flex;position:absolute;width:400px;min-height:100%;margin:0;top:0;right:0}@media (max-width:576px){.modal .modal-full-height{width:100%;padding:.5rem}}@media (max-width:992px){.modal .modal-full-height{width:100%;height:unset;position:unset}.modal .modal-full-height.modal-left,.modal .modal-full-height.modal-right,.modal .modal-full-height.modal-top{margin:1.75rem auto;min-height:unset}.modal .modal-full-height.modal-bottom,.modal .modal-full-height.modal-left,.modal .modal-full-height.modal-right,.modal .modal-full-height.modal-top{margin-left:auto;margin-right:auto}}@media (min-width:768px) and (max-width:992px){.modal .modal-full-height.modal-bottom{margin-bottom:1.75rem}.modal .modal-full-height.modal-bottom .modal-content{bottom:1rem}}.modal .modal-full-height.modal-bottom,.modal .modal-full-height.modal-top{display:block;width:100%;height:auto}.modal .modal-full-height.modal-top{bottom:auto}.modal .modal-full-height.modal-bottom{bottom:0}.modal .modal-full-height .modal-content{width:100%}.modal .modal-full-height.modal-lg{max-width:90%;width:90%}@media (min-width:992px){.modal .modal-full-height.modal-lg{max-width:800px;width:800px}}@media (min-width:1200px){.modal .modal-full-height.modal-lg{max-width:1000px;width:1000px}}.modal .modal-side{position:absolute;right:10px;bottom:10px;margin:0;min-width:100px}@media (max-width:768px){.modal .modal-full-height.modal-bottom{margin-top:1.75rem}.modal .modal-side{padding-left:.5rem}}.modal-dialog.cascading-modal{margin-top:10%}.modal-dialog.cascading-modal .modal-header{text-align:center;margin:-2rem 1rem 1rem;padding:1.5rem;border:none;flex-direction:column}.modal-dialog.cascading-modal .modal-header .close{margin-right:2.5rem}.modal-dialog.cascading-modal .modal-header.white-text .close{color:#fff;opacity:1}.modal-dialog.cascading-modal .modal-header .title{width:100%;margin-bottom:0;font-size:1.25rem}.modal-dialog.cascading-modal .modal-header .title .fa{margin-right:9px}.modal-dialog.cascading-modal .modal-header .social-buttons{margin-top:1.5rem}.modal-dialog.cascading-modal .modal-header .social-buttons a{font-size:1rem}.modal-dialog.cascading-modal .modal-c-tabs .md-tabs{margin:-1.5rem 1rem 0}.modal-dialog.cascading-modal .modal-body,.modal-dialog.cascading-modal .modal-footer{color:#616161;padding-right:2rem;padding-left:2rem}.modal-dialog.cascading-modal .modal-body .additional-option,.modal-dialog.cascading-modal .modal-footer .additional-option{text-align:center;margin-top:1rem}.modal-dialog.cascading-modal.modal-avatar{margin-top:6rem}.modal-dialog.cascading-modal.modal-avatar .modal-header{box-shadow:none;margin:-6rem 2rem -1rem}.modal-dialog.modal-notify .heading{margin:0;padding:.3rem;color:#fff;font-size:1.15rem}.modal-dialog.modal-notify .modal-header{box-shadow:0 2px 5px 0 rgba(0,0,0,.16),0 2px 10px 0 rgba(0,0,0,.12);border:0}.modal-dialog.modal-notify .close{opacity:1}.modal-dialog.modal-notify .modal-body{padding:1.5rem;color:#616161}.modal-dialog.modal-notify .btn-outline-secondary-modal{background-color:transparent}.modal-dialog.modal-notify.modal-info .modal-header{background-color:#5394ff}.modal-dialog.modal-notify.modal-info .fa{color:#5394ff}.modal-dialog.modal-notify.modal-info .badge{background-color:#5394ff}.modal-dialog.modal-notify.modal-info .btn-primary-modal{background:#5394ff}.modal-dialog.modal-notify.modal-info .btn-primary-modal:active,.modal-dialog.modal-notify.modal-info .btn-primary-modal:focus,.modal-dialog.modal-notify.modal-info .btn-primary-modal:hover{background-color:#6da4ff!important}.modal-dialog.modal-notify.modal-info .btn-primary-modal.active{background-color:#0059ec!important}.modal-dialog.modal-notify.modal-info .btn-outline-secondary-modal{border:2px solid #5394ff;color:#5394ff!important}.modal-dialog.modal-notify.modal-warning .modal-header{background-color:#ff8e38}.modal-dialog.modal-notify.modal-warning .fa{color:#ff8e38}.modal-dialog.modal-notify.modal-warning .badge{background-color:#ff8e38}.modal-dialog.modal-notify.modal-warning .btn-primary-modal{background:#ff8e38}.modal-dialog.modal-notify.modal-warning .btn-primary-modal:active,.modal-dialog.modal-notify.modal-warning .btn-primary-modal:focus,.modal-dialog.modal-notify.modal-warning .btn-primary-modal:hover{background-color:#ff9c52!important}.modal-dialog.modal-notify.modal-warning .btn-primary-modal.active{background-color:#d15a00!important}.modal-dialog.modal-notify.modal-warning .btn-outline-secondary-modal{border:2px solid #ff8e38;color:#ff8e38!important}.modal-dialog.modal-notify.modal-success .modal-header{background-color:#01d36b}.modal-dialog.modal-notify.modal-success .fa{color:#01d36b}.modal-dialog.modal-notify.modal-success .badge{background-color:#01d36b}.modal-dialog.modal-notify.modal-success .btn-primary-modal{background:#01d36b}.modal-dialog.modal-notify.modal-success .btn-primary-modal:active,.modal-dialog.modal-notify.modal-success .btn-primary-modal:focus,.modal-dialog.modal-notify.modal-success .btn-primary-modal:hover{background-color:#01ec78!important}.modal-dialog.modal-notify.modal-success .btn-primary-modal.active{background-color:#016d38!important}.modal-dialog.modal-notify.modal-success .btn-outline-secondary-modal{border:2px solid #01d36b;color:#01d36b!important}.modal-dialog.modal-notify.modal-danger .modal-header{background-color:#ff4b4b}.modal-dialog.modal-notify.modal-danger .fa{color:#ff4b4b}.modal-dialog.modal-notify.modal-danger .badge{background-color:#ff4b4b}.modal-dialog.modal-notify.modal-danger .btn-primary-modal{background:#ff4b4b}.modal-dialog.modal-notify.modal-danger .btn-primary-modal:active,.modal-dialog.modal-notify.modal-danger .btn-primary-modal:focus,.modal-dialog.modal-notify.modal-danger .btn-primary-modal:hover{background-color:#ff6565!important}.modal-dialog.modal-notify.modal-danger .btn-primary-modal.active{background-color:#e40000!important}.modal-dialog.modal-notify.modal-danger .btn-outline-secondary-modal{border:2px solid #ff4b4b;color:#ff4b4b!important}.modal-sm .modal-content{margin:0 auto;max-width:300px}.modal .modal-fluid,.modal .modal-frame{width:100%;max-width:100%}.modal-ext .modal-content .modal-header{text-align:center}.modal-ext .modal-content .options{float:left}.modal-ext .modal-content .modal-body .text-xs-center fieldset{margin-top:20px}.modal-ext .modal-content .call{margin-top:1rem}.modal-ext .modal-content .modal-body{padding:2rem 2rem 1rem}.modal-content:not(.card-image) .close{position:absolute;right:15px}.modal-cart li p{margin:5px;font-weight:400}.modal-cart li p .badge{margin-left:10px;margin-top:3px;font-weight:400;position:absolute}.modal-cart li p .quantity{font-size:16px;margin-right:7px;font-weight:300}.modal-cart .cartPageLink{margin-left:10px}.modal-cart .cartPageLink a{text-decoration:underline;color:#666}.modal-cart .total{float:right;font-weight:400}.cf-phone{margin-left:7px}.side-modal{position:fixed;height:100%;width:100%;z-index:9999}.side-modal .modal-dialog{position:absolute;bottom:10px;right:10px;width:400px;margin:10px}@media (max-width:760px){.side-modal .modal-dialog{display:none}}.side-modal .modal-header{padding:1rem}.side-modal .modal-header .heading{margin:0;padding:0}.side-modal .modal-content{border:none}.modal-dynamic>:first-child{display:flex;flex-direction:column;height:100%}.side-modal.fade:not(.show) .modal-dialog{-webkit-transform:translate3d(25%,0,0);transform:translate3d(25%,0,0)}.transparent-bd{opacity:0!important}.modal-backdrop,.modal-backdrop.in{opacity:.5}#exampleModalScroll{overflow-x:hidden;overflow-y:auto}.modal-open .modal{overflow-x:hidden;overflow-y:hidden}.form-dark .card-image{background-size:100%}"]
                    }] }
        ];
        /** @nocollapse */
        ModalDirective.ctorParameters = function () {
            return [
                { type: i0.ElementRef },
                { type: i0.ViewContainerRef },
                { type: i0.Renderer2 },
                { type: ComponentLoaderFactory }
            ];
        };
        ModalDirective.propDecorators = {
            config: [{ type: i0.Input }],
            onShow: [{ type: i0.Output }],
            open: [{ type: i0.Output }],
            onShown: [{ type: i0.Output }],
            opened: [{ type: i0.Output }],
            onHide: [{ type: i0.Output }],
            close: [{ type: i0.Output }],
            onHidden: [{ type: i0.Output }],
            closed: [{ type: i0.Output }],
            onKeyDown: [{ type: i0.HostListener, args: ['keydown', ['$event'],] }],
            onClick: [{ type: i0.HostListener, args: ['click', ['$event'],] }],
            onEsc: [{ type: i0.HostListener, args: ['keydown.esc',] }]
        };
        return ModalDirective;
    }());

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */
    var ModalContainerComponent = /** @class */ (function () {
        function ModalContainerComponent(options, _element, _renderer) {
            // this.mdbModalService = msConfig.serviceInstance;
            this._renderer = _renderer;
            this.modalClass = 'modal';
            this.tabindex = -1;
            this.role = 'dialog';
            this.modal = true;
            this.isShown = false;
            this.isModalHiding = false;
            this.utils = new Utils$1();
            this._element = _element;
            this.config = Object.assign({}, options);
        }
        /**
         * @param {?} event
         * @return {?}
         */
        ModalContainerComponent.prototype.onClick = /**
         * @param {?} event
         * @return {?}
         */
            function (event) {
                if (this.config.ignoreBackdropClick ||
                    this.config.backdrop === 'static' ||
                    event.target !== this._element.nativeElement) {
                    return;
                }
                this.mdbModalService.setDismissReason(DISMISS_REASONS.BACKRDOP);
                this.hide();
            };
        /**
         * @return {?}
         */
        ModalContainerComponent.prototype.onEsc = /**
         * @return {?}
         */
            function () {
                if (this.config.keyboard && this.level === this.mdbModalService.getModalsCount()) {
                    this.mdbModalService.setDismissReason(DISMISS_REASONS.ESC);
                    this.hide();
                }
            };
        /**
         * @param {?} event
         * @return {?}
         */
        ModalContainerComponent.prototype.onKeyDown = /**
         * @param {?} event
         * @return {?}
         */
            function (event) {
                this.utils.focusTrapModal(event, this._element);
            };
        /**
         * @return {?}
         */
        ModalContainerComponent.prototype.ngOnInit = /**
         * @return {?}
         */
            function () {
                var _this = this;
                if (this.config.animated) {
                    this._renderer.addClass(this._element.nativeElement, 'fade');
                }
                this._renderer.setStyle(this._element.nativeElement, 'display', 'block');
                if ((window &&
                    window.navigator.userAgent.indexOf('Edge') !== -1 &&
                    this.config &&
                    this.config.toString().indexOf('side-modal') === -1) ||
                    (window &&
                        window.navigator.userAgent.indexOf('Edge') !== -1 &&
                        this.config &&
                        this.config.toString().indexOf('modal-full-height') === -1)) {
                    this.isShown = true;
                    this._renderer.addClass(this._element.nativeElement, isBs3() ? ClassName.IN : ClassName.SHOW);
                    this._renderer.setStyle(this._element.nativeElement, 'transition', 'transform 0.3s ease-out');
                    this._renderer.setStyle(this._element.nativeElement, 'transform', 'translate(0, 25px)');
                }
                else {
                    setTimeout(( /**
                     * @return {?}
                     */function () {
                        _this.isShown = true;
                        _this._renderer.addClass(_this._element.nativeElement, isBs3() ? ClassName.IN : ClassName.SHOW);
                    }), this.isAnimated ? TransitionDurations.BACKDROP : 0);
                }
                if (document && document.body) {
                    if (this.mdbModalService.getModalsCount() === 1) {
                        this.mdbModalService.checkScrollbar();
                        this.mdbModalService.setScrollbar();
                    }
                    this._renderer.addClass(document.body, ClassName.OPEN);
                }
                if (this.config.containerClass) {
                    this.updateContainerClass();
                }
                if (this.config.scroll) {
                    this._renderer.setStyle(this._element.nativeElement, 'overflow-y', 'auto');
                }
            };
        /**
         * @return {?}
         */
        ModalContainerComponent.prototype.focusModalElement = /**
         * @return {?}
         */
            function () {
                if (this.config.focus) {
                    this._element.nativeElement.focus();
                }
            };
        /**
         * @return {?}
         */
        ModalContainerComponent.prototype.updateContainerClass = /**
         * @return {?}
         */
            function () {
                if (this.config.containerClass) {
                    /** @type {?} */
                    var containerClasses = this.config.containerClass;
                    /** @type {?} */
                    var classArr = containerClasses.split(' ');
                    for (var i = 0; i < classArr.length; i++) {
                        this._renderer.addClass(this._element.nativeElement, classArr[i]);
                    }
                }
            };
        /**
         * @return {?}
         */
        ModalContainerComponent.prototype.ngOnDestroy = /**
         * @return {?}
         */
            function () {
                if (this.isShown) {
                    this.hide();
                }
            };
        /**
         * @return {?}
         */
        ModalContainerComponent.prototype.hide = /**
         * @return {?}
         */
            function () {
                var _this = this;
                if (this.isModalHiding || !this.isShown) {
                    return;
                }
                this.isModalHiding = true;
                this._renderer.removeClass(this._element.nativeElement, isBs3() ? ClassName.IN : ClassName.SHOW);
                // fix(modal): resolved problem with not pausing iframe/video when closing modal
                /** @type {?} */
                var iframeElements = Array.from(this._element.nativeElement.querySelectorAll('iframe'));
                /** @type {?} */
                var videoElements = Array.from(this._element.nativeElement.querySelectorAll('video'));
                iframeElements.forEach(( /**
                 * @param {?} iframe
                 * @return {?}
                 */function (iframe) {
                    /** @type {?} */
                    var srcAttribute = iframe.getAttribute('src');
                    _this._renderer.setAttribute(iframe, 'src', srcAttribute);
                }));
                videoElements.forEach(( /**
                 * @param {?} video
                 * @return {?}
                 */function (video) {
                    video.pause();
                }));
                setTimeout(( /**
                 * @return {?}
                 */function () {
                    _this.isShown = false;
                    if (document && document.body && _this.mdbModalService.getModalsCount() === 1) {
                        _this._renderer.removeClass(document.body, ClassName.OPEN);
                    }
                    _this.mdbModalService.hide(_this.level);
                    _this.isModalHiding = false;
                }), this.isAnimated ? TransitionDurations.MODAL : 0);
            };
        ModalContainerComponent.decorators = [
            { type: i0.Component, args: [{
                        selector: 'mdb-modal-container',
                        template: "<div [class]=\"'modal-dialog' + (config.class ? ' ' + config.class : '')\" role=\"document\">\n  <div class=\"modal-content modal-dynamic\"><ng-content></ng-content></div>\n</div>\n",
                        encapsulation: i0.ViewEncapsulation.None,
                        styles: [".img-fluid,.modal-dialog.cascading-modal.modal-avatar .modal-header,.video-fluid{max-width:100%;height:auto}.flex-center{display:flex;justify-content:center;align-items:center;height:100%}.flex-center p{margin:0}.flex-center ul{text-align:center}.flex-center ul li{margin-bottom:1rem}.flex-center ul li:last-of-type{margin-bottom:0}.hr-light{border-top:1px solid #fff}.hr-dark{border-top:1px solid #666}.w-responsive{width:75%}@media (max-width:740px){.w-responsive{width:100%}}.collapsible-body{display:none}.jumbotron{box-shadow:0 2px 5px 0 rgba(0,0,0,.16),0 2px 10px 0 rgba(0,0,0,.12);border-radius:.125rem;background-color:#fff}.bg-primary{background-color:#4285f4!important}a.bg-primary:focus,a.bg-primary:hover,button.bg-primary:focus,button.bg-primary:hover{background-color:#1266f1!important}.border-primary{border-color:#4285f4!important}.bg-danger{background-color:#ff3547!important}a.bg-danger:focus,a.bg-danger:hover,button.bg-danger:focus,button.bg-danger:hover{background-color:#ff0219!important}.border-danger{border-color:#ff3547!important}.bg-warning{background-color:#fb3!important}a.bg-warning:focus,a.bg-warning:hover,button.bg-warning:focus,button.bg-warning:hover{background-color:#fa0!important}.border-warning{border-color:#fb3!important}.bg-success{background-color:#00c851!important}a.bg-success:focus,a.bg-success:hover,button.bg-success:focus,button.bg-success:hover{background-color:#00953c!important}.border-success{border-color:#00c851!important}.bg-info{background-color:#33b5e5!important}a.bg-info:focus,a.bg-info:hover,button.bg-info:focus,button.bg-info:hover{background-color:#1a9bcb!important}.border-info{border-color:#33b5e5!important}.bg-default{background-color:#2bbbad!important}a.bg-default:focus,a.bg-default:hover,button.bg-default:focus,button.bg-default:hover{background-color:#219287!important}.border-default{border-color:#2bbbad!important}.bg-secondary{background-color:#a6c!important}a.bg-secondary:focus,a.bg-secondary:hover,button.bg-secondary:focus,button.bg-secondary:hover{background-color:#9540bf!important}.border-secondary{border-color:#a6c!important}.bg-dark{background-color:#212121!important}a.bg-dark:focus,a.bg-dark:hover,button.bg-dark:focus,button.bg-dark:hover{background-color:#080808!important}.border-dark{border-color:#212121!important}.bg-light{background-color:#e0e0e0!important}a.bg-light:focus,a.bg-light:hover,button.bg-light:focus,button.bg-light:hover{background-color:#c7c7c7!important}.border-light{border-color:#e0e0e0!important}.card-img-100{width:100px;height:100px}.card-img-64{width:64px;height:64px}.mml-1{margin-left:-.25rem!important}.flex-1{flex:1}body.modal-open{overflow:auto}.modal-dialog .modal-content .modal-header{border-top-left-radius:.125rem;border-top-right-radius:.125rem}.modal-dialog.cascading-modal .close{opacity:1;text-shadow:none;color:#fff;outline:0}.modal-dialog.cascading-modal .modal-header{box-shadow:0 5px 11px 0 rgba(0,0,0,.18),0 4px 15px 0 rgba(0,0,0,.15);border-radius:.125rem}.modal-dialog.cascading-modal .modal-header .title .fab,.modal-dialog.cascading-modal .modal-header .title .far,.modal-dialog.cascading-modal .modal-header .title .fas{margin-right:9px}.modal-dialog.cascading-modal .modal-c-tabs .md-tabs{box-shadow:0 2px 5px 0 rgba(0,0,0,.16),0 2px 10px 0 rgba(0,0,0,.12);display:flex}.modal-dialog.cascading-modal .modal-c-tabs .md-tabs li{flex:1}.modal-dialog.cascading-modal .modal-c-tabs .md-tabs li a{text-align:center}.modal-dialog.cascading-modal .modal-c-tabs .tab-content{box-shadow:unset;padding:1.7rem 0 0}.modal-dialog.cascading-modal.modal-avatar .modal-header img{box-shadow:0 8px 17px 0 rgba(0,0,0,.2),0 6px 20px 0 rgba(0,0,0,.19);margin-left:auto;margin-right:auto;width:130px}.modal-dialog.modal-notify.modal-primary .modal-header{background-color:#4285f4}.modal-dialog.modal-notify.modal-primary .fab,.modal-dialog.modal-notify.modal-primary .far,.modal-dialog.modal-notify.modal-primary .fas{color:#4285f4}.modal-dialog.modal-notify.modal-primary .badge{background-color:#4285f4}.modal-dialog.modal-notify.modal-primary .btn .fab,.modal-dialog.modal-notify.modal-primary .btn .far,.modal-dialog.modal-notify.modal-primary .btn .fas{color:#fff}.modal-dialog.modal-notify.modal-primary .btn.btn-outline-primary .fab,.modal-dialog.modal-notify.modal-primary .btn.btn-outline-primary .far,.modal-dialog.modal-notify.modal-primary .btn.btn-outline-primary .fas{color:#4285f4}.modal-dialog.modal-notify.modal-danger .fab,.modal-dialog.modal-notify.modal-danger .far,.modal-dialog.modal-notify.modal-danger .fas{color:#ff3547}.modal-dialog.modal-notify.modal-danger .btn .fab,.modal-dialog.modal-notify.modal-danger .btn .far,.modal-dialog.modal-notify.modal-danger .btn .fas{color:#fff}.modal-dialog.modal-notify.modal-danger .btn.btn-outline-danger .fab,.modal-dialog.modal-notify.modal-danger .btn.btn-outline-danger .far,.modal-dialog.modal-notify.modal-danger .btn.btn-outline-danger .fas{color:#ff3547}.modal-dialog.modal-notify.modal-warning .fab,.modal-dialog.modal-notify.modal-warning .far,.modal-dialog.modal-notify.modal-warning .fas{color:#fb3}.modal-dialog.modal-notify.modal-warning .btn .fab,.modal-dialog.modal-notify.modal-warning .btn .far,.modal-dialog.modal-notify.modal-warning .btn .fas{color:#fff}.modal-dialog.modal-notify.modal-warning .btn.btn-outline-warning .fab,.modal-dialog.modal-notify.modal-warning .btn.btn-outline-warning .far,.modal-dialog.modal-notify.modal-warning .btn.btn-outline-warning .fas{color:#fb3}.modal-dialog.modal-notify.modal-success .fab,.modal-dialog.modal-notify.modal-success .far,.modal-dialog.modal-notify.modal-success .fas{color:#00c851}.modal-dialog.modal-notify.modal-success .btn .fab,.modal-dialog.modal-notify.modal-success .btn .far,.modal-dialog.modal-notify.modal-success .btn .fas{color:#fff}.modal-dialog.modal-notify.modal-success .btn.btn-outline-success .fab,.modal-dialog.modal-notify.modal-success .btn.btn-outline-success .far,.modal-dialog.modal-notify.modal-success .btn.btn-outline-success .fas{color:#00c851}.modal-dialog.modal-notify.modal-info .fab,.modal-dialog.modal-notify.modal-info .far,.modal-dialog.modal-notify.modal-info .fas{color:#33b5e5}.modal-dialog.modal-notify.modal-info .btn .fab,.modal-dialog.modal-notify.modal-info .btn .far,.modal-dialog.modal-notify.modal-info .btn .fas{color:#fff}.modal-dialog.modal-notify.modal-info .btn.btn-outline-info .fab,.modal-dialog.modal-notify.modal-info .btn.btn-outline-info .far,.modal-dialog.modal-notify.modal-info .btn.btn-outline-info .fas{color:#33b5e5}@media (min-width:768px){.modal .modal-dialog.modal-top{top:0}.modal .modal-dialog.modal-left{left:0}.modal .modal-dialog.modal-right{right:0}.modal .modal-dialog.modal-bottom{bottom:0}.modal .modal-dialog.modal-top-left{top:10px;left:10px}.modal .modal-dialog.modal-top-right{top:10px;right:10px}.modal .modal-dialog.modal-bottom-left{bottom:10px;left:10px}.modal .modal-dialog.modal-bottom-right{bottom:10px;right:10px}}@media (min-width:992px){.modal.modal-scrolling{position:relative}.modal.modal-scrolling .modal-dialog{position:fixed;z-index:1050}.modal.modal-content-clickable{top:auto;bottom:auto}.modal.modal-content-clickable .modal-dialog{position:fixed}.modal .modal-fluid{width:100%;max-width:100%}.modal .modal-fluid .modal-content{width:100%}.modal .modal-frame{position:absolute;margin:0!important;width:100%;max-width:100%!important}.modal .modal-frame.modal-bottom{bottom:0}.modal .modal-frame.modal-dialog{height:inherit}.modal .modal-full-height{position:absolute;display:flex;margin:0;width:400px;min-height:100%;height:auto;min-height:100%;top:0;right:0}.modal .modal-full-height.modal-bottom,.modal .modal-full-height.modal-top{display:block;width:100%;max-width:100%;height:auto}.modal .modal-full-height.modal-top{bottom:auto}.modal .modal-full-height.modal-bottom{min-height:0;top:auto}.modal .modal-full-height .modal-content{width:100%}.modal .modal-full-height.modal-lg{width:90%;max-width:90%}.modal .modal-side{position:absolute;bottom:10px;right:10px;margin:0;width:400px}}@media (min-width:992px) and (min-width:992px){.modal .modal-full-height.modal-lg{width:800px;max-width:800px}}@media (min-width:992px) and (min-width:1200px){.modal .modal-full-height.modal-lg{width:1000px;max-width:1000px}}body.scrollable{overflow-y:auto}.modal-dialog .modal-content{box-shadow:0 5px 11px 0 rgba(0,0,0,.18),0 4px 15px 0 rgba(0,0,0,.15);border-radius:.125rem;border:0}.modal{padding-right:0!important}@media (min-width:768px){.modal .modal-dialog.modal-top{top:0;left:0;right:0}.modal .modal-dialog.modal-left{left:0}.modal .modal-dialog.modal-right{right:0}.modal .modal-dialog.modal-bottom>.modal-content{position:absolute;bottom:0}.modal .modal-dialog.modal-top-left{top:10px;left:10px}.modal .modal-dialog.modal-top-right{top:10px;right:10px}.modal .modal-dialog.modal-bottom-left{left:10px;bottom:10px}.modal .modal-dialog.modal-bottom-right{right:10px;bottom:10px}.modal-sm{max-width:300px}}.modal .modal-side.modal-top{top:0}.modal .modal-side.modal-left{left:0}.modal .modal-side.modal-right{right:0}.modal .modal-side.modal-bottom{bottom:0}.modal .modal-side.modal-top-left{top:10px;left:10px}.modal .modal-side.modal-top-right{top:10px;right:10px}.modal .modal-side.modal-bottom-left{left:10px;bottom:10px}.modal .modal-side.modal-bottom-right{right:10px;bottom:10px}.modal.fade.top:not(.show) .modal-dialog{-webkit-transform:translate3d(0,-25%,0);transform:translate3d(0,-25%,0)}.modal.fade.left:not(.show) .modal-dialog{-webkit-transform:translate3d(-25%,0,0);transform:translate3d(-25%,0,0)}.modal.fade.right:not(.show) .modal-dialog{-webkit-transform:translate3d(25%,0,0);transform:translate3d(25%,0,0)}.modal.fade.bottom:not(.show) .modal-dialog{-webkit-transform:translate3d(0,25%,0);transform:translate3d(0,25%,0)}.modal.fade.in{opacity:1}.modal.fade.in .modal-dialog{-webkit-transform:translate(0,0);transform:translate(0,0)}.modal.fade.in .modal-dialog .relative{display:inline-block}.modal.modal-scrolling{position:relative}.modal.modal-scrolling .modal-dialog{position:fixed;z-index:1050}.modal.modal-content-clickable{top:auto;bottom:auto}.modal.modal-content-clickable .modal-dialog{position:fixed}.modal .modal-fluid{max-width:100%}.modal .modal-fluid .modal-content{width:100%}.modal .modal-frame{position:absolute;max-width:100%;margin:0}@media (max-width:767px){.modal .modal-frame{padding:.5rem}}.modal .modal-frame.modal-bottom{bottom:0}.modal .modal-full-height{display:flex;position:absolute;width:400px;min-height:100%;margin:0;top:0;right:0}@media (max-width:576px){.modal .modal-full-height{width:100%;padding:.5rem}}@media (max-width:992px){.modal .modal-full-height{width:100%;height:unset;position:unset}.modal .modal-full-height.modal-left,.modal .modal-full-height.modal-right,.modal .modal-full-height.modal-top{margin:1.75rem auto;min-height:unset}.modal .modal-full-height.modal-bottom,.modal .modal-full-height.modal-left,.modal .modal-full-height.modal-right,.modal .modal-full-height.modal-top{margin-left:auto;margin-right:auto}}@media (min-width:768px) and (max-width:992px){.modal .modal-full-height.modal-bottom{margin-bottom:1.75rem}.modal .modal-full-height.modal-bottom .modal-content{bottom:1rem}}.modal .modal-full-height.modal-bottom,.modal .modal-full-height.modal-top{display:block;width:100%;height:auto}.modal .modal-full-height.modal-top{bottom:auto}.modal .modal-full-height.modal-bottom{bottom:0}.modal .modal-full-height .modal-content{width:100%}.modal .modal-full-height.modal-lg{max-width:90%;width:90%}@media (min-width:992px){.modal .modal-full-height.modal-lg{max-width:800px;width:800px}}@media (min-width:1200px){.modal .modal-full-height.modal-lg{max-width:1000px;width:1000px}}.modal .modal-side{position:absolute;right:10px;bottom:10px;margin:0;min-width:100px}@media (max-width:768px){.modal .modal-full-height.modal-bottom{margin-top:1.75rem}.modal .modal-side{padding-left:.5rem}}.modal-dialog.cascading-modal{margin-top:10%}.modal-dialog.cascading-modal .modal-header{text-align:center;margin:-2rem 1rem 1rem;padding:1.5rem;border:none;flex-direction:column}.modal-dialog.cascading-modal .modal-header .close{margin-right:2.5rem}.modal-dialog.cascading-modal .modal-header.white-text .close{color:#fff;opacity:1}.modal-dialog.cascading-modal .modal-header .title{width:100%;margin-bottom:0;font-size:1.25rem}.modal-dialog.cascading-modal .modal-header .title .fa{margin-right:9px}.modal-dialog.cascading-modal .modal-header .social-buttons{margin-top:1.5rem}.modal-dialog.cascading-modal .modal-header .social-buttons a{font-size:1rem}.modal-dialog.cascading-modal .modal-c-tabs .md-tabs{margin:-1.5rem 1rem 0}.modal-dialog.cascading-modal .modal-body,.modal-dialog.cascading-modal .modal-footer{color:#616161;padding-right:2rem;padding-left:2rem}.modal-dialog.cascading-modal .modal-body .additional-option,.modal-dialog.cascading-modal .modal-footer .additional-option{text-align:center;margin-top:1rem}.modal-dialog.cascading-modal.modal-avatar{margin-top:6rem}.modal-dialog.cascading-modal.modal-avatar .modal-header{box-shadow:none;margin:-6rem 2rem -1rem}.modal-dialog.modal-notify .heading{margin:0;padding:.3rem;color:#fff;font-size:1.15rem}.modal-dialog.modal-notify .modal-header{box-shadow:0 2px 5px 0 rgba(0,0,0,.16),0 2px 10px 0 rgba(0,0,0,.12);border:0}.modal-dialog.modal-notify .close{opacity:1}.modal-dialog.modal-notify .modal-body{padding:1.5rem;color:#616161}.modal-dialog.modal-notify .btn-outline-secondary-modal{background-color:transparent}.modal-dialog.modal-notify.modal-info .modal-header{background-color:#5394ff}.modal-dialog.modal-notify.modal-info .fa{color:#5394ff}.modal-dialog.modal-notify.modal-info .badge{background-color:#5394ff}.modal-dialog.modal-notify.modal-info .btn-primary-modal{background:#5394ff}.modal-dialog.modal-notify.modal-info .btn-primary-modal:active,.modal-dialog.modal-notify.modal-info .btn-primary-modal:focus,.modal-dialog.modal-notify.modal-info .btn-primary-modal:hover{background-color:#6da4ff!important}.modal-dialog.modal-notify.modal-info .btn-primary-modal.active{background-color:#0059ec!important}.modal-dialog.modal-notify.modal-info .btn-outline-secondary-modal{border:2px solid #5394ff;color:#5394ff!important}.modal-dialog.modal-notify.modal-warning .modal-header{background-color:#ff8e38}.modal-dialog.modal-notify.modal-warning .fa{color:#ff8e38}.modal-dialog.modal-notify.modal-warning .badge{background-color:#ff8e38}.modal-dialog.modal-notify.modal-warning .btn-primary-modal{background:#ff8e38}.modal-dialog.modal-notify.modal-warning .btn-primary-modal:active,.modal-dialog.modal-notify.modal-warning .btn-primary-modal:focus,.modal-dialog.modal-notify.modal-warning .btn-primary-modal:hover{background-color:#ff9c52!important}.modal-dialog.modal-notify.modal-warning .btn-primary-modal.active{background-color:#d15a00!important}.modal-dialog.modal-notify.modal-warning .btn-outline-secondary-modal{border:2px solid #ff8e38;color:#ff8e38!important}.modal-dialog.modal-notify.modal-success .modal-header{background-color:#01d36b}.modal-dialog.modal-notify.modal-success .fa{color:#01d36b}.modal-dialog.modal-notify.modal-success .badge{background-color:#01d36b}.modal-dialog.modal-notify.modal-success .btn-primary-modal{background:#01d36b}.modal-dialog.modal-notify.modal-success .btn-primary-modal:active,.modal-dialog.modal-notify.modal-success .btn-primary-modal:focus,.modal-dialog.modal-notify.modal-success .btn-primary-modal:hover{background-color:#01ec78!important}.modal-dialog.modal-notify.modal-success .btn-primary-modal.active{background-color:#016d38!important}.modal-dialog.modal-notify.modal-success .btn-outline-secondary-modal{border:2px solid #01d36b;color:#01d36b!important}.modal-dialog.modal-notify.modal-danger .modal-header{background-color:#ff4b4b}.modal-dialog.modal-notify.modal-danger .fa{color:#ff4b4b}.modal-dialog.modal-notify.modal-danger .badge{background-color:#ff4b4b}.modal-dialog.modal-notify.modal-danger .btn-primary-modal{background:#ff4b4b}.modal-dialog.modal-notify.modal-danger .btn-primary-modal:active,.modal-dialog.modal-notify.modal-danger .btn-primary-modal:focus,.modal-dialog.modal-notify.modal-danger .btn-primary-modal:hover{background-color:#ff6565!important}.modal-dialog.modal-notify.modal-danger .btn-primary-modal.active{background-color:#e40000!important}.modal-dialog.modal-notify.modal-danger .btn-outline-secondary-modal{border:2px solid #ff4b4b;color:#ff4b4b!important}.modal-sm .modal-content{margin:0 auto;max-width:300px}.modal .modal-fluid,.modal .modal-frame{width:100%;max-width:100%}.modal-ext .modal-content .modal-header{text-align:center}.modal-ext .modal-content .options{float:left}.modal-ext .modal-content .modal-body .text-xs-center fieldset{margin-top:20px}.modal-ext .modal-content .call{margin-top:1rem}.modal-ext .modal-content .modal-body{padding:2rem 2rem 1rem}.modal-content:not(.card-image) .close{position:absolute;right:15px}.modal-cart li p{margin:5px;font-weight:400}.modal-cart li p .badge{margin-left:10px;margin-top:3px;font-weight:400;position:absolute}.modal-cart li p .quantity{font-size:16px;margin-right:7px;font-weight:300}.modal-cart .cartPageLink{margin-left:10px}.modal-cart .cartPageLink a{text-decoration:underline;color:#666}.modal-cart .total{float:right;font-weight:400}.cf-phone{margin-left:7px}.side-modal{position:fixed;height:100%;width:100%;z-index:9999}.side-modal .modal-dialog{position:absolute;bottom:10px;right:10px;width:400px;margin:10px}@media (max-width:760px){.side-modal .modal-dialog{display:none}}.side-modal .modal-header{padding:1rem}.side-modal .modal-header .heading{margin:0;padding:0}.side-modal .modal-content{border:none}.modal-dynamic>:first-child{display:flex;flex-direction:column;height:100%}.side-modal.fade:not(.show) .modal-dialog{-webkit-transform:translate3d(25%,0,0);transform:translate3d(25%,0,0)}.transparent-bd{opacity:0!important}.modal-backdrop,.modal-backdrop.in{opacity:.5}#exampleModalScroll{overflow-x:hidden;overflow-y:auto}.modal-open .modal{overflow-x:hidden;overflow-y:hidden}.form-dark .card-image{background-size:100%}"]
                    }] }
        ];
        /** @nocollapse */
        ModalContainerComponent.ctorParameters = function () {
            return [
                { type: ModalOptions },
                { type: i0.ElementRef },
                { type: i0.Renderer2 }
            ];
        };
        ModalContainerComponent.propDecorators = {
            tabindex: [{ type: i0.HostBinding, args: ['tabindex',] }],
            role: [{ type: i0.HostBinding, args: ['role',] }],
            modal: [{ type: i0.HostBinding, args: ['class.modal',] }],
            onClick: [{ type: i0.HostListener, args: ['click', ['$event'],] }],
            onEsc: [{ type: i0.HostListener, args: ['window:keydown.esc',] }],
            onKeyDown: [{ type: i0.HostListener, args: ['keydown', ['$event'],] }]
        };
        return ModalContainerComponent;
    }());

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */
    var MDBModalService = /** @class */ (function () {
        function MDBModalService(rendererFactory, clf) {
            this.clf = clf;
            this.config = modalConfigDefaults;
            this.open = new i0.EventEmitter();
            this.opened = new i0.EventEmitter();
            this.close = new i0.EventEmitter();
            this.closed = new i0.EventEmitter();
            this.isBodyOverflowing = false;
            this.originalBodyPadding = 0;
            this.scrollbarWidth = 0;
            this.modalsCount = 0;
            this.lastDismissReason = '';
            this.loaders = [];
            this._backdropLoader = this.clf.createLoader(this.el, this.vcr, this.renderer);
            this.renderer = rendererFactory.createRenderer(null, null);
        }
        /** Shows a modal */
        /**
         * Shows a modal
         * @param {?} content
         * @param {?=} config
         * @return {?}
         */
        MDBModalService.prototype.show = /**
         * Shows a modal
         * @param {?} content
         * @param {?=} config
         * @return {?}
         */
            function (content, config) {
                this.modalsCount++;
                this._createLoaders();
                this.config = Object.assign({}, modalConfigDefaults, config);
                this._showBackdrop();
                this.lastDismissReason = null;
                return this._showModal(content);
            };
        /**
         * @param {?} level
         * @return {?}
         */
        MDBModalService.prototype.hide = /**
         * @param {?} level
         * @return {?}
         */
            function (level) {
                var _this = this;
                if (this.modalsCount === 1) {
                    this._hideBackdrop();
                    this.resetScrollbar();
                }
                this.modalsCount = this.modalsCount >= 1 ? this.modalsCount - 1 : 0;
                setTimeout(( /**
                 * @return {?}
                 */function () {
                    _this._hideModal(level);
                    _this.removeLoaders(level);
                }), this.config.animated ? TransitionDurations.BACKDROP : 0);
            };
        /**
         * @return {?}
         */
        MDBModalService.prototype._showBackdrop = /**
         * @return {?}
         */
            function () {
                /** @type {?} */
                var isBackdropEnabled = this.config.backdrop || this.config.backdrop === 'static';
                /** @type {?} */
                var isBackdropInDOM = !this.backdropRef || !this.backdropRef.instance.isShown;
                if (this.modalsCount === 1) {
                    this.removeBackdrop();
                    if (isBackdropEnabled && isBackdropInDOM) {
                        this._backdropLoader
                            .attach(ModalBackdropComponent)
                            .to('body')
                            .show({ isAnimated: this.config.animated });
                        this.backdropRef = this._backdropLoader._componentRef;
                    }
                }
            };
        /**
         * @return {?}
         */
        MDBModalService.prototype._hideBackdrop = /**
         * @return {?}
         */
            function () {
                var _this = this;
                if (!this.backdropRef) {
                    return;
                }
                this.backdropRef.instance.isShown = false;
                /** @type {?} */
                var duration = this.config.animated ? TransitionDurations.BACKDROP : 0;
                setTimeout(( /**
                 * @return {?}
                 */function () { return _this.removeBackdrop(); }), duration);
            };
        /**
         * @param {?} content
         * @return {?}
         */
        MDBModalService.prototype._showModal = /**
         * @param {?} content
         * @return {?}
         */
            function (content) {
                /** @type {?} */
                var modalLoader = this.loaders[this.loaders.length - 1];
                /** @type {?} */
                var mdbModalRef = new MDBModalRef();
                /** @type {?} */
                var modalContainerRef = modalLoader
                    .provide({ provide: ModalOptions, useValue: this.config })
                    .provide({ provide: MDBModalRef, useValue: mdbModalRef })
                    .attach(ModalContainerComponent)
                    .to('body')
                    .show({
                    content: content,
                    isAnimated: this.config.animated,
                    data: this.config.data,
                    mdbModalService: this,
                });
                modalContainerRef.instance.focusModalElement();
                modalContainerRef.instance.level = this.getModalsCount();
                mdbModalRef.hide = ( /**
                 * @return {?}
                 */function () {
                    modalContainerRef.instance.hide();
                });
                mdbModalRef.content = modalLoader.getInnerComponent() || null;
                return mdbModalRef;
            };
        /**
         * @param {?} level
         * @return {?}
         */
        MDBModalService.prototype._hideModal = /**
         * @param {?} level
         * @return {?}
         */
            function (level) {
                /** @type {?} */
                var modalLoader = this.loaders[level - 1];
                if (modalLoader) {
                    modalLoader.hide();
                }
            };
        /**
         * @return {?}
         */
        MDBModalService.prototype.getModalsCount = /**
         * @return {?}
         */
            function () {
                return this.modalsCount;
            };
        /**
         * @param {?} reason
         * @return {?}
         */
        MDBModalService.prototype.setDismissReason = /**
         * @param {?} reason
         * @return {?}
         */
            function (reason) {
                this.lastDismissReason = reason;
            };
        /**
         * @protected
         * @return {?}
         */
        MDBModalService.prototype.removeBackdrop = /**
         * @protected
         * @return {?}
         */
            function () {
                this._backdropLoader.hide();
                this.backdropRef = null;
            };
        /** AFTER PR MERGE MODAL.COMPONENT WILL BE USING THIS CODE*/
        /** Scroll bar tricks */
        /** @internal */
        /** AFTER PR MERGE MODAL.COMPONENT WILL BE USING THIS CODE*/
        /** Scroll bar tricks */
        /**
         * \@internal
         * @return {?}
         */
        MDBModalService.prototype.checkScrollbar = /** AFTER PR MERGE MODAL.COMPONENT WILL BE USING THIS CODE*/
            /** Scroll bar tricks */
            /**
             * \@internal
             * @return {?}
             */
            function () {
                this.isBodyOverflowing = document.body.clientWidth < window.innerWidth;
                this.scrollbarWidth = this.getScrollbarWidth();
            };
        /**
         * @return {?}
         */
        MDBModalService.prototype.setScrollbar = /**
         * @return {?}
         */
            function () {
                if (!document) {
                    return;
                }
                this.originalBodyPadding = parseInt(window.getComputedStyle(document.body).getPropertyValue('padding-right') || '0', 10);
            };
        /**
         * @private
         * @return {?}
         */
        MDBModalService.prototype.resetScrollbar = /**
         * @private
         * @return {?}
         */
            function () {
                document.body.style.paddingRight = this.originalBodyPadding + 'px';
            };
        // thx d.walsh
        // thx d.walsh
        /**
         * @private
         * @return {?}
         */
        MDBModalService.prototype.getScrollbarWidth =
            // thx d.walsh
            /**
             * @private
             * @return {?}
             */
            function () {
                /** @type {?} */
                var scrollDiv = this.renderer.createElement('div');
                this.renderer.addClass(scrollDiv, ClassName.SCROLLBAR_MEASURER);
                this.renderer.appendChild(document.body, scrollDiv);
                /** @type {?} */
                var scrollbarWidth = scrollDiv.offsetWidth - scrollDiv.clientWidth;
                this.renderer.removeChild(document.body, scrollDiv);
                return scrollbarWidth;
            };
        /**
         * @private
         * @return {?}
         */
        MDBModalService.prototype._createLoaders = /**
         * @private
         * @return {?}
         */
            function () {
                /** @type {?} */
                var loader = this.clf.createLoader(this.el, this.vcr, this.renderer);
                this.copyEvent(loader.onBeforeShow, this.open);
                this.copyEvent(loader.onShown, this.opened);
                this.copyEvent(loader.onBeforeHide, this.close);
                this.copyEvent(loader.onHidden, this.closed);
                this.loaders.push(loader);
            };
        /**
         * @private
         * @param {?} level
         * @return {?}
         */
        MDBModalService.prototype.removeLoaders = /**
         * @private
         * @param {?} level
         * @return {?}
         */
            function (level) {
                this.loaders.splice(level - 1, 1);
                this.loaders.forEach(( /**
                 * @param {?} loader
                 * @param {?} i
                 * @return {?}
                 */function (loader, i) {
                    loader.instance.level = i + 1;
                }));
            };
        /**
         * @private
         * @param {?} from
         * @param {?} to
         * @return {?}
         */
        MDBModalService.prototype.copyEvent = /**
         * @private
         * @param {?} from
         * @param {?} to
         * @return {?}
         */
            function (from, to) {
                var _this = this;
                from.subscribe(( /**
                 * @return {?}
                 */function () {
                    to.emit(_this.lastDismissReason);
                }));
            };
        MDBModalService.decorators = [
            { type: i0.Injectable }
        ];
        /** @nocollapse */
        MDBModalService.ctorParameters = function () {
            return [
                { type: i0.RendererFactory2 },
                { type: ComponentLoaderFactory }
            ];
        };
        return MDBModalService;
    }());

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */
    var ModalModule = /** @class */ (function () {
        function ModalModule() {
        }
        /**
         * @return {?}
         */
        ModalModule.forRoot = /**
         * @return {?}
         */
            function () {
                return { ngModule: ModalModule, providers: [MDBModalService, ComponentLoaderFactory, PositioningService] };
            };
        ModalModule.decorators = [
            { type: i0.NgModule, args: [{
                        declarations: [ModalBackdropComponent, ModalDirective, ModalContainerComponent],
                        exports: [ModalBackdropComponent, ModalDirective],
                        entryComponents: [ModalBackdropComponent, ModalContainerComponent],
                        schemas: [i0.NO_ERRORS_SCHEMA]
                    },] }
        ];
        return ModalModule;
    }());

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */
    var NavbarService = /** @class */ (function () {
        function NavbarService() {
            this.navbarLinkClicks = new rxjs.Subject();
        }
        /**
         * @return {?}
         */
        NavbarService.prototype.getNavbarLinkClicks = /**
         * @return {?}
         */
            function () {
                return this.navbarLinkClicks.asObservable();
            };
        /**
         * @return {?}
         */
        NavbarService.prototype.setNavbarLinkClicks = /**
         * @return {?}
         */
            function () {
                this.navbarLinkClicks.next();
            };
        NavbarService.decorators = [
            { type: i0.Injectable }
        ];
        return NavbarService;
    }());

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */
    var LinksComponent = /** @class */ (function () {
        function LinksComponent(_navbarService, renderer) {
            this._navbarService = _navbarService;
            this.renderer = renderer;
            this.linkClick = new i0.EventEmitter();
        }
        /**
         * @return {?}
         */
        LinksComponent.prototype.ngAfterContentInit = /**
         * @return {?}
         */
            function () {
                var _this = this;
                setTimeout(( /**
                 * @return {?}
                 */function () {
                    _this.links.forEach(( /**
                     * @param {?} link
                     * @return {?}
                     */function (link) {
                        _this.renderer.listen(link.nativeElement, 'click', ( /**
                         * @return {?}
                         */function () {
                            _this._navbarService.setNavbarLinkClicks();
                        }));
                    }));
                }), 0);
            };
        LinksComponent.decorators = [
            { type: i0.Component, args: [{
                        // tslint:disable-next-line:component-selector
                        selector: 'links',
                        template: "\n    <ng-content></ng-content>\n  "
                    }] }
        ];
        /** @nocollapse */
        LinksComponent.ctorParameters = function () {
            return [
                { type: NavbarService },
                { type: i0.Renderer2 }
            ];
        };
        LinksComponent.propDecorators = {
            links: [{ type: i0.ContentChildren, args: [router.RouterLinkWithHref, { read: i0.ElementRef, descendants: true },] }],
            linkClick: [{ type: i0.Output }]
        };
        return LinksComponent;
    }());

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */
    var NavbarComponent = /** @class */ (function () {
        function NavbarComponent(renderer, _navbarService, _cdRef, _ngZone, _document) {
            var _this = this;
            this.renderer = renderer;
            this._navbarService = _navbarService;
            this._cdRef = _cdRef;
            this._ngZone = _ngZone;
            this._document = _document;
            this.containerInside = true;
            this.collapseId = 'navbarCollapse';
            this.scrollSensitivity = 120;
            this.scrollableNavbar = false;
            this.shown = false;
            this.duration = 350; // ms
            // ms
            this.collapse = true;
            this.showClass = false;
            this.collapsing = false;
            this._itemsLength = 0;
            this.ariaExpanded = false;
            // tslint:disable-next-line:max-line-length
            this.subscription = this._navbarService.getNavbarLinkClicks().subscribe(( /**
             * @param {?} navbarLinkClicks
             * @return {?}
             */function (navbarLinkClicks) {
                _this.closeNavbarOnClick(navbarLinkClicks);
            }));
        }
        /**
         * @param {?} navbarLinkClicks
         * @return {?}
         */
        NavbarComponent.prototype.closeNavbarOnClick = /**
         * @param {?} navbarLinkClicks
         * @return {?}
         */
            function (navbarLinkClicks) {
                this.navbarLinkClicks = navbarLinkClicks;
                if (this.showClass) {
                    this.hide();
                }
            };
        /**
         * @return {?}
         */
        NavbarComponent.prototype.addTogglerIconClasses = /**
         * @return {?}
         */
            function () {
                var _this = this;
                if (this.iconBackground) {
                    if (Array.isArray(this.iconBackground)) {
                        this.iconBackground.forEach(( /**
                         * @param {?} iconClass
                         * @return {?}
                         */function (iconClass) {
                            _this.renderer.addClass(_this.toggler.nativeElement, iconClass);
                        }));
                    }
                    else {
                        this.renderer.addClass(this.toggler.nativeElement, this.iconBackground);
                    }
                }
            };
        /**
         * @private
         * @return {?}
         */
        NavbarComponent.prototype._listenToScroll = /**
         * @private
         * @return {?}
         */
            function () {
                var _this = this;
                this._ngZone.runOutsideAngular(( /**
                 * @return {?}
                 */function () {
                    rxjs.fromEvent(_this._document, 'scroll').subscribe(( /**
                     * @return {?}
                     */function () {
                        if (window.pageYOffset > _this.scrollSensitivity) {
                            _this.renderer.addClass(_this.navbar.nativeElement, 'top-nav-collapse');
                        }
                        else {
                            _this.renderer.removeClass(_this.navbar.nativeElement, 'top-nav-collapse');
                        }
                    }));
                }));
            };
        /**
         * @return {?}
         */
        NavbarComponent.prototype.ngOnInit = /**
         * @return {?}
         */
            function () {
                /** @type {?} */
                var isDoubleNav = this.SideClass.split(' ');
                this.doubleNav = isDoubleNav.indexOf('double-nav') !== -1;
            };
        /**
         * @return {?}
         */
        NavbarComponent.prototype.ngAfterViewInit = /**
         * @return {?}
         */
            function () {
                var _this = this;
                if (!this.containerInside) {
                    /** @type {?} */
                    var childrens = Array.from(this.container.nativeElement.children);
                    childrens.forEach(( /**
                     * @param {?} child
                     * @return {?}
                     */function (child) {
                        _this.renderer.appendChild(_this.navbar.nativeElement, child);
                        _this.container.nativeElement.remove();
                    }));
                }
                if (this.el.nativeElement.children.length === 0) {
                    this.el.nativeElement.remove();
                }
                this.addTogglerIconClasses();
                if (this.scrollableNavbar) {
                    this.renderer.addClass(this.el.nativeElement, 'collapsed-navbar-scroll');
                }
                if (this.navbar.nativeElement.classList.contains('scrolling-navbar')) {
                    this._listenToScroll();
                }
            };
        /**
         * @return {?}
         */
        NavbarComponent.prototype.toggle = /**
         * @return {?}
         */
            function () {
                if (!this.collapsing) {
                    if (this.shown) {
                        this.hide();
                    }
                    else {
                        this.show();
                    }
                }
            };
        /**
         * @return {?}
         */
        NavbarComponent.prototype.show = /**
         * @return {?}
         */
            function () {
                var _this = this;
                this.shown = true;
                this.collapse = false;
                this.collapsing = true;
                this.ariaExpanded = true;
                setTimeout(( /**
                 * @return {?}
                 */function () {
                    _this.height = _this.el.nativeElement.scrollHeight;
                    _this.renderer.setStyle(_this.el.nativeElement, 'height', _this.height + 'px');
                }), 0);
                setTimeout(( /**
                 * @return {?}
                 */function () {
                    _this.collapsing = false;
                    _this.collapse = true;
                    _this.showClass = true;
                }), this.duration);
                this._cdRef.markForCheck();
            };
        /**
         * @return {?}
         */
        NavbarComponent.prototype.hide = /**
         * @return {?}
         */
            function () {
                var _this = this;
                if (this.shown) {
                    this.shown = false;
                    this.collapse = false;
                    this.showClass = false;
                    this.collapsing = true;
                    this.ariaExpanded = false;
                    setTimeout(( /**
                     * @return {?}
                     */function () {
                        _this.renderer.setStyle(_this.el.nativeElement, 'height', '0px');
                    }), 0);
                    setTimeout(( /**
                     * @return {?}
                     */function () {
                        _this.collapsing = false;
                        _this.collapse = true;
                    }), this.duration);
                }
                this._cdRef.markForCheck();
            };
        Object.defineProperty(NavbarComponent.prototype, "displayStyle", {
            get: /**
             * @return {?}
             */ function () {
                if (!this.containerInside) {
                    return 'flex';
                }
                else {
                    return '';
                }
            },
            enumerable: true,
            configurable: true
        });
        /**
         * @param {?} event
         * @return {?}
         */
        NavbarComponent.prototype.onResize = /**
         * @param {?} event
         * @return {?}
         */
            function (event) {
                var _this = this;
                /** @type {?} */
                var breakpoint = 0;
                if (this.SideClass.includes('navbar-expand-xl')) {
                    breakpoint = 1200;
                }
                else if (this.SideClass.includes('navbar-expand-lg')) {
                    breakpoint = 992;
                }
                else if (this.SideClass.includes('navbar-expand-md')) {
                    breakpoint = 768;
                }
                else if (this.SideClass.includes('navbar-expand-sm')) {
                    breakpoint = 576;
                }
                else {
                    breakpoint = event.target.innerWidth + 1;
                }
                if (event.target.innerWidth < breakpoint) {
                    if (!this.shown) {
                        this.collapse = false;
                        this.renderer.setStyle(this.el.nativeElement, 'height', '0px');
                        this.renderer.setStyle(this.el.nativeElement, 'opacity', '0');
                        setTimeout(( /**
                         * @return {?}
                         */function () {
                            _this.height = _this.el.nativeElement.scrollHeight;
                            _this.collapse = true;
                            _this.renderer.setStyle(_this.el.nativeElement, 'opacity', '');
                        }), 4);
                    }
                }
                else {
                    this.collapsing = false;
                    this.shown = false;
                    this.showClass = false;
                    this.collapse = true;
                    this.ariaExpanded = false;
                    this.renderer.setStyle(this.el.nativeElement, 'height', '');
                }
            };
        /**
         * @return {?}
         */
        NavbarComponent.prototype.ngAfterContentChecked = /**
         * @return {?}
         */
            function () {
                if (this.el.nativeElement.firstElementChild) {
                    if (this._itemsLength !==
                        this.el.nativeElement.firstElementChild.firstElementChild.children.length) {
                        this.height = this.el.nativeElement.firstElementChild.firstElementChild.clientHeight;
                        this.renderer.setStyle(this.el.nativeElement, 'height', this.height + 'px');
                    }
                    this._itemsLength = this.el.nativeElement.firstElementChild.firstElementChild.children.length;
                }
                this._cdRef.markForCheck();
            };
        NavbarComponent.decorators = [
            { type: i0.Component, args: [{
                        selector: 'mdb-navbar',
                        template: "<nav class=\"{{ SideClass }}\" #nav>\n  <div [ngClass]=\"{ container: containerInside }\" [ngStyle]=\"{ display: displayStyle }\" #container>\n    <ng-content select=\"mdb-navbar-brand\"></ng-content>\n    <ng-content select=\"logo\"></ng-content>\n    <ng-content></ng-content>\n    <ng-content *ngIf=\"this.doubleNav == true\" select=\"navlinks\"></ng-content>\n    <div *ngIf=\"this.doubleNav == false\">\n      <button\n        #toggler\n        class=\"navbar-toggler\"\n        type=\"button\"\n        [attr.aria-controls]=\"collapseId\"\n        [attr.aria-expanded]=\"ariaExpanded\"\n        aria-label=\"Toggle navigation\"\n        (click)=\"toggle(); $event.preventDefault()\"\n        mdbWavesEffect\n        *ngIf=\"this.el.nativeElement.children.length !== 0\"\n      >\n        <span class=\"navbar-toggler-icon\"> </span>\n      </button>\n    </div>\n    <div\n      #navbar\n      [attr.id]=\"collapseId\"\n      [style.height]=\"height\"\n      class=\"navbar-collapse collapse\"\n      [ngClass]=\"{ collapse: collapse, show: showClass, collapsing: collapsing }\"\n    >\n      <ng-content select=\"links\"></ng-content>\n    </div>\n  </div>\n</nav>\n",
                        encapsulation: i0.ViewEncapsulation.None,
                        changeDetection: i0.ChangeDetectionStrategy.OnPush,
                        styles: [".navbar{box-shadow:0 2px 5px 0 rgba(0,0,0,.16),0 2px 10px 0 rgba(0,0,0,.12);font-weight:300}.navbar form .md-form input{margin:0 5px 1px 8px}.navbar .breadcrumb{margin:0;padding:.3rem 0 0 1rem;background-color:inherit;font-size:15px;font-weight:300}.navbar .breadcrumb .breadcrumb-item{color:#fff}.navbar .breadcrumb .breadcrumb-item.active,.navbar .breadcrumb .breadcrumb-item:before{color:rgba(255,255,255,.65)}.navbar .navbar-toggler{outline:0;border-width:0}.navbar .nav-flex-icons{flex-direction:row}.navbar .nav-item .nav-link{display:block}.navbar .nav-item .nav-link.disabled:active{pointer-events:none}.navbar .nav-item .nav-link .fab,.navbar .nav-item .nav-link .far,.navbar .nav-item .nav-link .fas{padding-right:3px;padding-left:3px}@media (max-width:992px){.navbar .container{width:100%}.navbar .container .navbar-toggler-right{right:0}.navbar .nav-item .nav-link{padding-right:6px;padding-left:6px}}.navbar .dropdown-menu{position:absolute!important;margin-top:0}.navbar .dropdown-menu a{padding:10px;font-size:.9375rem;font-weight:300;color:#000}@media (max-width:600px){.navbar .dropdown-menu form{width:17rem}}.navbar.navbar-light .navbar-nav .nav-item .nav-link.disbled,.navbar.navbar-light .navbar-nav .nav-item .nav-link.disbled:hover{color:rgba(0,0,0,.5)}.navbar.navbar-light .navbar-toggler-icon{background-image:url(\"data:image/svg+xml;charset=utf8,%3Csvg viewBox='0 0 32 32' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath stroke='rgba(0, 0, 0, 0.9)' stroke-width='2' stroke-linecap='round' stroke-miterlimit='10' d='M4 8h24M4 16h24M4 24h24'/%3E%3C/svg%3E\");cursor:pointer}.navbar.navbar-light .breadcrumb .nav-item .nav-link,.navbar.navbar-light .navbar-nav .nav-item .nav-link{color:#000;transition:.35s}.navbar.navbar-light .breadcrumb .nav-item .nav-link:hover,.navbar.navbar-light .navbar-nav .nav-item .nav-link:hover{color:rgba(0,0,0,.75)}.navbar.navbar-light .breadcrumb .nav-item.active>.nav-link,.navbar.navbar-light .navbar-nav .nav-item.active>.nav-link{background-color:rgba(0,0,0,.1)}.navbar.navbar-light .breadcrumb .nav-item.active>.nav-link:hover,.navbar.navbar-light .navbar-nav .nav-item.active>.nav-link:hover,.navbar.navbar-light .navbar-toggler{color:#000}.navbar.navbar-light form .md-form input{border-bottom:1px solid #000}.navbar.navbar-light form .md-form input:focus:not([readonly]){border-color:#4285f4}.navbar.navbar-light form .md-form .form-control{color:#000}.navbar.navbar-light form .md-form .form-control::-webkit-input-placeholder{color:#000;font-weight:300}.navbar.navbar-light form .md-form .form-control::-moz-placeholder{color:#000;font-weight:300}.navbar.navbar-light form .md-form .form-control:-ms-input-placeholder{color:#000;font-weight:300}.navbar.navbar-light form .md-form .form-control::-ms-input-placeholder{color:#000;font-weight:300}.navbar.navbar-light form .md-form .form-control::placeholder{color:#000;font-weight:300}.navbar.navbar-dark .navbar-nav .nav-item .nav-link.disbled,.navbar.navbar-dark .navbar-nav .nav-item .nav-link.disbled:hover{color:rgba(255,255,255,.5)}.navbar.navbar-dark .navbar-toggler-icon{background-image:url(\"data:image/svg+xml;charset=utf8,%3Csvg viewBox='0 0 32 32' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath stroke='rgba(255, 255, 255, 0.9)' stroke-width='2' stroke-linecap='round' stroke-miterlimit='10' d='M4 8h24M4 16h24M4 24h24'/%3E%3C/svg%3E\");cursor:pointer}.navbar.navbar-dark .breadcrumb .nav-item .nav-link,.navbar.navbar-dark .navbar-nav .nav-item .nav-link{color:#fff;transition:.35s}.navbar.navbar-dark .breadcrumb .nav-item .nav-link:hover,.navbar.navbar-dark .navbar-nav .nav-item .nav-link:hover{color:rgba(255,255,255,.75)}.navbar.navbar-dark .breadcrumb .nav-item.active>.nav-link,.navbar.navbar-dark .navbar-nav .nav-item.active>.nav-link{background-color:rgba(255,255,255,.1)}.navbar.navbar-dark .breadcrumb .nav-item.active>.nav-link:hover,.navbar.navbar-dark .navbar-nav .nav-item.active>.nav-link:hover,.navbar.navbar-dark .navbar-toggler{color:#fff}.navbar.navbar-dark form .md-form input{border-bottom:1px solid #fff}.navbar.navbar-dark form .md-form input:focus:not([readonly]){border-color:#4285f4}.navbar.navbar-dark form .md-form .form-control{color:#fff}.navbar.navbar-dark form .md-form .form-control::-webkit-input-placeholder{color:#fff;font-weight:300}.navbar.navbar-dark form .md-form .form-control::-moz-placeholder{color:#fff;font-weight:300}.navbar.navbar-dark form .md-form .form-control:-ms-input-placeholder{color:#fff;font-weight:300}.navbar.navbar-dark form .md-form .form-control::-ms-input-placeholder{color:#fff;font-weight:300}.navbar.navbar-dark form .md-form .form-control::placeholder{color:#fff;font-weight:300}@media (min-width:600px){.navbar .dropdown-menu form{width:22rem}.navbar.scrolling-navbar{transition:background .5s ease-in-out,padding .5s ease-in-out;padding-top:12px;padding-bottom:12px}.navbar.scrolling-navbar .navbar-nav>li{transition-duration:1s}.navbar.scrolling-navbar.top-nav-collapse{padding-top:5px;padding-bottom:5px}}@media (min-width:1200px){.navbar.navbar-expand-xl links,.navbar.navbar-expand-xl navlinks{display:flex;flex-direction:row;align-items:center!important;align-self:center!important;width:100%}}@media (min-width:992px){.navbar>logo>div>a img{margin-left:20px}.navbar.navbar-expand-lg links,.navbar.navbar-expand-lg navlinks{display:flex;flex-direction:row;align-items:center!important;align-self:center!important;width:100%}}@media (min-width:768px){.navbar.navbar-expand-md links,.navbar.navbar-expand-md navlinks{display:flex;flex-direction:row;width:100%}}@media (min-width:576px){.navbar.navbar-expand-sm links,.navbar.navbar-expand-sm navlinks{display:flex;flex-direction:row;width:100%}}@media all and (max-width:992px){.collapsed-navbar-scroll{max-height:calc(100vh - 40px);overflow-y:scroll}}.navbar-container{order:-1;width:50px!important;padding-left:5px;padding-right:5px}.navbar-nav .dropdown-menu-right.dropdown-menu{left:unset}.navbar-nav .dropdown-menu{top:100%!important;-webkit-transform:translate3d(0,0,0)!important;transform:translate3d(0,0,0)!important}.breadcrumbs{display:flex;padding-left:5px;padding-right:5px;order:0;align-items:center}@media (min-width:1441px){.breadcrumbs{margin-left:-.6rem}}@supports (-ms-ime-align:auto){.ie-nav .navbar-toggler{position:absolute;margin-top:-40px;right:0}@media all and (min-width:992px){.ie-nav .navbar-nav.nav-flex-icons{position:absolute;top:30%;right:0}.ie-nav .navbar-nav{position:absolute;top:30%;margin-left:88px}.ie-nav .navbar-brand>img{margin-top:-2px;padding-right:16px}.intro-non-fixed-nav>links .navbar-collapse{display:inline-flex!important;align-items:center!important;justify-content:space-between!important}.intro-fixed-nav .navbar-nav.nav-flex-icons{position:absolute;top:30%;right:0}.intro-fixed-nav .navbar-nav{position:absolute;top:30%;margin-left:88px}.intro-fixed-nav .navbar-brand img{margin-top:-2px;padding-right:16px}}.intro-fixed-nav .navbar-toggler{position:absolute;margin-top:-40px;right:0}}@media all and (-ms-high-contrast:none) and (min-width:992px),all and (-ms-high-contrast:active) and (min-width:992px){.ie-nav .navbar-nav.nav-flex-icons{position:absolute;top:30%;right:0}.ie-nav .navbar-nav{position:absolute;top:30%;margin-left:88px}.ie-nav .navbar-brand>img{margin-top:-2px;padding-right:16px}.intro-non-fixed-nav>links .navbar-collapse{display:inline-flex!important;align-items:center!important;justify-content:space-between!important}.intro-fixed-nav .navbar-nav.nav-flex-icons{position:absolute;top:30%;right:0}.intro-fixed-nav .navbar-nav{position:absolute;top:30%;margin-left:88px}.intro-fixed-nav .navbar-brand img{margin-top:-2px;padding-right:16px}}@media all and (-ms-high-contrast:none),(-ms-high-contrast:active){.ie-nav .navbar-toggler,.intro-fixed-nav .navbar-toggler{position:absolute;margin-top:-40px;right:0}}[type=reset],[type=submit],button,html [type=button]{-webkit-appearance:none}"]
                    }] }
        ];
        /** @nocollapse */
        NavbarComponent.ctorParameters = function () {
            return [
                { type: i0.Renderer2 },
                { type: NavbarService },
                { type: i0.ChangeDetectorRef },
                { type: i0.NgZone },
                { type: undefined, decorators: [{ type: i0.Inject, args: [common.DOCUMENT,] }] }
            ];
        };
        NavbarComponent.propDecorators = {
            iconBackground: [{ type: i0.Input }],
            SideClass: [{ type: i0.Input }],
            containerInside: [{ type: i0.Input }],
            collapseId: [{ type: i0.Input }],
            scrollSensitivity: [{ type: i0.Input }],
            scrollableNavbar: [{ type: i0.Input }],
            el: [{ type: i0.ViewChild, args: ['navbar', { static: true },] }],
            mobile: [{ type: i0.ViewChild, args: ['mobile', { static: false },] }],
            navbar: [{ type: i0.ViewChild, args: ['nav', { static: true },] }],
            container: [{ type: i0.ViewChild, args: ['container', { static: true },] }],
            toggler: [{ type: i0.ViewChild, args: ['toggler', { static: false },] }],
            links: [{ type: i0.ContentChild, args: [LinksComponent, { static: false },] }],
            onResize: [{ type: i0.HostListener, args: ['window:resize', ['$event'],] }]
        };
        return NavbarComponent;
    }());

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */
    var LogoComponent = /** @class */ (function () {
        function LogoComponent() {
        }
        LogoComponent.decorators = [
            { type: i0.Component, args: [{
                        selector: 'logo, mdb-navbar-brand',
                        template: "<ng-content></ng-content>"
                    }] }
        ];
        return LogoComponent;
    }());

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */
    var NavlinksComponent = /** @class */ (function () {
        function NavlinksComponent(_navbarService, renderer) {
            this._navbarService = _navbarService;
            this.renderer = renderer;
            this.linkClick = new i0.EventEmitter();
        }
        /**
         * @return {?}
         */
        NavlinksComponent.prototype.ngAfterContentInit = /**
         * @return {?}
         */
            function () {
                var _this = this;
                setTimeout(( /**
                 * @return {?}
                 */function () {
                    _this.links.forEach(( /**
                     * @param {?} link
                     * @return {?}
                     */function (link) {
                        _this.renderer.listen(link.nativeElement, 'click', ( /**
                         * @return {?}
                         */function () {
                            _this._navbarService.setNavbarLinkClicks();
                        }));
                    }));
                }), 0);
            };
        NavlinksComponent.decorators = [
            { type: i0.Component, args: [{
                        // tslint:disable-next-line:component-selector
                        selector: 'navlinks',
                        template: "\n    <ng-content></ng-content>\n  "
                    }] }
        ];
        /** @nocollapse */
        NavlinksComponent.ctorParameters = function () {
            return [
                { type: NavbarService },
                { type: i0.Renderer2 }
            ];
        };
        NavlinksComponent.propDecorators = {
            links: [{ type: i0.ContentChildren, args: [router.RouterLinkWithHref, { read: i0.ElementRef, descendants: true },] }],
            linkClick: [{ type: i0.Output }]
        };
        return NavlinksComponent;
    }());

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */
    var NavbarModule = /** @class */ (function () {
        function NavbarModule() {
        }
        NavbarModule.decorators = [
            { type: i0.NgModule, args: [{
                        imports: [common.CommonModule],
                        declarations: [NavbarComponent, LinksComponent, LogoComponent, NavlinksComponent],
                        exports: [NavbarComponent, LinksComponent, LogoComponent, NavlinksComponent],
                        providers: [NavbarService]
                    },] }
        ];
        return NavbarModule;
    }());

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */
    /**
     * Configuration service for the Popover directive.
     * You can inject this service, typically in your root component, and customize
     * the values of its properties in order to provide default values for all the
     * popovers used in the application.
     */
    var PopoverConfig = /** @class */ (function () {
        function PopoverConfig() {
            /**
             * Placement of a popover. Accepts: "top", "bottom", "left", "right"
             */
            this.placement = 'top';
            /**
             * Specifies events that should trigger. Supports a space separated list of
             * event names.
             */
            this.triggers = 'click';
        }
        PopoverConfig.decorators = [
            { type: i0.Injectable }
        ];
        return PopoverConfig;
    }());

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */
    var PopoverContainerComponent = /** @class */ (function () {
        function PopoverContainerComponent(config) {
            this.show = '!isBs3';
            this.role = 'tooltip';
            Object.assign(this, config);
        }
        Object.defineProperty(PopoverContainerComponent.prototype, "isBs3", {
            get: /**
             * @return {?}
             */ function () {
                return isBs3();
            },
            enumerable: true,
            configurable: true
        });
        /**
         * @return {?}
         */
        PopoverContainerComponent.prototype.ngOnInit = /**
         * @return {?}
         */
            function () {
                this.class =
                    'popover-fadeIn popover in popover-' +
                        this.placement +
                        ' ' +
                        this.placement +
                        ' bs-popover-' +
                        this.placement +
                        ' ' +
                        this.containerClass;
            };
        PopoverContainerComponent.decorators = [
            { type: i0.Component, args: [{
                        selector: 'mdb-popover-container',
                        changeDetection: i0.ChangeDetectionStrategy.OnPush,
                        template: "\n    <h3 class=\"popover-header\" [ngClass]=\"headerClass\" *ngIf=\"title\">{{ title }}</h3>\n    <div class=\"popover-body\" [ngClass]=\"bodyClass\">\n      <ng-content></ng-content>\n    </div>\n  ",
                        encapsulation: i0.ViewEncapsulation.None,
                        styles: [".popover.bs-tether-element-attached-bottom,.popover.popover-top{margin-top:-10px}.popover.bs-tether-element-attached-bottom::after,.popover.bs-tether-element-attached-bottom::before,.popover.popover-top::after,.popover.popover-top::before{left:50%;border-bottom-width:0}.popover.bs-tether-element-attached-bottom::before,.popover.popover-top::before{bottom:-11px;margin-left:-11px;border-top-color:rgba(0,0,0,.25)}.popover.bs-tether-element-attached-bottom::after,.popover.popover-top::after{bottom:-10px;margin-left:-10px;border-top-color:#fff}.popover.bs-tether-element-attached-left,.popover.popover-right{margin-left:10px}.popover.bs-tether-element-attached-left::after,.popover.bs-tether-element-attached-left::before,.popover.popover-right::after,.popover.popover-right::before{top:50%;border-left-width:0}.popover.bs-tether-element-attached-left::before,.popover.popover-right::before{left:-11px;margin-top:-11px;border-right-color:rgba(0,0,0,.25)}.popover.bs-tether-element-attached-left::after,.popover.popover-right::after{left:-10px;margin-top:-10px;border-right-color:#fff}.popover.bs-tether-element-attached-top,.popover.popover-bottom{margin-top:10px}.popover.bs-tether-element-attached-top::after,.popover.bs-tether-element-attached-top::before,.popover.popover-bottom::after,.popover.popover-bottom::before{left:50%;border-top-width:0}.popover.bs-tether-element-attached-top::before,.popover.popover-bottom::before{top:-11px;margin-left:-11px;border-bottom-color:rgba(0,0,0,.25)}.popover.bs-tether-element-attached-top::after,.popover.popover-bottom::after{top:-10px;margin-left:-10px;border-bottom-color:#f7f7f7}.popover.bs-tether-element-attached-top .popover-title::before,.popover.popover-bottom .popover-title::before{position:absolute;top:0;left:50%;display:block;width:20px;margin-left:-10px;content:'';border-bottom:1px solid #f7f7f7}.popover.bs-tether-element-attached-right,.popover.popover-left{margin-left:-10px}.popover.bs-tether-element-attached-right::after,.popover.bs-tether-element-attached-right::before,.popover.popover-left::after,.popover.popover-left::before{top:50%;border-right-width:0}.popover.bs-tether-element-attached-right::before,.popover.popover-left::before{right:-11px;margin-top:-11px;border-left-color:rgba(0,0,0,.25)}.popover.bs-tether-element-attached-right::after,.popover.popover-left::after{right:-10px;margin-top:-10px;border-left-color:#fff}.popover::after,.popover::before{position:absolute;display:block;width:0;height:0;border-color:transparent;border-style:solid}.popover::before{content:'';border-width:11px}.popover::after{content:'';border-width:10px}@-webkit-keyframes fadeInPopover{from{opacity:0}to{opacity:1}}@keyframes fadeInPopover{from{opacity:0}to{opacity:1}}.popover-fadeIn{-webkit-animation-name:fadeInPopover;animation-name:fadeInPopover;-webkit-animation-delay:.2s;animation-delay:.2s;-webkit-animation-duration:.2s;animation-duration:.2s;-webkit-animation-fill-mode:both;animation-fill-mode:both}"]
                    }] }
        ];
        /** @nocollapse */
        PopoverContainerComponent.ctorParameters = function () {
            return [
                { type: PopoverConfig }
            ];
        };
        PopoverContainerComponent.propDecorators = {
            placement: [{ type: i0.Input }],
            title: [{ type: i0.Input }],
            show: [{ type: i0.HostBinding, args: ['class.show',] }],
            role: [{ type: i0.HostBinding, args: ['attr.role',] }],
            class: [{ type: i0.HostBinding, args: ['class',] }]
        };
        return PopoverContainerComponent;
    }());

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */
    /**
     * A lightweight, extensible directive for fancy popover creation.
     */
    var PopoverDirective = /** @class */ (function () {
        function PopoverDirective(_elementRef, _renderer, _viewContainerRef, _config, cis, _positionService) {
            this._positionService = _positionService;
            this.dynamicPosition = true;
            this.outsideClick = false;
            this._popover = cis
                .createLoader(_elementRef, _viewContainerRef, _renderer)
                .provide({ provide: PopoverConfig, useValue: _config });
            Object.assign(this, _config);
            this.onShown = this._popover.onShown;
            this.shown = this._popover.onShown;
            this.onHidden = this._popover.onHidden;
            this.hidden = this._popover.onHidden;
        }
        Object.defineProperty(PopoverDirective.prototype, "isOpen", {
            /**
             * Returns whether or not the popover is currently being shown
             */
            get: /**
             * Returns whether or not the popover is currently being shown
             * @return {?}
             */ function () {
                return this._popover.isShown;
            },
            set: /**
             * @param {?} value
             * @return {?}
             */ function (value) {
                if (value) {
                    this.show();
                }
                else {
                    this.hide();
                }
            },
            enumerable: true,
            configurable: true
        });
        /**
         * Opens an element’s popover. This is considered a “manual” triggering of
         * the popover.
         */
        /**
         * Opens an element’s popover. This is considered a “manual” triggering of
         * the popover.
         * @return {?}
         */
        PopoverDirective.prototype.show = /**
         * Opens an element’s popover. This is considered a “manual” triggering of
         * the popover.
         * @return {?}
         */
            function () {
                if (this._popover.isShown) {
                    return;
                }
                this._positionService.setOptions({
                    modifiers: {
                        flip: {
                            enabled: this.dynamicPosition,
                        },
                        preventOverflow: {
                            enabled: this.dynamicPosition,
                        },
                    },
                });
                this._popover
                    .attach(PopoverContainerComponent)
                    .to(this.container)
                    .position({ attachment: this.placement })
                    .show({
                    content: this.mdbPopover,
                    placement: this.placement,
                    title: this.mdbPopoverHeader || this.popoverTitle,
                    containerClass: this.containerClass ? this.containerClass : '',
                    bodyClass: this.bodyClass ? this.bodyClass : '',
                    headerClass: this.headerClass ? this.headerClass : '',
                });
                this.isOpen = true;
                if (!this.dynamicPosition) {
                    this._positionService.calcPosition();
                    this._positionService.deletePositionElement(this._popover._componentRef.location);
                }
            };
        /**
         * Closes an element’s popover. This is considered a “manual” triggering of
         * the popover.
         */
        /**
         * Closes an element’s popover. This is considered a “manual” triggering of
         * the popover.
         * @return {?}
         */
        PopoverDirective.prototype.hide = /**
         * Closes an element’s popover. This is considered a “manual” triggering of
         * the popover.
         * @return {?}
         */
            function () {
                if (this.isOpen) {
                    this._popover.hide();
                    this.isOpen = false;
                }
            };
        /**
         * Toggles an element’s popover. This is considered a “manual” triggering of
         * the popover.
         */
        /**
         * Toggles an element’s popover. This is considered a “manual” triggering of
         * the popover.
         * @return {?}
         */
        PopoverDirective.prototype.toggle = /**
         * Toggles an element’s popover. This is considered a “manual” triggering of
         * the popover.
         * @return {?}
         */
            function () {
                if (this.isOpen) {
                    return this.hide();
                }
                this.show();
            };
        /**
         * @param {?} event
         * @return {?}
         */
        PopoverDirective.prototype.onclick = /**
         * @param {?} event
         * @return {?}
         */
            function (event) {
                if (this.triggers.toString().includes('focus')) {
                    event.stopPropagation();
                    this.show();
                }
            };
        /**
         * @return {?}
         */
        PopoverDirective.prototype.onblur = /**
         * @return {?}
         */
            function () {
                if (this.triggers.toString().includes('focus') && this.isOpen) {
                    this.hide();
                }
            };
        // fix(popover): popover with outsideClick='true' will now close after clicking in document on iPad Safari
        // fix(popover): popover with outsideClick='true' will now close after clicking in document on iPad Safari
        /**
         * @param {?} event
         * @return {?}
         */
        PopoverDirective.prototype.onTouchStart =
            // fix(popover): popover with outsideClick='true' will now close after clicking in document on iPad Safari
            /**
             * @param {?} event
             * @return {?}
             */
            function (event) {
                if (this.outsideClick && !event.target.classList.contains('popover-body')) {
                    this.hide();
                }
            };
        /**
         * @return {?}
         */
        PopoverDirective.prototype.ngOnInit = /**
         * @return {?}
         */
            function () {
                var _this = this;
                this._popover.listen({
                    triggers: this.triggers,
                    outsideClick: this.outsideClick,
                    show: ( /**
                     * @return {?}
                     */function () { return _this.show(); }),
                });
            };
        /**
         * @return {?}
         */
        PopoverDirective.prototype.dispose = /**
         * @return {?}
         */
            function () {
                this._popover.dispose();
            };
        /**
         * @return {?}
         */
        PopoverDirective.prototype.ngOnDestroy = /**
         * @return {?}
         */
            function () {
                this._popover.dispose();
            };
        PopoverDirective.decorators = [
            { type: i0.Directive, args: [{ selector: '[mdbPopover]', exportAs: 'bs-mdbPopover' },] }
        ];
        /** @nocollapse */
        PopoverDirective.ctorParameters = function () {
            return [
                { type: i0.ElementRef },
                { type: i0.Renderer2 },
                { type: i0.ViewContainerRef },
                { type: PopoverConfig },
                { type: ComponentLoaderFactory },
                { type: PositioningService }
            ];
        };
        PopoverDirective.propDecorators = {
            containerClass: [{ type: i0.Input }],
            bodyClass: [{ type: i0.Input }],
            headerClass: [{ type: i0.Input }],
            mdbPopover: [{ type: i0.Input }],
            mdbPopoverHeader: [{ type: i0.Input }],
            popoverTitle: [{ type: i0.Input }],
            placement: [{ type: i0.Input }],
            triggers: [{ type: i0.Input }],
            container: [{ type: i0.Input }],
            isOpen: [{ type: i0.Input }],
            dynamicPosition: [{ type: i0.Input }],
            outsideClick: [{ type: i0.Input }],
            onShown: [{ type: i0.Output }],
            shown: [{ type: i0.Output }],
            onHidden: [{ type: i0.Output }],
            hidden: [{ type: i0.Output }],
            onclick: [{ type: i0.HostListener, args: ['click', ['$event'],] }],
            onblur: [{ type: i0.HostListener, args: ['window:click',] }],
            onTouchStart: [{ type: i0.HostListener, args: ['document:touchstart', ['$event'],] }]
        };
        return PopoverDirective;
    }());

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */
    var PopoverModule = /** @class */ (function () {
        function PopoverModule() {
        }
        /**
         * @return {?}
         */
        PopoverModule.forRoot = /**
         * @return {?}
         */
            function () {
                return {
                    ngModule: PopoverModule,
                    providers: [PopoverConfig, ComponentLoaderFactory, PositioningService]
                };
            };
        PopoverModule.decorators = [
            { type: i0.NgModule, args: [{
                        imports: [common.CommonModule],
                        declarations: [PopoverDirective, PopoverContainerComponent],
                        exports: [PopoverDirective],
                        entryComponents: [PopoverContainerComponent]
                    },] }
        ];
        return PopoverModule;
    }());

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */
    var MdbTableDirective = /** @class */ (function () {
        function MdbTableDirective(el, renderer) {
            this.el = el;
            this.renderer = renderer;
            this.stickyHeader = false;
            this.stickyHeaderBgColor = '';
            this.stickyHeaderTextColor = '';
            this._dataSource = [];
            this._dataSourceChanged = new rxjs.Subject();
        }
        /**
         * @param {?} newRow
         * @return {?}
         */
        MdbTableDirective.prototype.addRow = /**
         * @param {?} newRow
         * @return {?}
         */
            function (newRow) {
                this.getDataSource().push(newRow);
            };
        /**
         * @param {?} index
         * @param {?} row
         * @return {?}
         */
        MdbTableDirective.prototype.addRowAfter = /**
         * @param {?} index
         * @param {?} row
         * @return {?}
         */
            function (index, row) {
                this.getDataSource().splice(index, 0, row);
            };
        /**
         * @param {?} index
         * @return {?}
         */
        MdbTableDirective.prototype.removeRow = /**
         * @param {?} index
         * @return {?}
         */
            function (index) {
                this.getDataSource().splice(index, 1);
            };
        /**
         * @return {?}
         */
        MdbTableDirective.prototype.rowRemoved = /**
         * @return {?}
         */
            function () {
                /** @type {?} */
                var rowRemoved = new rxjs.Observable(( /**
                 * @param {?} observer
                 * @return {?}
                 */function (observer) {
                    observer.next(true);
                }));
                return rowRemoved;
            };
        /**
         * @return {?}
         */
        MdbTableDirective.prototype.removeLastRow = /**
         * @return {?}
         */
            function () {
                this.getDataSource().pop();
            };
        /**
         * @return {?}
         */
        MdbTableDirective.prototype.getDataSource = /**
         * @return {?}
         */
            function () {
                return this._dataSource;
            };
        /**
         * @param {?} data
         * @return {?}
         */
        MdbTableDirective.prototype.setDataSource = /**
         * @param {?} data
         * @return {?}
         */
            function (data) {
                this._dataSource = data;
                this._dataSourceChanged.next(this.getDataSource());
            };
        /**
         * @return {?}
         */
        MdbTableDirective.prototype.dataSourceChange = /**
         * @return {?}
         */
            function () {
                return this._dataSourceChanged;
            };
        /**
         * @param {?} searchKey
         * @return {?}
         */
        MdbTableDirective.prototype.filterLocalDataBy = /**
         * @param {?} searchKey
         * @return {?}
         */
            function (searchKey) {
                return this.getDataSource().filter(( /**
                 * @param {?} obj
                 * @return {?}
                 */function (obj) {
                    return Object.keys(obj).some(( /**
                     * @param {?} key
                     * @return {?}
                     */function (key) {
                        if (obj[key]) {
                            // Fix(tableSearch): table search will now able to filter through nested data
                            return ( /** @type {?} */(JSON.stringify(obj)
                                .toLowerCase()
                                .includes(searchKey)));
                        }
                    }));
                }));
            };
        /**
         * @param {?} searchKey
         * @param {?} keys
         * @return {?}
         */
        MdbTableDirective.prototype.filterLocalDataByFields = /**
         * @param {?} searchKey
         * @param {?} keys
         * @return {?}
         */
            function (searchKey, keys) {
                return this.getDataSource().filter(( /**
                 * @param {?} obj
                 * @return {?}
                 */function (obj) {
                    return Object.keys(obj).some(( /**
                     * @param {?} key
                     * @return {?}
                     */function (key) {
                        if (keys.includes(key)) {
                            if (obj[key].toLowerCase().includes(searchKey)) {
                                return obj[key];
                            }
                        }
                    }));
                }));
            };
        /**
         * @param {?} searchKey
         * @param {?=} keys
         * @return {?}
         */
        MdbTableDirective.prototype.filterLocalDataByMultipleFields = /**
         * @param {?} searchKey
         * @param {?=} keys
         * @return {?}
         */
            function (searchKey, keys) {
                /** @type {?} */
                var items = searchKey.split(' ').map(( /**
                 * @param {?} x
                 * @return {?}
                 */function (x) { return x.toLowerCase(); }));
                return this.getDataSource().filter(( /**
                 * @param {?} x
                 * @return {?}
                 */function (x) {
                    var e_1, _a;
                    try {
                        for (var items_1 = __values(items), items_1_1 = items_1.next(); !items_1_1.done; items_1_1 = items_1.next()) {
                            var item = items_1_1.value;
                            /** @type {?} */
                            var flag = false;
                            if (keys !== undefined) {
                                for (var prop in x) {
                                    if (keys.includes(prop)) {
                                        if (x[prop].toLowerCase().indexOf(item) !== -1) {
                                            flag = true;
                                            break;
                                        }
                                    }
                                }
                            }
                            if (keys === undefined) {
                                for (var prop in x) {
                                    if (x[prop].toLowerCase().indexOf(item) !== -1) {
                                        flag = true;
                                        break;
                                    }
                                }
                            }
                            if (!flag) {
                                return false;
                            }
                        }
                    }
                    catch (e_1_1) {
                        e_1 = { error: e_1_1 };
                    }
                    finally {
                        try {
                            if (items_1_1 && !items_1_1.done && (_a = items_1.return))
                                _a.call(items_1);
                        }
                        finally {
                            if (e_1)
                                throw e_1.error;
                        }
                    }
                    return true;
                }));
            };
        /**
         * @param {?} searchKey
         * @return {?}
         */
        MdbTableDirective.prototype.searchLocalDataBy = /**
         * @param {?} searchKey
         * @return {?}
         */
            function (searchKey) {
                if (!searchKey) {
                    return this.getDataSource();
                }
                if (searchKey) {
                    return this.filterLocalDataBy(searchKey.toLowerCase());
                }
            };
        /**
         * @param {?} searchKey
         * @param {?} keys
         * @return {?}
         */
        MdbTableDirective.prototype.searchLocalDataByFields = /**
         * @param {?} searchKey
         * @param {?} keys
         * @return {?}
         */
            function (searchKey, keys) {
                if (!searchKey) {
                    return this.getDataSource();
                }
                if (searchKey && keys.length > 0) {
                    return this.filterLocalDataByFields(searchKey.toLowerCase(), keys);
                }
                if (!keys || keys.length === 0) {
                    return this.filterLocalDataBy(searchKey.toLowerCase());
                }
            };
        /**
         * @param {?} searchKey
         * @param {?=} keys
         * @return {?}
         */
        MdbTableDirective.prototype.searchLocalDataByMultipleFields = /**
         * @param {?} searchKey
         * @param {?=} keys
         * @return {?}
         */
            function (searchKey, keys) {
                if (!searchKey) {
                    return this.getDataSource();
                }
                if (searchKey && keys !== undefined) {
                    return this.filterLocalDataByMultipleFields(searchKey.toLowerCase(), keys);
                }
            };
        /**
         * @param {?} searchKey
         * @return {?}
         */
        MdbTableDirective.prototype.searchDataObservable = /**
         * @param {?} searchKey
         * @return {?}
         */
            function (searchKey) {
                var _this = this;
                /** @type {?} */
                var observable = new rxjs.Observable(( /**
                 * @param {?} observer
                 * @return {?}
                 */function (observer) {
                    observer.next(_this.searchLocalDataBy(searchKey));
                }));
                return observable;
            };
        /**
         * @return {?}
         */
        MdbTableDirective.prototype.ngOnInit = /**
         * @return {?}
         */
            function () {
                this.renderer.addClass(this.el.nativeElement, 'table');
            };
        /**
         * @return {?}
         */
        MdbTableDirective.prototype.ngAfterViewInit = /**
         * @return {?}
         */
            function () {
                var _this = this;
                // Fix(stickyHeader): resolved problem with not working stickyHeader="true" on Chrome
                if (this.stickyHeader) {
                    /** @type {?} */
                    var tableHead = this.el.nativeElement.querySelector('thead');
                    Array.from(tableHead.firstElementChild.children).forEach(( /**
                     * @param {?} child
                     * @return {?}
                     */function (child) {
                        _this.renderer.addClass(child, 'sticky-top');
                        if (_this.stickyHeaderBgColor) {
                            _this.renderer.setStyle(child, 'background-color', _this.stickyHeaderBgColor);
                        }
                        else {
                            _this.renderer.setStyle(child, 'background-color', '#f2f2f2');
                        }
                        if (_this.stickyHeaderTextColor) {
                            _this.renderer.setStyle(child, 'color', _this.stickyHeaderTextColor);
                        }
                        else {
                            _this.renderer.setStyle(child, 'color', '#000000');
                        }
                    }));
                }
            };
        MdbTableDirective.decorators = [
            { type: i0.Component, args: [{
                        // tslint:disable-next-line:component-selector
                        selector: '[mdbTable]',
                        exportAs: 'mdbTable',
                        template: '<ng-content></ng-content>',
                        encapsulation: i0.ViewEncapsulation.None,
                        styles: ["table th{font-size:.9rem;font-weight:400}table td{font-size:.9rem;font-weight:300}table.table thead th{border-top:none}table.table td,table.table th{padding-top:1.1rem;padding-bottom:1rem}table.table a{margin:0;color:#212529}table.table .label-table{margin:0;padding:0;line-height:.94rem;height:.94rem}table.table.btn-table td{vertical-align:middle}table.table-hover tbody tr:hover{transition:.5s;background-color:rgba(0,0,0,.075)}table .th-lg{min-width:9rem}table .th-sm{min-width:6rem}table.table-sm td,table.table-sm th{padding-top:.6rem;padding-bottom:.6rem}.table-scroll-vertical{max-height:300px;overflow-y:auto}.table-fixed{table-layout:fixed}.table-responsive-lg>.table-bordered,.table-responsive-md>.table-bordered,.table-responsive-sm>.table-bordered,.table-responsive-xl>.table-bordered,.table-responsive>.table-bordered{border-top:1px solid #dee2e6}"]
                    }] }
        ];
        /** @nocollapse */
        MdbTableDirective.ctorParameters = function () {
            return [
                { type: i0.ElementRef },
                { type: i0.Renderer2 }
            ];
        };
        MdbTableDirective.propDecorators = {
            striped: [{ type: i0.Input }, { type: i0.HostBinding, args: ['class.table-striped',] }],
            bordered: [{ type: i0.Input }, { type: i0.HostBinding, args: ['class.table-bordered',] }],
            borderless: [{ type: i0.Input }, { type: i0.HostBinding, args: ['class.table-borderless',] }],
            hover: [{ type: i0.Input }, { type: i0.HostBinding, args: ['class.table-hover',] }],
            small: [{ type: i0.Input }, { type: i0.HostBinding, args: ['class.table-sm',] }],
            responsive: [{ type: i0.Input }, { type: i0.HostBinding, args: ['class.table-responsive',] }],
            stickyHeader: [{ type: i0.Input }],
            stickyHeaderBgColor: [{ type: i0.Input }],
            stickyHeaderTextColor: [{ type: i0.Input }]
        };
        return MdbTableDirective;
    }());

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */
    /** @enum {string} */
    var SortDirection = {
        ASC: 'ascending',
        DESC: 'descending',
        CONST: 'constant',
    };
    var MdbTableSortDirective = /** @class */ (function () {
        function MdbTableSortDirective(el, renderer) {
            this.el = el;
            this.renderer = renderer;
            this.sortedInto = true;
            this.dataSource = [];
            this.sortEnd = new i0.EventEmitter();
            this.sorted = new i0.EventEmitter();
        }
        /**
         * @return {?}
         */
        MdbTableSortDirective.prototype.onclick = /**
         * @return {?}
         */
            function () {
                this.sortDataBy(this.trimWhiteSigns(this.sortBy.toString()));
                this.sortEnd.emit(this.dataSource);
                this.sorted.emit({
                    data: this.dataSource,
                    sortOrder: this.order,
                    sortBy: this.sortBy,
                });
            };
        /**
         * @param {?} headElement
         * @return {?}
         */
        MdbTableSortDirective.prototype.trimWhiteSigns = /**
         * @param {?} headElement
         * @return {?}
         */
            function (headElement) {
                return headElement.replace(/ /g, '');
            };
        /**
         * @param {?} arr
         * @param {?} oldIndex
         * @param {?} newIndex
         * @return {?}
         */
        MdbTableSortDirective.prototype.moveArrayItem = /**
         * @param {?} arr
         * @param {?} oldIndex
         * @param {?} newIndex
         * @return {?}
         */
            function (arr, oldIndex, newIndex) {
                while (oldIndex < 0) {
                    oldIndex += arr.length;
                }
                while (newIndex < 0) {
                    newIndex += arr.length;
                }
                if (newIndex >= arr.length) {
                    /** @type {?} */
                    var k = newIndex - arr.length;
                    while (k-- + 1) {
                        arr.push(null);
                    }
                }
                arr.splice(newIndex, 0, arr.splice(oldIndex, 1)[0]);
                return arr;
            };
        /**
         * @param {?} key
         * @return {?}
         */
        MdbTableSortDirective.prototype.sortDataBy = /**
         * @param {?} key
         * @return {?}
         */
            function (key) {
                var _this = this;
                key = key.split('.');
                this.dataSource.sort(( /**
                 * @param {?} a
                 * @param {?} b
                 * @return {?}
                 */function (a, b) {
                    /** @type {?} */
                    var i = 0;
                    while (i < key.length) {
                        a = a[key[i]];
                        b = b[key[i]];
                        i++;
                    }
                    if (a < b) {
                        _this.renderer.setAttribute(_this.el.nativeElement, 'aria-sort', 'ascending');
                        _this.renderer.setAttribute(_this.el.nativeElement, 'aria-label', key + ": activate to sort column descending");
                        _this.order = SortDirection.ASC;
                        return _this.sortedInto ? 1 : -1;
                    }
                    else if (a > b) {
                        _this.renderer.setAttribute(_this.el.nativeElement, 'aria-sort', 'descending');
                        _this.renderer.setAttribute(_this.el.nativeElement, 'aria-label', key + ": activate to sort column ascending");
                        _this.order = SortDirection.DESC;
                        return _this.sortedInto ? -1 : 1;
                    }
                    else if (a == null || b == null) {
                        _this.order = SortDirection.CONST;
                        return 1;
                    }
                    else {
                        _this.order = SortDirection.CONST;
                        return 0;
                    }
                }));
                this.sortedInto = !this.sortedInto;
            };
        /**
         * @return {?}
         */
        MdbTableSortDirective.prototype.ngOnInit = /**
         * @return {?}
         */
            function () {
                /** @type {?} */
                var key = this.trimWhiteSigns(this.sortBy.toString()).split('.');
                this.renderer.setAttribute(this.el.nativeElement, 'aria-label', key + ": activate to sort column descending");
            };
        MdbTableSortDirective.decorators = [
            { type: i0.Directive, args: [{
                        selector: '[mdbTableSort]',
                    },] }
        ];
        /** @nocollapse */
        MdbTableSortDirective.ctorParameters = function () {
            return [
                { type: i0.ElementRef },
                { type: i0.Renderer2 }
            ];
        };
        MdbTableSortDirective.propDecorators = {
            dataSource: [{ type: i0.Input, args: ['mdbTableSort',] }],
            sortBy: [{ type: i0.Input }],
            sortEnd: [{ type: i0.Output }],
            sorted: [{ type: i0.Output }],
            onclick: [{ type: i0.HostListener, args: ['click',] }]
        };
        return MdbTableSortDirective;
    }());

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */
    var MdbTableScrollDirective = /** @class */ (function () {
        function MdbTableScrollDirective(renderer, el) {
            this.renderer = renderer;
            this.el = el;
            this.scrollY = false;
            this.maxHeight = null;
            this.scrollX = false;
            this.maxWidth = null;
        }
        /**
         * @param {?} tableWrapper
         * @return {?}
         */
        MdbTableScrollDirective.prototype.wrapTableWithVerticalScrollingWrapper = /**
         * @param {?} tableWrapper
         * @return {?}
         */
            function (tableWrapper) {
                this.renderer.setStyle(tableWrapper, 'max-height', this.maxHeight + 'px');
                this.renderer.setStyle(tableWrapper, 'overflow-y', 'auto');
                this.renderer.setStyle(tableWrapper, 'display', 'block');
            };
        /**
         * @param {?} tableWrapper
         * @return {?}
         */
        MdbTableScrollDirective.prototype.wrapTableWithHorizontalScrollingWrapper = /**
         * @param {?} tableWrapper
         * @return {?}
         */
            function (tableWrapper) {
                this.renderer.setStyle(tableWrapper, 'max-width', this.maxWidth + 'px');
                this.renderer.setStyle(tableWrapper, 'overflow-x', 'auto');
                this.renderer.setStyle(tableWrapper, 'display', 'block');
            };
        /**
         * @param {?} tableWrapper
         * @return {?}
         */
        MdbTableScrollDirective.prototype.wrapTableWithHorizontalAndVerticalScrollingWrapper = /**
         * @param {?} tableWrapper
         * @return {?}
         */
            function (tableWrapper) {
                this.renderer.setStyle(tableWrapper, 'max-height', this.maxHeight + 'px');
                this.renderer.setStyle(tableWrapper, 'max-width', this.maxWidth + 'px');
                this.renderer.setStyle(tableWrapper, 'overflow-x', 'auto');
                this.renderer.setStyle(tableWrapper, 'display', 'block');
            };
        /**
         * @return {?}
         */
        MdbTableScrollDirective.prototype.ngOnInit = /**
         * @return {?}
         */
            function () {
                /** @type {?} */
                var parent = this.el.nativeElement.parentNode;
                /** @type {?} */
                var tableWrapper = this.renderer.createElement('div');
                if (this.scrollY && this.scrollX && this.maxHeight && this.maxWidth) {
                    this.wrapTableWithHorizontalAndVerticalScrollingWrapper(tableWrapper);
                }
                if (this.scrollY && this.maxHeight) {
                    this.wrapTableWithVerticalScrollingWrapper(tableWrapper);
                }
                if (this.scrollX && this.maxWidth) {
                    this.wrapTableWithHorizontalScrollingWrapper(tableWrapper);
                }
                this.renderer.insertBefore(parent, tableWrapper, this.el.nativeElement);
                this.renderer.removeChild(parent, this.el.nativeElement);
                this.renderer.appendChild(tableWrapper, this.el.nativeElement);
            };
        MdbTableScrollDirective.decorators = [
            { type: i0.Directive, args: [{
                        selector: '[mdbTableScroll]',
                    },] }
        ];
        /** @nocollapse */
        MdbTableScrollDirective.ctorParameters = function () {
            return [
                { type: i0.Renderer2 },
                { type: i0.ElementRef }
            ];
        };
        MdbTableScrollDirective.propDecorators = {
            scrollY: [{ type: i0.Input }],
            maxHeight: [{ type: i0.Input }],
            scrollX: [{ type: i0.Input }],
            maxWidth: [{ type: i0.Input }]
        };
        return MdbTableScrollDirective;
    }());

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */
    var MdbTableRowDirective = /** @class */ (function () {
        function MdbTableRowDirective(el) {
            this.el = el;
            this.rowCreated = new i0.EventEmitter();
            this.rowRemoved = new i0.EventEmitter();
        }
        /**
         * @return {?}
         */
        MdbTableRowDirective.prototype.ngOnInit = /**
         * @return {?}
         */
            function () {
                this.rowCreated.emit({ created: true, el: this.el.nativeElement });
            };
        /**
         * @return {?}
         */
        MdbTableRowDirective.prototype.ngOnDestroy = /**
         * @return {?}
         */
            function () {
                this.rowRemoved.emit({ removed: true });
            };
        MdbTableRowDirective.decorators = [
            { type: i0.Directive, args: [{
                        selector: '[mdbTableRow]'
                    },] }
        ];
        /** @nocollapse */
        MdbTableRowDirective.ctorParameters = function () {
            return [
                { type: i0.ElementRef }
            ];
        };
        MdbTableRowDirective.propDecorators = {
            rowCreated: [{ type: i0.Output }],
            rowRemoved: [{ type: i0.Output }]
        };
        return MdbTableRowDirective;
    }());

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */
    var MdbTableService = /** @class */ (function () {
        function MdbTableService() {
            this._dataSource = [];
            this._dataSourceChanged = new rxjs.Subject();
        }
        /**
         * @param {?} newRow
         * @return {?}
         */
        MdbTableService.prototype.addRow = /**
         * @param {?} newRow
         * @return {?}
         */
            function (newRow) {
                this.getDataSource().push(newRow);
            };
        /**
         * @param {?} index
         * @param {?} row
         * @return {?}
         */
        MdbTableService.prototype.addRowAfter = /**
         * @param {?} index
         * @param {?} row
         * @return {?}
         */
            function (index, row) {
                this.getDataSource().splice(index, 0, row);
            };
        /**
         * @param {?} index
         * @return {?}
         */
        MdbTableService.prototype.removeRow = /**
         * @param {?} index
         * @return {?}
         */
            function (index) {
                this.getDataSource().splice(index, 1);
            };
        /**
         * @return {?}
         */
        MdbTableService.prototype.rowRemoved = /**
         * @return {?}
         */
            function () {
                /** @type {?} */
                var rowRemoved = new rxjs.Observable(( /**
                 * @param {?} observer
                 * @return {?}
                 */function (observer) {
                    observer.next(true);
                }));
                return rowRemoved;
            };
        /**
         * @return {?}
         */
        MdbTableService.prototype.removeLastRow = /**
         * @return {?}
         */
            function () {
                this.getDataSource().pop();
            };
        /**
         * @return {?}
         */
        MdbTableService.prototype.getDataSource = /**
         * @return {?}
         */
            function () {
                return this._dataSource;
            };
        /**
         * @param {?} data
         * @return {?}
         */
        MdbTableService.prototype.setDataSource = /**
         * @param {?} data
         * @return {?}
         */
            function (data) {
                this._dataSource = data;
                this._dataSourceChanged.next(this.getDataSource());
            };
        /**
         * @return {?}
         */
        MdbTableService.prototype.dataSourceChange = /**
         * @return {?}
         */
            function () {
                return this._dataSourceChanged;
            };
        /**
         * @param {?} searchKey
         * @return {?}
         */
        MdbTableService.prototype.filterLocalDataBy = /**
         * @param {?} searchKey
         * @return {?}
         */
            function (searchKey) {
                return this.getDataSource().filter(( /**
                 * @param {?} obj
                 * @return {?}
                 */function (obj) {
                    return Object.keys(obj).some(( /**
                     * @param {?} key
                     * @return {?}
                     */function (key) {
                        if (obj[key]) {
                            return obj[key]
                                .toString()
                                .toLowerCase()
                                .includes(searchKey);
                        }
                    }));
                }));
            };
        /**
         * @param {?} searchKey
         * @return {?}
         */
        MdbTableService.prototype.searchLocalDataBy = /**
         * @param {?} searchKey
         * @return {?}
         */
            function (searchKey) {
                if (!searchKey) {
                    return this.getDataSource();
                }
                if (searchKey) {
                    return this.filterLocalDataBy(searchKey.toLowerCase());
                }
            };
        /**
         * @param {?} searchKey
         * @return {?}
         */
        MdbTableService.prototype.searchDataObservable = /**
         * @param {?} searchKey
         * @return {?}
         */
            function (searchKey) {
                var _this = this;
                /** @type {?} */
                var observable = new rxjs.Observable(( /**
                 * @param {?} observer
                 * @return {?}
                 */function (observer) {
                    observer.next(_this.searchLocalDataBy(searchKey));
                }));
                return observable;
            };
        MdbTableService.decorators = [
            { type: i0.Injectable, args: [{
                        providedIn: 'root',
                    },] }
        ];
        /** @nocollapse */
        MdbTableService.ctorParameters = function () { return []; };
        /** @nocollapse */ MdbTableService.ngInjectableDef = i0.ɵɵdefineInjectable({ factory: function MdbTableService_Factory() { return new MdbTableService(); }, token: MdbTableService, providedIn: "root" });
        return MdbTableService;
    }());

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */
    var MdbTablePaginationComponent = /** @class */ (function () {
        function MdbTablePaginationComponent(cdRef) {
            this.cdRef = cdRef;
            this.searchPagination = false;
            this.searchDataSource = null;
            this.ofKeyword = 'of';
            this.dashKeyword = '-';
            this.paginationAlign = '';
            this.hideDescription = false;
            this.maxVisibleItems = 10;
            this.firstItemIndex = 0;
            this.lastItemIndex = this.maxVisibleItems;
            this.lastVisibleItemIndex = 5;
            this.activePageNumber = 1;
            this.allItemsLength = 0;
            this.nextShouldBeDisabled = false;
            this.previousShouldBeDisabled = true;
            this.searchText = '';
            this.pagination = new rxjs.Subject();
            this.nextPageClick = new i0.EventEmitter();
            this.previousPageClick = new i0.EventEmitter();
            this.firstPageClick = new i0.EventEmitter();
            this.lastPageClick = new i0.EventEmitter();
        }
        /**
         * @return {?}
         */
        MdbTablePaginationComponent.prototype.ngOnInit = /**
         * @return {?}
         */
            function () {
                if (this.tableEl) {
                    this.allItemsLength = this.tableEl.getDataSource().length;
                }
            };
        /**
         * @return {?}
         */
        MdbTablePaginationComponent.prototype.ngAfterViewInit = /**
         * @return {?}
         */
            function () {
                var _this = this;
                if (this.tableEl) {
                    this.tableEl.dataSourceChange().subscribe(( /**
                     * @param {?} data
                     * @return {?}
                     */function (data) {
                        _this.allItemsLength = data.length;
                        _this.lastVisibleItemIndex = data.length;
                        _this.calculateFirstItemIndex();
                        _this.calculateLastItemIndex();
                        _this.disableNextButton(data);
                        if (_this.searchDataSource) {
                            setTimeout(( /**
                             * @return {?}
                             */function () {
                                if (_this.searchDataSource.length !== data.length) {
                                    _this.activePageNumber = 1;
                                    _this.firstItemIndex = 1;
                                }
                            }), 0);
                        }
                    }));
                }
                this.paginationChange().subscribe(( /**
                 * @param {?} data
                 * @return {?}
                 */function (data) {
                    _this.firstItemIndex = data.first;
                    _this.lastVisibleItemIndex = data.last;
                }));
            };
        /**
         * @param {?} changes
         * @return {?}
         */
        MdbTablePaginationComponent.prototype.ngOnChanges = /**
         * @param {?} changes
         * @return {?}
         */
            function (changes) {
                /** @type {?} */
                var searchDataSource = changes['searchDataSource'];
                if (searchDataSource.currentValue.length !== 0) {
                    this.allItemsLength = searchDataSource.currentValue.length;
                }
                if (this.lastVisibleItemIndex > this.allItemsLength) {
                    this.lastVisibleItemIndex = this.allItemsLength;
                }
                if (searchDataSource.currentValue.length === 0) {
                    this.firstItemIndex = 0;
                    this.lastItemIndex = 0;
                    this.lastVisibleItemIndex = 0;
                    this.allItemsLength = 0;
                }
                if (!searchDataSource.isFirstChange() &&
                    searchDataSource.currentValue.length <= this.maxVisibleItems) {
                    this.nextShouldBeDisabled = true;
                    this.lastVisibleItemIndex = searchDataSource.currentValue.length;
                }
                else {
                    this.nextShouldBeDisabled = false;
                }
            };
        /**
         * @param {?} value
         * @return {?}
         */
        MdbTablePaginationComponent.prototype.setMaxVisibleItemsNumberTo = /**
         * @param {?} value
         * @return {?}
         */
            function (value) {
                this.lastItemIndex = value;
                this.lastVisibleItemIndex = value;
                this.maxVisibleItems = value;
                this.cdRef.detectChanges();
            };
        /**
         * @return {?}
         */
        MdbTablePaginationComponent.prototype.searchTextObs = /**
         * @return {?}
         */
            function () {
                var _this = this;
                /** @type {?} */
                var observable = new rxjs.Observable(( /**
                 * @param {?} observer
                 * @return {?}
                 */function (observer) {
                    observer.next(_this.searchText);
                }));
                return observable;
            };
        /**
         * @param {?} data
         * @return {?}
         */
        MdbTablePaginationComponent.prototype.disableNextButton = /**
         * @param {?} data
         * @return {?}
         */
            function (data) {
                if (data.length <= this.maxVisibleItems) {
                    this.nextShouldBeDisabled = true;
                }
                else {
                    this.nextShouldBeDisabled = false;
                }
            };
        /**
         * @return {?}
         */
        MdbTablePaginationComponent.prototype.calculateFirstItemIndex = /**
         * @return {?}
         */
            function () {
                this.firstItemIndex = this.activePageNumber * this.maxVisibleItems - this.maxVisibleItems + 1;
                this.pagination.next({ first: this.firstItemIndex, last: this.lastItemIndex });
            };
        /**
         * @return {?}
         */
        MdbTablePaginationComponent.prototype.calculateLastItemIndex = /**
         * @return {?}
         */
            function () {
                this.lastItemIndex = this.activePageNumber * this.maxVisibleItems;
                this.lastVisibleItemIndex = this.lastItemIndex;
                if (this.searchDataSource && this.lastItemIndex > this.searchDataSource.length) {
                    this.lastVisibleItemIndex = this.searchDataSource.length;
                }
                else if (!this.searchDataSource) {
                    this.lastVisibleItemIndex = this.lastItemIndex;
                }
                if (this.lastItemIndex > this.tableEl.getDataSource().length) {
                    this.lastItemIndex = this.tableEl.getDataSource().length;
                    this.lastVisibleItemIndex = this.tableEl.getDataSource().length;
                }
                this.pagination.next({ first: this.firstItemIndex, last: this.lastItemIndex });
            };
        /**
         * @return {?}
         */
        MdbTablePaginationComponent.prototype.paginationChange = /**
         * @return {?}
         */
            function () {
                return this.pagination;
            };
        /**
         * @return {?}
         */
        MdbTablePaginationComponent.prototype.calculateHowManyPagesShouldBe = /**
         * @return {?}
         */
            function () {
                return Math.ceil(this.tableEl.getDataSource().length / this.maxVisibleItems);
            };
        /**
         * @return {?}
         */
        MdbTablePaginationComponent.prototype.previousPage = /**
         * @return {?}
         */
            function () {
                this.activePageNumber--;
                this.calculateFirstItemIndex();
                this.calculateLastItemIndex();
                this.previousPageClick.emit({ first: this.firstItemIndex, last: this.lastItemIndex });
            };
        /**
         * @return {?}
         */
        MdbTablePaginationComponent.prototype.nextPage = /**
         * @return {?}
         */
            function () {
                this.activePageNumber++;
                this.calculateFirstItemIndex();
                this.calculateLastItemIndex();
                if (this.lastItemIndex > this.tableEl.getDataSource().length) {
                    this.lastItemIndex = this.tableEl.getDataSource().length;
                }
                if (this.lastVisibleItemIndex > this.allItemsLength) {
                    this.lastVisibleItemIndex = this.allItemsLength;
                }
                this.nextPageClick.emit({ first: this.firstItemIndex, last: this.lastItemIndex });
            };
        /**
         * @return {?}
         */
        MdbTablePaginationComponent.prototype.firstPage = /**
         * @return {?}
         */
            function () {
                this.activePageNumber = 1;
                this.calculateFirstItemIndex();
                this.calculateLastItemIndex();
                this.firstPageClick.emit({ first: this.firstItemIndex, last: this.lastItemIndex });
            };
        /**
         * @return {?}
         */
        MdbTablePaginationComponent.prototype.lastPage = /**
         * @return {?}
         */
            function () {
                /** @type {?} */
                var lastPage = Math.ceil(this.allItemsLength / this.maxVisibleItems);
                this.activePageNumber = lastPage;
                this.calculateFirstItemIndex();
                this.calculateLastItemIndex();
                this.lastPageClick.emit({ first: this.firstItemIndex, last: this.lastItemIndex });
            };
        /**
         * @return {?}
         */
        MdbTablePaginationComponent.prototype.nextPageObservable = /**
         * @return {?}
         */
            function () {
                var _this = this;
                /** @type {?} */
                var obs = new rxjs.Observable(( /**
                 * @param {?} observer
                 * @return {?}
                 */function (observer) {
                    observer.next(_this.firstItemIndex);
                }));
                return obs;
            };
        /**
         * @return {?}
         */
        MdbTablePaginationComponent.prototype.previousPageObservable = /**
         * @return {?}
         */
            function () {
                var _this = this;
                /** @type {?} */
                var obs = new rxjs.Observable(( /**
                 * @param {?} observer
                 * @return {?}
                 */function (observer) {
                    observer.next(_this.lastVisibleItemIndex);
                }));
                return obs;
            };
        /**
         * @return {?}
         */
        MdbTablePaginationComponent.prototype.checkIfNextShouldBeDisabled = /**
         * @return {?}
         */
            function () {
                if (this.searchDataSource && this.lastVisibleItemIndex === this.searchDataSource.length) {
                    return true;
                }
                if (this.activePageNumber >= this.calculateHowManyPagesShouldBe()) {
                    return true;
                }
                if (this.nextShouldBeDisabled) {
                    return this.nextShouldBeDisabled;
                }
            };
        /**
         * @return {?}
         */
        MdbTablePaginationComponent.prototype.checkIfPreviousShouldBeDisabled = /**
         * @return {?}
         */
            function () {
                if (this.activePageNumber === 1) {
                    return true;
                }
            };
        MdbTablePaginationComponent.decorators = [
            { type: i0.Component, args: [{
                        selector: 'mdb-table-pagination',
                        template: "<!--Pagination -->\n<nav>\n  <ul\n    class=\"pagination pagination-circle pg-blue d-flex flex-center\"\n    [ngClass]=\"{\n      'justify-content-end': paginationAlign == 'end',\n      'justify-content-start': paginationAlign == 'start'\n    }\"\n  >\n    <li *ngIf=\"!hideDescription\">\n      {{ firstItemIndex }} {{ dashKeyword }} {{ lastVisibleItemIndex }} {{ ofKeyword }}\n      {{ allItemsLength }}\n    </li>\n    <!--Arrow left-->\n    <li class=\"page-item\" [ngClass]=\"{ disabled: checkIfPreviousShouldBeDisabled() }\">\n      <a class=\"page-link\" mdbWavesEffect aria-label=\"Previous\" (click)=\"firstPage()\">\n        <span aria-hidden=\"true\">\u00AB</span>\n      </a>\n    </li>\n\n    <li class=\"page-item\" [ngClass]=\"{ disabled: checkIfPreviousShouldBeDisabled() }\">\n      <a class=\"page-link\" mdbWavesEffect aria-label=\"Previous\" (click)=\"previousPage()\">\n        <span aria-hidden=\"true\">&#8249;</span>\n      </a>\n    </li>\n\n    <li class=\"page-item\" [ngClass]=\"{ disabled: checkIfNextShouldBeDisabled() }\">\n      <a class=\"page-link\" mdbWavesEffect aria-label=\"Previous\" (click)=\"nextPage()\">\n        <span aria-hidden=\"true\">&#8250;</span>\n      </a>\n    </li>\n\n    <!--Arrow right-->\n    <li class=\"page-item\" [ngClass]=\"{ disabled: checkIfNextShouldBeDisabled() }\">\n      <a class=\"page-link\" mdbWavesEffect aria-label=\"Next\" (click)=\"lastPage()\">\n        <span aria-hidden=\"true\">\u00BB</span>\n      </a>\n    </li>\n  </ul>\n</nav>\n<!--/Pagination -->\n"
                    }] }
        ];
        /** @nocollapse */
        MdbTablePaginationComponent.ctorParameters = function () {
            return [
                { type: i0.ChangeDetectorRef }
            ];
        };
        MdbTablePaginationComponent.propDecorators = {
            tableEl: [{ type: i0.Input }],
            searchPagination: [{ type: i0.Input }],
            searchDataSource: [{ type: i0.Input }],
            ofKeyword: [{ type: i0.Input }],
            dashKeyword: [{ type: i0.Input }],
            paginationAlign: [{ type: i0.Input }],
            hideDescription: [{ type: i0.Input }],
            nextPageClick: [{ type: i0.Output }],
            previousPageClick: [{ type: i0.Output }],
            firstPageClick: [{ type: i0.Output }],
            lastPageClick: [{ type: i0.Output }]
        };
        return MdbTablePaginationComponent;
    }());

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */
    var TableModule = /** @class */ (function () {
        function TableModule() {
        }
        TableModule.decorators = [
            { type: i0.NgModule, args: [{
                        imports: [common.CommonModule],
                        declarations: [
                            MdbTablePaginationComponent,
                            MdbTableRowDirective,
                            MdbTableScrollDirective,
                            MdbTableSortDirective,
                            MdbTableDirective,
                        ],
                        exports: [
                            MdbTablePaginationComponent,
                            MdbTableRowDirective,
                            MdbTableScrollDirective,
                            MdbTableSortDirective,
                            MdbTableDirective,
                        ],
                        entryComponents: [MdbTablePaginationComponent],
                        providers: [MdbTableService],
                    },] }
        ];
        return TableModule;
    }());

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */
    /**
     * Default values provider for tooltip
     */
    var TooltipConfig = /** @class */ (function () {
        function TooltipConfig() {
            /**
             * tooltip placement, supported positions: 'top', 'bottom', 'left', 'right'
             */
            this.placement = 'top';
            /**
             * array of event names which triggers tooltip opening
             */
            this.triggers = 'hover focus';
        }
        TooltipConfig.decorators = [
            { type: i0.Injectable }
        ];
        return TooltipConfig;
    }());

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */
    var TooltipContainerComponent = /** @class */ (function () {
        function TooltipContainerComponent(config, elem) {
            this.elem = elem;
            this.containerClass = '';
            this.show = !this.isBs3;
            Object.assign(this, config);
        }
        Object.defineProperty(TooltipContainerComponent.prototype, "tooltipClasses", {
            get: /**
             * @return {?}
             */ function () {
                return "tooltip-fadeIn tooltip in tooltip-" + this.placement + " bs-tooltip-" + this.placement + " " + this.placement + " " + this.containerClass;
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(TooltipContainerComponent.prototype, "isBs3", {
            get: /**
             * @return {?}
             */ function () {
                return isBs3();
            },
            enumerable: true,
            configurable: true
        });
        /**
         * @return {?}
         */
        TooltipContainerComponent.prototype.ngAfterViewInit = /**
         * @return {?}
         */
            function () {
                this.classMap = { in: false, fade: false };
                this.classMap[this.placement] = true;
                this.classMap['tooltip-' + this.placement] = true;
                this.classMap.in = true;
                if (this.animation) {
                    this.classMap.fade = true;
                }
                if (this.popupClass) {
                    this.classMap[this.popupClass] = true;
                }
            };
        TooltipContainerComponent.decorators = [
            { type: i0.Component, args: [{
                        selector: 'mdb-tooltip-container',
                        changeDetection: i0.ChangeDetectionStrategy.OnPush,
                        template: "\n    <div #tooltipArrow class=\"tooltip-arrow arrow\"></div>\n    <div #tooltipInner class=\"tooltip-inner\">\n      <ng-content></ng-content>\n    </div>\n  ",
                        encapsulation: i0.ViewEncapsulation.None,
                        styles: [".mdb-color.lighten-5{background-color:#d0d6e2!important}.mdb-color.lighten-4{background-color:#b1bace!important}.mdb-color.lighten-3{background-color:#929fba!important}.mdb-color.lighten-2{background-color:#7283a7!important}.mdb-color.lighten-1{background-color:#59698d!important}.mdb-color{background-color:#45526e!important}.mdb-color-text{color:#45526e!important}.rgba-mdb-color-slight,.rgba-mdb-color-slight:after{background-color:rgba(69,82,110,.1)}.rgba-mdb-color-light,.rgba-mdb-color-light:after{background-color:rgba(69,82,110,.3)}.rgba-mdb-color-strong,.rgba-mdb-color-strong:after{background-color:rgba(69,82,110,.7)}.mdb-color.darken-1{background-color:#3b465e!important}.mdb-color.darken-2{background-color:#2e3951!important}.mdb-color.darken-3{background-color:#1c2a48!important}.mdb-color.darken-4{background-color:#1c2331!important}.red.lighten-5{background-color:#ffebee!important}.red.lighten-4{background-color:#ffcdd2!important}.red.lighten-3{background-color:#ef9a9a!important}.red.lighten-2{background-color:#e57373!important}.red.lighten-1{background-color:#ef5350!important}.red{background-color:#f44336!important}.red-text{color:#f44336!important}.rgba-red-slight,.rgba-red-slight:after{background-color:rgba(244,67,54,.1)}.rgba-red-light,.rgba-red-light:after{background-color:rgba(244,67,54,.3)}.rgba-red-strong,.rgba-red-strong:after{background-color:rgba(244,67,54,.7)}.red.darken-1{background-color:#e53935!important}.red.darken-2{background-color:#d32f2f!important}.red.darken-3{background-color:#c62828!important}.red.darken-4{background-color:#b71c1c!important}.red.accent-1{background-color:#ff8a80!important}.red.accent-2{background-color:#ff5252!important}.red.accent-3{background-color:#ff1744!important}.red.accent-4{background-color:#d50000!important}.pink.lighten-5{background-color:#fce4ec!important}.pink.lighten-4{background-color:#f8bbd0!important}.pink.lighten-3{background-color:#f48fb1!important}.pink.lighten-2{background-color:#f06292!important}.pink.lighten-1{background-color:#ec407a!important}.pink{background-color:#e91e63!important}.pink-text{color:#e91e63!important}.rgba-pink-slight,.rgba-pink-slight:after{background-color:rgba(233,30,99,.1)}.rgba-pink-light,.rgba-pink-light:after{background-color:rgba(233,30,99,.3)}.rgba-pink-strong,.rgba-pink-strong:after{background-color:rgba(233,30,99,.7)}.pink.darken-1{background-color:#d81b60!important}.pink.darken-2{background-color:#c2185b!important}.pink.darken-3{background-color:#ad1457!important}.pink.darken-4{background-color:#880e4f!important}.pink.accent-1{background-color:#ff80ab!important}.pink.accent-2{background-color:#ff4081!important}.pink.accent-3{background-color:#f50057!important}.pink.accent-4{background-color:#c51162!important}.purple.lighten-5{background-color:#f3e5f5!important}.purple.lighten-4{background-color:#e1bee7!important}.purple.lighten-3{background-color:#ce93d8!important}.purple.lighten-2{background-color:#ba68c8!important}.purple.lighten-1{background-color:#ab47bc!important}.purple{background-color:#9c27b0!important}.purple-text{color:#9c27b0!important}.rgba-purple-slight,.rgba-purple-slight:after{background-color:rgba(156,39,176,.1)}.rgba-purple-light,.rgba-purple-light:after{background-color:rgba(156,39,176,.3)}.rgba-purple-strong,.rgba-purple-strong:after{background-color:rgba(156,39,176,.7)}.purple.darken-1{background-color:#8e24aa!important}.purple.darken-2{background-color:#7b1fa2!important}.purple.darken-3{background-color:#6a1b9a!important}.purple.darken-4{background-color:#4a148c!important}.purple.accent-1{background-color:#ea80fc!important}.purple.accent-2{background-color:#e040fb!important}.purple.accent-3{background-color:#d500f9!important}.purple.accent-4{background-color:#a0f!important}.deep-purple.lighten-5{background-color:#ede7f6!important}.deep-purple.lighten-4{background-color:#d1c4e9!important}.deep-purple.lighten-3{background-color:#b39ddb!important}.deep-purple.lighten-2{background-color:#9575cd!important}.deep-purple.lighten-1{background-color:#7e57c2!important}.deep-purple{background-color:#673ab7!important}.deep-purple-text{color:#673ab7!important}.rgba-deep-purple-slight,.rgba-deep-purple-slight:after{background-color:rgba(103,58,183,.1)}.rgba-deep-purple-light,.rgba-deep-purple-light:after{background-color:rgba(103,58,183,.3)}.rgba-deep-purple-strong,.rgba-deep-purple-strong:after{background-color:rgba(103,58,183,.7)}.deep-purple.darken-1{background-color:#5e35b1!important}.deep-purple.darken-2{background-color:#512da8!important}.deep-purple.darken-3{background-color:#4527a0!important}.deep-purple.darken-4{background-color:#311b92!important}.deep-purple.accent-1{background-color:#b388ff!important}.deep-purple.accent-2{background-color:#7c4dff!important}.deep-purple.accent-3{background-color:#651fff!important}.deep-purple.accent-4{background-color:#6200ea!important}.indigo.lighten-5{background-color:#e8eaf6!important}.indigo.lighten-4{background-color:#c5cae9!important}.indigo.lighten-3{background-color:#9fa8da!important}.indigo.lighten-2{background-color:#7986cb!important}.indigo.lighten-1{background-color:#5c6bc0!important}.indigo{background-color:#3f51b5!important}.indigo-text{color:#3f51b5!important}.rgba-indigo-slight,.rgba-indigo-slight:after{background-color:rgba(63,81,181,.1)}.rgba-indigo-light,.rgba-indigo-light:after{background-color:rgba(63,81,181,.3)}.rgba-indigo-strong,.rgba-indigo-strong:after{background-color:rgba(63,81,181,.7)}.indigo.darken-1{background-color:#3949ab!important}.indigo.darken-2{background-color:#303f9f!important}.indigo.darken-3{background-color:#283593!important}.indigo.darken-4{background-color:#1a237e!important}.indigo.accent-1{background-color:#8c9eff!important}.indigo.accent-2{background-color:#536dfe!important}.indigo.accent-3{background-color:#3d5afe!important}.indigo.accent-4{background-color:#304ffe!important}.blue.lighten-5{background-color:#e3f2fd!important}.blue.lighten-4{background-color:#bbdefb!important}.blue.lighten-3{background-color:#90caf9!important}.blue.lighten-2{background-color:#64b5f6!important}.blue.lighten-1{background-color:#42a5f5!important}.blue{background-color:#2196f3!important}.blue-text{color:#2196f3!important}.rgba-blue-slight,.rgba-blue-slight:after{background-color:rgba(33,150,243,.1)}.rgba-blue-light,.rgba-blue-light:after{background-color:rgba(33,150,243,.3)}.rgba-blue-strong,.rgba-blue-strong:after{background-color:rgba(33,150,243,.7)}.blue.darken-1{background-color:#1e88e5!important}.blue.darken-2{background-color:#1976d2!important}.blue.darken-3{background-color:#1565c0!important}.blue.darken-4{background-color:#0d47a1!important}.blue.accent-1{background-color:#82b1ff!important}.blue.accent-2{background-color:#448aff!important}.blue.accent-3{background-color:#2979ff!important}.blue.accent-4{background-color:#2962ff!important}.light-blue.lighten-5{background-color:#e1f5fe!important}.light-blue.lighten-4{background-color:#b3e5fc!important}.light-blue.lighten-3{background-color:#81d4fa!important}.light-blue.lighten-2{background-color:#4fc3f7!important}.light-blue.lighten-1{background-color:#29b6f6!important}.light-blue{background-color:#03a9f4!important}.light-blue-text{color:#03a9f4!important}.rgba-light-blue-slight,.rgba-light-blue-slight:after{background-color:rgba(3,169,244,.1)}.rgba-light-blue-light,.rgba-light-blue-light:after{background-color:rgba(3,169,244,.3)}.rgba-light-blue-strong,.rgba-light-blue-strong:after{background-color:rgba(3,169,244,.7)}.light-blue.darken-1{background-color:#039be5!important}.light-blue.darken-2{background-color:#0288d1!important}.light-blue.darken-3{background-color:#0277bd!important}.light-blue.darken-4{background-color:#01579b!important}.light-blue.accent-1{background-color:#80d8ff!important}.light-blue.accent-2{background-color:#40c4ff!important}.light-blue.accent-3{background-color:#00b0ff!important}.light-blue.accent-4{background-color:#0091ea!important}.cyan.lighten-5{background-color:#e0f7fa!important}.cyan.lighten-4{background-color:#b2ebf2!important}.cyan.lighten-3{background-color:#80deea!important}.cyan.lighten-2{background-color:#4dd0e1!important}.cyan.lighten-1{background-color:#26c6da!important}.cyan{background-color:#00bcd4!important}.cyan-text{color:#00bcd4!important}.rgba-cyan-slight,.rgba-cyan-slight:after{background-color:rgba(0,188,212,.1)}.rgba-cyan-light,.rgba-cyan-light:after{background-color:rgba(0,188,212,.3)}.rgba-cyan-strong,.rgba-cyan-strong:after{background-color:rgba(0,188,212,.7)}.cyan.darken-1{background-color:#00acc1!important}.cyan.darken-2{background-color:#0097a7!important}.cyan.darken-3{background-color:#00838f!important}.cyan.darken-4{background-color:#006064!important}.cyan.accent-1{background-color:#84ffff!important}.cyan.accent-2{background-color:#18ffff!important}.cyan.accent-3{background-color:#00e5ff!important}.cyan.accent-4{background-color:#00b8d4!important}.teal.lighten-5{background-color:#e0f2f1!important}.teal.lighten-4{background-color:#b2dfdb!important}.teal.lighten-3{background-color:#80cbc4!important}.teal.lighten-2{background-color:#4db6ac!important}.teal.lighten-1{background-color:#26a69a!important}.teal{background-color:#009688!important}.teal-text{color:#009688!important}.rgba-teal-slight,.rgba-teal-slight:after{background-color:rgba(0,150,136,.1)}.rgba-teal-light,.rgba-teal-light:after{background-color:rgba(0,150,136,.3)}.rgba-teal-strong,.rgba-teal-strong:after{background-color:rgba(0,150,136,.7)}.teal.darken-1{background-color:#00897b!important}.teal.darken-2{background-color:#00796b!important}.teal.darken-3{background-color:#00695c!important}.teal.darken-4{background-color:#004d40!important}.teal.accent-1{background-color:#a7ffeb!important}.teal.accent-2{background-color:#64ffda!important}.teal.accent-3{background-color:#1de9b6!important}.teal.accent-4{background-color:#00bfa5!important}.green.lighten-5{background-color:#e8f5e9!important}.green.lighten-4{background-color:#c8e6c9!important}.green.lighten-3{background-color:#a5d6a7!important}.green.lighten-2{background-color:#81c784!important}.green.lighten-1{background-color:#66bb6a!important}.green{background-color:#4caf50!important}.green-text{color:#4caf50!important}.rgba-green-slight,.rgba-green-slight:after{background-color:rgba(76,175,80,.1)}.rgba-green-light,.rgba-green-light:after{background-color:rgba(76,175,80,.3)}.rgba-green-strong,.rgba-green-strong:after{background-color:rgba(76,175,80,.7)}.green.darken-1{background-color:#43a047!important}.green.darken-2{background-color:#388e3c!important}.green.darken-3{background-color:#2e7d32!important}.green.darken-4{background-color:#1b5e20!important}.green.accent-1{background-color:#b9f6ca!important}.green.accent-2{background-color:#69f0ae!important}.green.accent-3{background-color:#00e676!important}.green.accent-4{background-color:#00c853!important}.light-green.lighten-5{background-color:#f1f8e9!important}.light-green.lighten-4{background-color:#dcedc8!important}.light-green.lighten-3{background-color:#c5e1a5!important}.light-green.lighten-2{background-color:#aed581!important}.light-green.lighten-1{background-color:#9ccc65!important}.light-green{background-color:#8bc34a!important}.light-green-text{color:#8bc34a!important}.rgba-light-green-slight,.rgba-light-green-slight:after{background-color:rgba(139,195,74,.1)}.rgba-light-green-light,.rgba-light-green-light:after{background-color:rgba(139,195,74,.3)}.rgba-light-green-strong,.rgba-light-green-strong:after{background-color:rgba(139,195,74,.7)}.light-green.darken-1{background-color:#7cb342!important}.light-green.darken-2{background-color:#689f38!important}.light-green.darken-3{background-color:#558b2f!important}.light-green.darken-4{background-color:#33691e!important}.light-green.accent-1{background-color:#ccff90!important}.light-green.accent-2{background-color:#b2ff59!important}.light-green.accent-3{background-color:#76ff03!important}.light-green.accent-4{background-color:#64dd17!important}.lime.lighten-5{background-color:#f9fbe7!important}.lime.lighten-4{background-color:#f0f4c3!important}.lime.lighten-3{background-color:#e6ee9c!important}.lime.lighten-2{background-color:#dce775!important}.lime.lighten-1{background-color:#d4e157!important}.lime{background-color:#cddc39!important}.lime-text{color:#cddc39!important}.rgba-lime-slight,.rgba-lime-slight:after{background-color:rgba(205,220,57,.1)}.rgba-lime-light,.rgba-lime-light:after{background-color:rgba(205,220,57,.3)}.rgba-lime-strong,.rgba-lime-strong:after{background-color:rgba(205,220,57,.7)}.lime.darken-1{background-color:#c0ca33!important}.lime.darken-2{background-color:#afb42b!important}.lime.darken-3{background-color:#9e9d24!important}.lime.darken-4{background-color:#827717!important}.lime.accent-1{background-color:#f4ff81!important}.lime.accent-2{background-color:#eeff41!important}.lime.accent-3{background-color:#c6ff00!important}.lime.accent-4{background-color:#aeea00!important}.yellow.lighten-5{background-color:#fffde7!important}.yellow.lighten-4{background-color:#fff9c4!important}.yellow.lighten-3{background-color:#fff59d!important}.yellow.lighten-2{background-color:#fff176!important}.yellow.lighten-1{background-color:#ffee58!important}.yellow{background-color:#ffeb3b!important}.yellow-text{color:#ffeb3b!important}.rgba-yellow-slight,.rgba-yellow-slight:after{background-color:rgba(255,235,59,.1)}.rgba-yellow-light,.rgba-yellow-light:after{background-color:rgba(255,235,59,.3)}.rgba-yellow-strong,.rgba-yellow-strong:after{background-color:rgba(255,235,59,.7)}.yellow.darken-1{background-color:#fdd835!important}.yellow.darken-2{background-color:#fbc02d!important}.yellow.darken-3{background-color:#f9a825!important}.yellow.darken-4{background-color:#f57f17!important}.yellow.accent-1{background-color:#ffff8d!important}.yellow.accent-2{background-color:#ff0!important}.yellow.accent-3{background-color:#ffea00!important}.yellow.accent-4{background-color:#ffd600!important}.amber.lighten-5{background-color:#fff8e1!important}.amber.lighten-4{background-color:#ffecb3!important}.amber.lighten-3{background-color:#ffe082!important}.amber.lighten-2{background-color:#ffd54f!important}.amber.lighten-1{background-color:#ffca28!important}.amber{background-color:#ffc107!important}.amber-text{color:#ffc107!important}.rgba-amber-slight,.rgba-amber-slight:after{background-color:rgba(255,193,7,.1)}.rgba-amber-light,.rgba-amber-light:after{background-color:rgba(255,193,7,.3)}.rgba-amber-strong,.rgba-amber-strong:after{background-color:rgba(255,193,7,.7)}.amber.darken-1{background-color:#ffb300!important}.amber.darken-2{background-color:#ffa000!important}.amber.darken-3{background-color:#ff8f00!important}.amber.darken-4{background-color:#ff6f00!important}.amber.accent-1{background-color:#ffe57f!important}.amber.accent-2{background-color:#ffd740!important}.amber.accent-3{background-color:#ffc400!important}.amber.accent-4{background-color:#ffab00!important}.orange.lighten-5{background-color:#fff3e0!important}.orange.lighten-4{background-color:#ffe0b2!important}.orange.lighten-3{background-color:#ffcc80!important}.orange.lighten-2{background-color:#ffb74d!important}.orange.lighten-1{background-color:#ffa726!important}.orange{background-color:#ff9800!important}.orange-text{color:#ff9800!important}.rgba-orange-slight,.rgba-orange-slight:after{background-color:rgba(255,152,0,.1)}.rgba-orange-light,.rgba-orange-light:after{background-color:rgba(255,152,0,.3)}.rgba-orange-strong,.rgba-orange-strong:after{background-color:rgba(255,152,0,.7)}.orange.darken-1{background-color:#fb8c00!important}.orange.darken-2{background-color:#f57c00!important}.orange.darken-3{background-color:#ef6c00!important}.orange.darken-4{background-color:#e65100!important}.orange.accent-1{background-color:#ffd180!important}.orange.accent-2{background-color:#ffab40!important}.orange.accent-3{background-color:#ff9100!important}.orange.accent-4{background-color:#ff6d00!important}.deep-orange.lighten-5{background-color:#fbe9e7!important}.deep-orange.lighten-4{background-color:#ffccbc!important}.deep-orange.lighten-3{background-color:#ffab91!important}.deep-orange.lighten-2{background-color:#ff8a65!important}.deep-orange.lighten-1{background-color:#ff7043!important}.deep-orange{background-color:#ff5722!important}.deep-orange-text{color:#ff5722!important}.rgba-deep-orange-slight,.rgba-deep-orange-slight:after{background-color:rgba(255,87,34,.1)}.rgba-deep-orange-light,.rgba-deep-orange-light:after{background-color:rgba(255,87,34,.3)}.rgba-deep-orange-strong,.rgba-deep-orange-strong:after{background-color:rgba(255,87,34,.7)}.deep-orange.darken-1{background-color:#f4511e!important}.deep-orange.darken-2{background-color:#e64a19!important}.deep-orange.darken-3{background-color:#d84315!important}.deep-orange.darken-4{background-color:#bf360c!important}.deep-orange.accent-1{background-color:#ff9e80!important}.deep-orange.accent-2{background-color:#ff6e40!important}.deep-orange.accent-3{background-color:#ff3d00!important}.deep-orange.accent-4{background-color:#dd2c00!important}.brown.lighten-5{background-color:#efebe9!important}.brown.lighten-4{background-color:#d7ccc8!important}.brown.lighten-3{background-color:#bcaaa4!important}.brown.lighten-2{background-color:#a1887f!important}.brown.lighten-1{background-color:#8d6e63!important}.brown{background-color:#795548!important}.brown-text{color:#795548!important}.rgba-brown-slight,.rgba-brown-slight:after{background-color:rgba(121,85,72,.1)}.rgba-brown-light,.rgba-brown-light:after{background-color:rgba(121,85,72,.3)}.rgba-brown-strong,.rgba-brown-strong:after{background-color:rgba(121,85,72,.7)}.brown.darken-1{background-color:#6d4c41!important}.brown.darken-2{background-color:#5d4037!important}.brown.darken-3{background-color:#4e342e!important}.brown.darken-4{background-color:#3e2723!important}.blue-grey.lighten-5{background-color:#eceff1!important}.blue-grey.lighten-4{background-color:#cfd8dc!important}.blue-grey.lighten-3{background-color:#b0bec5!important}.blue-grey.lighten-2{background-color:#90a4ae!important}.blue-grey.lighten-1{background-color:#78909c!important}.blue-grey{background-color:#607d8b!important}.blue-grey-text{color:#607d8b!important}.rgba-blue-grey-slight,.rgba-blue-grey-slight:after{background-color:rgba(96,125,139,.1)}.rgba-blue-grey-light,.rgba-blue-grey-light:after{background-color:rgba(96,125,139,.3)}.rgba-blue-grey-strong,.rgba-blue-grey-strong:after{background-color:rgba(96,125,139,.7)}.blue-grey.darken-1{background-color:#546e7a!important}.blue-grey.darken-2{background-color:#455a64!important}.blue-grey.darken-3{background-color:#37474f!important}.blue-grey.darken-4{background-color:#263238!important}.grey.lighten-5{background-color:#fafafa!important}.grey.lighten-4{background-color:#f5f5f5!important}.grey.lighten-3{background-color:#eee!important}.grey.lighten-2{background-color:#e0e0e0!important}.grey.lighten-1{background-color:#bdbdbd!important}.grey{background-color:#9e9e9e!important}.grey-text{color:#9e9e9e!important}.rgba-grey-slight,.rgba-grey-slight:after{background-color:rgba(158,158,158,.1)}.rgba-grey-light,.rgba-grey-light:after{background-color:rgba(158,158,158,.3)}.rgba-grey-strong,.rgba-grey-strong:after{background-color:rgba(158,158,158,.7)}.grey.darken-1{background-color:#757575!important}.grey.darken-2{background-color:#616161!important}.grey.darken-3{background-color:#424242!important}.grey.darken-4{background-color:#212121!important}.black{background-color:#000!important}.black-text{color:#000!important}.rgba-black-slight,.rgba-black-slight:after{background-color:rgba(0,0,0,.1)}.rgba-black-light,.rgba-black-light:after{background-color:rgba(0,0,0,.3)}.rgba-black-strong,.rgba-black-strong:after{background-color:rgba(0,0,0,.7)}.white{background-color:#fff!important}.white-text{color:#fff!important}.rgba-white-slight,.rgba-white-slight:after{background-color:rgba(255,255,255,.1)}.rgba-white-light,.rgba-white-light:after{background-color:rgba(255,255,255,.3)}.rgba-white-strong,.rgba-white-strong:after{background-color:rgba(255,255,255,.7)}.rgba-stylish-slight{background-color:rgba(62,69,81,.1)}.rgba-stylish-light{background-color:rgba(62,69,81,.3)}.rgba-stylish-strong{background-color:rgba(62,69,81,.7)}.primary-color{background-color:#4285f4!important}.primary-color-dark{background-color:#0d47a1!important}.secondary-color{background-color:#a6c!important}.secondary-color-dark{background-color:#93c!important}.default-color{background-color:#2bbbad!important}.default-color-dark{background-color:#00695c!important}.info-color{background-color:#33b5e5!important}.info-color-dark{background-color:#09c!important}.success-color{background-color:#00c851!important}.success-color-dark{background-color:#007e33!important}.warning-color{background-color:#fb3!important}.warning-color-dark{background-color:#f80!important}.danger-color{background-color:#ff3547!important}.danger-color-dark{background-color:#c00!important}.elegant-color{background-color:#2e2e2e!important}.elegant-color-dark{background-color:#212121!important}.stylish-color{background-color:#4b515d!important}.stylish-color-dark{background-color:#3e4551!important}.unique-color{background-color:#3f729b!important}.unique-color-dark{background-color:#1c2331!important}.special-color{background-color:#37474f!important}.special-color-dark{background-color:#263238!important}.purple-gradient{background:linear-gradient(40deg,#ff6ec4,#7873f5)!important}.peach-gradient{background:linear-gradient(40deg,#ffd86f,#fc6262)!important}.aqua-gradient{background:linear-gradient(40deg,#2096ff,#05ffa3)!important}.blue-gradient{background:linear-gradient(40deg,#45cafc,#303f9f)!important}.purple-gradient-rgba{background:linear-gradient(40deg,rgba(255,110,196,.9),rgba(120,115,245,.9))!important}.peach-gradient-rgba{background:linear-gradient(40deg,rgba(255,216,111,.9),rgba(252,98,98,.9))!important}.aqua-gradient-rgba{background:linear-gradient(40deg,rgba(32,150,255,.9),rgba(5,255,163,.9))!important}.blue-gradient-rgba{background:linear-gradient(40deg,rgba(69,202,252,.9),rgba(48,63,159,.9))!important}.dark-grey-text,.dark-grey-text:focus,.dark-grey-text:hover{color:#4f4f4f!important}.hoverable{box-shadow:none;transition:.55s ease-in-out}.hoverable:hover{box-shadow:0 8px 17px 0 rgba(0,0,0,.2),0 6px 20px 0 rgba(0,0,0,.19);transition:.55s ease-in-out}.z-depth-0{box-shadow:none!important}.z-depth-1{box-shadow:0 2px 5px 0 rgba(0,0,0,.16),0 2px 10px 0 rgba(0,0,0,.12)!important}.tooltip-inner,.z-depth-1-half{box-shadow:0 5px 11px 0 rgba(0,0,0,.18),0 4px 15px 0 rgba(0,0,0,.15)!important}.z-depth-2{box-shadow:0 8px 17px 0 rgba(0,0,0,.2),0 6px 20px 0 rgba(0,0,0,.19)!important}.z-depth-3{box-shadow:0 12px 15px 0 rgba(0,0,0,.24),0 17px 50px 0 rgba(0,0,0,.19)!important}.z-depth-4{box-shadow:0 16px 28px 0 rgba(0,0,0,.22),0 25px 55px 0 rgba(0,0,0,.21)!important}.z-depth-5{box-shadow:0 27px 24px 0 rgba(0,0,0,.2),0 40px 77px 0 rgba(0,0,0,.22)!important}.disabled,:disabled{pointer-events:none!important}a{cursor:pointer;text-decoration:none;color:#0275d8;transition:.2s ease-in-out}a:hover{text-decoration:none;color:#014c8c;transition:.2s ease-in-out}a.disabled:hover,a:disabled:hover{color:#0275d8}a:not([href]):not([tabindex]),a:not([href]):not([tabindex]):focus,a:not([href]):not([tabindex]):hover{color:inherit;text-decoration:none}a .tooltip{position:absolute;z-index:1070;display:block;font-family:-apple-system,BlinkMacSystemFont,\"Segoe UI\",Roboto,\"Helvetica Neue\",Arial,\"Noto Sans\",sans-serif,\"Apple Color Emoji\",\"Segoe UI Emoji\",\"Segoe UI Symbol\",\"Noto Color Emoji\";font-style:normal;font-weight:400;letter-spacing:normal;line-break:auto;line-height:1.5;text-align:left;text-align:start;text-decoration:none;text-shadow:none;text-transform:none;white-space:normal;word-break:normal;word-spacing:normal;font-size:.875rem;word-wrap:break-word;opacity:0}a .tooltip.show{opacity:.9}a .tooltip.bs-tether-element-attached-bottom,a .tooltip.tooltip-top{padding:.8rem 0;margin-top:0}a .tooltip.bs-tether-element-attached-bottom .tooltip-inner::before,a .tooltip.tooltip-top .tooltip-inner::before{bottom:0;left:50%;margin-left:-.8rem;content:'';border-width:.8rem .8rem 0}a .tooltip.bs-tether-element-attached-left,a .tooltip.tooltip-right{padding:0 .8rem;margin-left:0}a .tooltip.bs-tether-element-attached-left .tooltip-inner::before,a .tooltip.tooltip-right .tooltip-inner::before{top:50%;left:0;margin-top:-.8rem;content:'';border-width:.8rem .8rem .8rem 0}a .tooltip.bs-tether-element-attached-top,a .tooltip.tooltip-bottom{padding:.8rem 0;margin-top:0}a .tooltip.bs-tether-element-attached-top .tooltip-inner::before,a .tooltip.tooltip-bottom .tooltip-inner::before{top:0;left:50%;margin-left:-.8rem;content:'';border-width:0 .8rem .8rem}a .tooltip.bs-tether-element-attached-right,a .tooltip.tooltip-left{padding:0 .8rem;margin-left:0}a .tooltip.bs-tether-element-attached-right .tooltip-inner::before,a .tooltip.tooltip-left .tooltip-inner::before{top:50%;right:0;margin-top:-.8rem;content:'';border-width:.8rem 0 .8rem .8rem}.tooltip-inner{max-width:200px;padding:.2rem .4rem;text-align:center;border-radius:.25rem}.tooltip-inner::before{position:absolute;width:0;height:0;border-color:transparent;border-style:solid}@-webkit-keyframes fadeInTooltip{from{opacity:0}to{opacity:1}}@keyframes fadeInTooltip{from{opacity:0}to{opacity:1}}.tooltip-fadeIn{-webkit-animation-name:fadeInTooltip;animation-name:fadeInTooltip;-webkit-animation-delay:.2s;animation-delay:.2s;-webkit-animation-duration:.2s;animation-duration:.2s;-webkit-animation-fill-mode:both;animation-fill-mode:both}.single-tooltip{padding:.75rem 0 0}.single-tooltip a{padding:0!important}a[tooltip]{margin-left:0!important;padding:0 .5rem}.tooltip-arrow.left{position:relative;margin-right:-.6rem;-webkit-transform:rotate(90deg);transform:rotate(90deg)}.tooltip-arrow.right{position:relative;margin-left:-.6rem;-webkit-transform:rotate(-90deg);transform:rotate(-90deg)}.tooltip-arrow.top{position:relative;-webkit-transform:rotate(-180deg);transform:rotate(-180deg)}.tooltip-top{padding:.4rem 0}.tooltip-top .arrow{bottom:0}.tooltip-top .arrow::before{top:0;border-width:.4rem .4rem 0;border-top-color:#000}.tooltip-right{padding:0 .4rem}.tooltip-right .arrow{left:0}.tooltip-right .arrow::before{right:0;border-width:.4rem .4rem .4rem 0;border-right-color:#000}.tooltip-bottom{padding:.4rem 0}.tooltip-bottom .arrow{top:0}.tooltip-bottom .arrow::before{bottom:0;border-width:0 .4rem .4rem;border-bottom-color:#000}.tooltip-left{padding:0 .4rem}.tooltip-left .arrow{right:0}.tooltip-left .arrow::before{left:0;border-width:.4rem 0 .4rem .4rem;border-left-color:#000}"]
                    }] }
        ];
        /** @nocollapse */
        TooltipContainerComponent.ctorParameters = function () {
            return [
                { type: TooltipConfig },
                { type: i0.ElementRef }
            ];
        };
        TooltipContainerComponent.propDecorators = {
            containerClass: [{ type: i0.Input }],
            tooltipInner: [{ type: i0.ViewChild, args: ['tooltipInner', { static: true },] }],
            tooltipArrow: [{ type: i0.ViewChild, args: ['tooltipArrow', { static: true },] }],
            show: [{ type: i0.HostBinding, args: ['class.show',] }],
            tooltipClasses: [{ type: i0.HostBinding, args: ['class',] }]
        };
        return TooltipContainerComponent;
    }());

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */
    var TooltipDirective = /** @class */ (function () {
        function TooltipDirective(_renderer, _elementRef, _positionService, _viewContainerRef, cis, config, platformId) {
            this._elementRef = _elementRef;
            this._positionService = _positionService;
            this.platformId = platformId;
            /**
             * Fired when tooltip content changes
             */
            this.tooltipChange = new i0.EventEmitter();
            this.dynamicPosition = true;
            this.delay = 0;
            this.fadeDuration = 150;
            this.isBrowser = false;
            this.isBrowser = common.isPlatformBrowser(this.platformId);
            this._tooltip = cis
                .createLoader(this._elementRef, _viewContainerRef, _renderer)
                .provide({ provide: TooltipConfig, useValue: config });
            Object.assign(this, config);
            this.onShown = this._tooltip.onShown;
            this.shown = this._tooltip.onShown;
            this.onHidden = this._tooltip.onHidden;
            this.hidden = this._tooltip.onHidden;
        }
        Object.defineProperty(TooltipDirective.prototype, "isOpen", {
            /**
             * Returns whether or not the tooltip is currently being shown
             */
            get: /**
             * Returns whether or not the tooltip is currently being shown
             * @return {?}
             */ function () {
                return this._tooltip.isShown;
            },
            set: /**
             * @param {?} value
             * @return {?}
             */ function (value) {
                if (value) {
                    this.show();
                }
                else {
                    this.hide();
                }
            },
            enumerable: true,
            configurable: true
        });
        /**
         * @return {?}
         */
        TooltipDirective.prototype.ngOnInit = /**
         * @return {?}
         */
            function () {
                var _this = this;
                this._tooltip.listen({
                    triggers: this.triggers,
                    show: ( /**
                     * @return {?}
                     */function () { return _this.show(); }),
                });
                this.tooltipChange.subscribe(( /**
                 * @param {?} value
                 * @return {?}
                 */function (value) {
                    if (!value) {
                        _this._tooltip.hide();
                    }
                }));
            };
        /**
         * @param {?} changes
         * @return {?}
         */
        TooltipDirective.prototype.ngOnChanges = /**
         * @param {?} changes
         * @return {?}
         */
            function (changes) {
                if (!changes['mdbTooltip'].isFirstChange()) {
                    this.tooltipChange.emit(this.mdbTooltip);
                }
            };
        /**
         * Toggles an element’s tooltip. This is considered a “manual” triggering of
         * the tooltip.
         */
        /**
         * Toggles an element’s tooltip. This is considered a “manual” triggering of
         * the tooltip.
         * @return {?}
         */
        TooltipDirective.prototype.toggle = /**
         * Toggles an element’s tooltip. This is considered a “manual” triggering of
         * the tooltip.
         * @return {?}
         */
            function () {
                if (this.isOpen) {
                    return this.hide();
                }
                this.show();
            };
        /**
         * Opens an element’s tooltip. This is considered a “manual” triggering of
         * the tooltip.
         */
        /**
         * Opens an element’s tooltip. This is considered a “manual” triggering of
         * the tooltip.
         * @return {?}
         */
        TooltipDirective.prototype.show = /**
         * Opens an element’s tooltip. This is considered a “manual” triggering of
         * the tooltip.
         * @return {?}
         */
            function () {
                var _this = this;
                if (this.isOpen || this.isDisabled || this._delayTimeoutId || !this.mdbTooltip) {
                    return;
                }
                this._positionService.setOptions({
                    modifiers: {
                        flip: {
                            enabled: this.dynamicPosition,
                        },
                        preventOverflow: {
                            enabled: this.dynamicPosition,
                        },
                    },
                });
                /** @type {?} */
                var showTooltip = ( /**
                 * @return {?}
                 */function () {
                    _this._tooltip
                        .attach(TooltipContainerComponent)
                        .to(_this.container)
                        .position({ attachment: _this.placement })
                        .show({
                        content: _this.mdbTooltip,
                        placement: _this.placement,
                    });
                });
                this.showTooltip(showTooltip);
            };
        /**
         * @private
         * @param {?} fn
         * @return {?}
         */
        TooltipDirective.prototype.showTooltip = /**
         * @private
         * @param {?} fn
         * @return {?}
         */
            function (fn) {
                if (this.delay) {
                    this._delayTimeoutId = setTimeout(( /**
                     * @return {?}
                     */function () {
                        fn();
                    }), this.delay);
                }
                else {
                    fn();
                }
            };
        /**
         * Closes an element’s tooltip. This is considered a “manual” triggering of
         * the tooltip.
         */
        /**
         * Closes an element’s tooltip. This is considered a “manual” triggering of
         * the tooltip.
         * @return {?}
         */
        TooltipDirective.prototype.hide = /**
         * Closes an element’s tooltip. This is considered a “manual” triggering of
         * the tooltip.
         * @return {?}
         */
            function () {
                var _this = this;
                if (this._delayTimeoutId) {
                    clearTimeout(this._delayTimeoutId);
                    this._delayTimeoutId = undefined;
                }
                if (!this._tooltip.isShown) {
                    return;
                }
                this._tooltip.instance.classMap.in = false;
                setTimeout(( /**
                 * @return {?}
                 */function () {
                    _this._tooltip.hide();
                }), this.fadeDuration);
            };
        /**
         * @return {?}
         */
        TooltipDirective.prototype.dispose = /**
         * @return {?}
         */
            function () {
                this._tooltip.dispose();
            };
        /**
         * @return {?}
         */
        TooltipDirective.prototype.ngOnDestroy = /**
         * @return {?}
         */
            function () {
                this._tooltip.dispose();
            };
        TooltipDirective.decorators = [
            { type: i0.Directive, args: [{
                        selector: '[mdbTooltip]',
                        exportAs: 'mdb-tooltip',
                    },] }
        ];
        /** @nocollapse */
        TooltipDirective.ctorParameters = function () {
            return [
                { type: i0.Renderer2 },
                { type: i0.ElementRef },
                { type: PositioningService },
                { type: i0.ViewContainerRef },
                { type: ComponentLoaderFactory },
                { type: TooltipConfig },
                { type: String, decorators: [{ type: i0.Inject, args: [i0.PLATFORM_ID,] }] }
            ];
        };
        TooltipDirective.propDecorators = {
            mdbTooltip: [{ type: i0.Input }],
            tooltipChange: [{ type: i0.Output }],
            placement: [{ type: i0.Input }],
            triggers: [{ type: i0.Input }],
            container: [{ type: i0.Input }],
            isOpen: [{ type: i0.Input }],
            isDisabled: [{ type: i0.Input }],
            dynamicPosition: [{ type: i0.Input }],
            onShown: [{ type: i0.Output }],
            shown: [{ type: i0.Output }],
            onHidden: [{ type: i0.Output }],
            hidden: [{ type: i0.Output }],
            delay: [{ type: i0.Input }],
            customHeight: [{ type: i0.Input }],
            fadeDuration: [{ type: i0.Input }]
        };
        __decorate([
            OnChange$1(),
            __metadata("design:type", Object)
        ], TooltipDirective.prototype, "mdbTooltip", void 0);
        return TooltipDirective;
    }());

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */
    var TooltipModule = /** @class */ (function () {
        function TooltipModule() {
        }
        /**
         * @return {?}
         */
        TooltipModule.forRoot = /**
         * @return {?}
         */
            function () {
                return {
                    ngModule: TooltipModule,
                    providers: [TooltipConfig, ComponentLoaderFactory, PositioningService]
                };
            };
        TooltipModule.decorators = [
            { type: i0.NgModule, args: [{
                        imports: [common.CommonModule],
                        declarations: [TooltipDirective, TooltipContainerComponent],
                        exports: [TooltipDirective],
                        entryComponents: [TooltipContainerComponent]
                    },] }
        ];
        return TooltipModule;
    }());

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */
    var WavesDirective = /** @class */ (function () {
        function WavesDirective(el) {
            this.el = el;
        }
        /**
         * @param {?} event
         * @return {?}
         */
        WavesDirective.prototype.click = /**
         * @param {?} event
         * @return {?}
         */
            function (event) {
                if (!this.el.nativeElement.classList.contains('disabled')) {
                    /** @type {?} */
                    var button = this.el.nativeElement;
                    if (!button.classList.contains('waves-effect')) {
                        button.className += ' waves-effect';
                    }
                    /** @type {?} */
                    var xPos = event.clientX - button.getBoundingClientRect().left;
                    /** @type {?} */
                    var yPos = event.clientY - button.getBoundingClientRect().top;
                    /** @type {?} */
                    var tmp = document.createElement('div');
                    tmp.className += 'waves-ripple waves-rippling';
                    /** @type {?} */
                    var ripple = button.appendChild(tmp);
                    /** @type {?} */
                    var top_1 = yPos + 'px';
                    /** @type {?} */
                    var left = xPos + 'px';
                    tmp.style.top = top_1;
                    tmp.style.left = left;
                    /** @type {?} */
                    var scale = 'scale(' + (button.clientWidth / 100) * 3 + ') translate(0,0)';
                    // tslint:disable-next-line: deprecation
                    tmp.style.webkitTransform = scale;
                    tmp.style.transform = scale;
                    tmp.style.opacity = '1';
                    /** @type {?} */
                    var duration = 750;
                    // tslint:disable-next-line: deprecation
                    tmp.style.webkitTransitionDuration = duration + 'ms';
                    tmp.style.transitionDuration = duration + 'ms';
                    this.removeRipple(button, ripple);
                }
            };
        /**
         * @param {?} button
         * @param {?} ripple
         * @return {?}
         */
        WavesDirective.prototype.removeRipple = /**
         * @param {?} button
         * @param {?} ripple
         * @return {?}
         */
            function (button, ripple) {
                ripple.classList.remove('waves-rippling');
                setTimeout(( /**
                 * @return {?}
                 */function () {
                    ripple.style.opacity = '0';
                    setTimeout(( /**
                     * @return {?}
                     */function () {
                        button.removeChild(ripple);
                    }), 750);
                }), 200);
            };
        WavesDirective.decorators = [
            { type: i0.Directive, args: [{
                        selector: '[mdbWavesEffect]',
                    },] }
        ];
        /** @nocollapse */
        WavesDirective.ctorParameters = function () {
            return [
                { type: i0.ElementRef }
            ];
        };
        WavesDirective.propDecorators = {
            click: [{ type: i0.HostListener, args: ['click', ['$event'],] }]
        };
        return WavesDirective;
    }());

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */
    var WavesModule = /** @class */ (function () {
        function WavesModule() {
        }
        /**
         * @return {?}
         */
        WavesModule.forRoot = /**
         * @return {?}
         */
            function () {
                return { ngModule: WavesModule, providers: [] };
            };
        WavesModule.decorators = [
            { type: i0.NgModule, args: [{
                        declarations: [WavesDirective],
                        exports: [WavesDirective]
                    },] }
        ];
        return WavesModule;
    }());

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */
    /** @enum {string} */
    var Direction$1 = {
        Up: 'Up',
        Down: 'Down',
    };
    var StickyHeaderDirective = /** @class */ (function () {
        function StickyHeaderDirective(_renderer, _el) {
            this._renderer = _renderer;
            this._el = _el;
            this.animationDuration = 200;
            this.transitionEnd = new i0.EventEmitter();
        }
        /**
         * @return {?}
         */
        StickyHeaderDirective.prototype.ngAfterViewInit = /**
         * @return {?}
         */
            function () {
                var _this = this;
                /** @type {?} */
                var scroll$ = rxjs.fromEvent(win, 'scroll').pipe(operators.throttleTime(10), operators.map(( /**
                 * @return {?}
                 */function () { return win.pageYOffset; })), operators.pairwise(), operators.map(( /**
                 * @param {?} __0
                 * @return {?}
                 */function (_a) {
                    var _b = __read(_a, 2), y1 = _b[0], y2 = _b[1];
                    return (y2 < y1 ? Direction$1.Up : Direction$1.Down);
                })), operators.distinctUntilChanged(), operators.share());
                this.scrollUp$ = scroll$.pipe(operators.filter(( /**
                 * @param {?} direction
                 * @return {?}
                 */function (direction) { return direction === Direction$1.Up; })));
                this.scrollDown$ = scroll$.pipe(operators.filter(( /**
                 * @param {?} direction
                 * @return {?}
                 */function (direction) { return direction === Direction$1.Down; })));
                this._renderer.setStyle(this._el.nativeElement, 'position', 'fixed');
                this._renderer.setStyle(this._el.nativeElement, 'top', '0');
                this._renderer.setStyle(this._el.nativeElement, 'width', '100%');
                setTimeout(( /**
                 * @return {?}
                 */function () {
                    _this.scrollUp$.pipe(operators.skip(0)).subscribe(( /**
                     * @return {?}
                     */function () {
                        _this._renderer.setStyle(_this._el.nativeElement, 'transition', "all " + _this.animationDuration + "ms ease-in");
                        _this._renderer.setStyle(_this._el.nativeElement, 'transform', 'translateY(0%)');
                        _this.transitionEnd.emit({ state: 'Visible' });
                    }));
                    _this.scrollDown$.pipe(operators.skip(0)).subscribe(( /**
                     * @return {?}
                     */function () {
                        _this._renderer.setStyle(_this._el.nativeElement, 'transition', "all " + _this.animationDuration + "ms ease-in");
                        _this._renderer.setStyle(_this._el.nativeElement, 'transform', 'translateY(-100%)');
                        _this.transitionEnd.emit({ state: 'Hidden' });
                    }));
                }), 0);
            };
        StickyHeaderDirective.decorators = [
            { type: i0.Directive, args: [{
                        selector: '[mdbStickyHeader]',
                        exportAs: 'mdbStickyHeader',
                    },] }
        ];
        /** @nocollapse */
        StickyHeaderDirective.ctorParameters = function () {
            return [
                { type: i0.Renderer2 },
                { type: i0.ElementRef }
            ];
        };
        StickyHeaderDirective.propDecorators = {
            animationDuration: [{ type: i0.Input }],
            transitionEnd: [{ type: i0.Output }]
        };
        return StickyHeaderDirective;
    }());

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */
    var StickyHeaderModule = /** @class */ (function () {
        function StickyHeaderModule() {
        }
        StickyHeaderModule.decorators = [
            { type: i0.NgModule, args: [{
                        declarations: [StickyHeaderDirective],
                        exports: [StickyHeaderDirective],
                        imports: [common.CommonModule],
                    },] }
        ];
        return StickyHeaderModule;
    }());

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */
    /** @type {?} */
    var MODULES = [
        ButtonsModule,
        CardsModule,
        WavesModule,
        InputsModule,
        NavbarModule,
        DropdownModule,
        CarouselModule,
        ChartsModule,
        CollapseModule,
        ModalModule,
        TooltipModule,
        PopoverModule,
        IconsModule,
        CheckboxModule,
        TableModule,
        BadgeModule,
        BreadcrumbModule,
        InputUtilitiesModule,
        StickyHeaderModule,
    ];
    var MDBRootModule = /** @class */ (function () {
        function MDBRootModule() {
        }
        MDBRootModule.decorators = [
            { type: i0.NgModule, args: [{
                        imports: [
                            ButtonsModule,
                            WavesModule.forRoot(),
                            InputsModule.forRoot(),
                            NavbarModule,
                            DropdownModule.forRoot(),
                            CarouselModule.forRoot(),
                            ChartsModule,
                            CollapseModule.forRoot(),
                            ModalModule.forRoot(),
                            TooltipModule.forRoot(),
                            PopoverModule.forRoot(),
                            IconsModule,
                            CardsModule.forRoot(),
                            CheckboxModule,
                            TableModule,
                            BadgeModule,
                            BreadcrumbModule,
                            InputUtilitiesModule,
                            StickyHeaderModule,
                        ],
                        exports: MODULES,
                        schemas: [i0.NO_ERRORS_SCHEMA],
                    },] }
        ];
        return MDBRootModule;
    }());
    var MDBBootstrapModule = /** @class */ (function () {
        function MDBBootstrapModule() {
        }
        /**
         * @return {?}
         */
        MDBBootstrapModule.forRoot = /**
         * @return {?}
         */
            function () {
                return { ngModule: MDBRootModule };
            };
        MDBBootstrapModule.decorators = [
            { type: i0.NgModule, args: [{ exports: MODULES },] }
        ];
        return MDBBootstrapModule;
    }());

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */

    exports.BadgeModule = BadgeModule;
    exports.MDBBadgeComponent = MDBBadgeComponent;
    exports.MdbBreadcrumbComponent = MdbBreadcrumbComponent;
    exports.MdbBreadcrumbItemComponent = MdbBreadcrumbItemComponent;
    exports.BreadcrumbModule = BreadcrumbModule;
    exports.MdbBtnDirective = MdbBtnDirective;
    exports.ButtonsModule = ButtonsModule;
    exports.ButtonRadioDirective = ButtonRadioDirective;
    exports.ButtonCheckboxDirective = ButtonCheckboxDirective;
    exports.FixedButtonCaptionDirective = FixedButtonCaptionDirective;
    exports.CardsModule = CardsModule;
    exports.MdbCardComponent = MdbCardComponent;
    exports.MdbCardBodyComponent = MdbCardBodyComponent;
    exports.MdbCardImageComponent = MdbCardImageComponent;
    exports.MdbCardTextComponent = MdbCardTextComponent;
    exports.MdbCardTitleComponent = MdbCardTitleComponent;
    exports.MdbCardFooterComponent = MdbCardFooterComponent;
    exports.MdbCardHeaderComponent = MdbCardHeaderComponent;
    exports.CarouselComponent = CarouselComponent;
    exports.CarouselModule = CarouselModule;
    exports.SlideComponent = SlideComponent;
    exports.CarouselConfig = CarouselConfig;
    exports.ChartsModule = ChartsModule;
    exports.BaseChartDirective = BaseChartDirective;
    exports.CHECKBOX_VALUE_ACCESSOR = CHECKBOX_VALUE_ACCESSOR;
    exports.CheckboxComponent = CheckboxComponent;
    exports.MdbCheckboxChange = MdbCheckboxChange;
    exports.CheckboxModule = CheckboxModule;
    exports.CollapseComponent = CollapseComponent;
    exports.CollapseModule = CollapseModule;
    exports.BsDropdownDirective = BsDropdownDirective;
    exports.BsDropdownMenuDirective = BsDropdownMenuDirective;
    exports.BsDropdownToggleDirective = BsDropdownToggleDirective;
    exports.BsDropdownContainerComponent = BsDropdownContainerComponent;
    exports.BsDropdownState = BsDropdownState;
    exports.BsDropdownConfig = BsDropdownConfig;
    exports.DropdownModule = DropdownModule;
    exports.MdbIconComponent = MdbIconComponent;
    exports.FalDirective = FalDirective;
    exports.FarDirective = FarDirective;
    exports.FasDirective = FasDirective;
    exports.FabDirective = FabDirective;
    exports.IconsModule = IconsModule;
    exports.InputUtilitiesModule = InputUtilitiesModule;
    exports.MdbErrorDirective = MdbErrorDirective;
    exports.MdbSuccessDirective = MdbSuccessDirective;
    exports.MdbValidateDirective = MdbValidateDirective;
    exports.InputsModule = InputsModule;
    exports.EqualValidatorDirective = EqualValidatorDirective;
    exports.MdbInputDirective = MdbInputDirective;
    exports.MdbInput = MdbInput;
    exports.ModalBackdropComponent = ModalBackdropComponent;
    exports.ModalBackdropOptions = ModalBackdropOptions;
    exports.ModalOptions = ModalOptions;
    exports.MDBModalRef = MDBModalRef;
    exports.ModalDirective = ModalDirective;
    exports.ModalModule = ModalModule;
    exports.MDBModalService = MDBModalService;
    exports.ModalContainerComponent = ModalContainerComponent;
    exports.NavbarComponent = NavbarComponent;
    exports.NavbarModule = NavbarModule;
    exports.LinksComponent = LinksComponent;
    exports.NavlinksComponent = NavlinksComponent;
    exports.LogoComponent = LogoComponent;
    exports.NavbarService = NavbarService;
    exports.PopoverDirective = PopoverDirective;
    exports.PopoverModule = PopoverModule;
    exports.PopoverConfig = PopoverConfig;
    exports.PopoverContainerComponent = PopoverContainerComponent;
    exports.TableModule = TableModule;
    exports.MdbTablePaginationComponent = MdbTablePaginationComponent;
    exports.MdbTableRowDirective = MdbTableRowDirective;
    exports.MdbTableScrollDirective = MdbTableScrollDirective;
    exports.MdbTableSortDirective = MdbTableSortDirective;
    exports.MdbTableDirective = MdbTableDirective;
    exports.MdbTableService = MdbTableService;
    exports.TooltipContainerComponent = TooltipContainerComponent;
    exports.TooltipDirective = TooltipDirective;
    exports.TooltipModule = TooltipModule;
    exports.TooltipConfig = TooltipConfig;
    exports.WavesDirective = WavesDirective;
    exports.WavesModule = WavesModule;
    exports.StickyHeaderDirective = StickyHeaderDirective;
    exports.StickyHeaderModule = StickyHeaderModule;
    exports.MDBRootModule = MDBRootModule;
    exports.MDBBootstrapModule = MDBBootstrapModule;
    exports.ɵb = CHECKBOX_CONTROL_VALUE_ACCESSOR;
    exports.ɵa = RADIO_CONTROL_VALUE_ACCESSOR;
    exports.ɵc = CHECKBOX_VALUE_ACCESSOR;
    exports.ɵd = CheckboxComponent;
    exports.ɵe = ComponentLoaderFactory;
    exports.ɵg = OnChange$1;
    exports.ɵf = PositioningService;

    Object.defineProperty(exports, '__esModule', { value: true });

})));

//# sourceMappingURL=angular-bootstrap-md.umd.js.map
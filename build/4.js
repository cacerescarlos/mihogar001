webpackJsonp([4],{

/***/ 284:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ConfigPageModule", function() { return ConfigPageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(28);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__config__ = __webpack_require__(299);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var ConfigPageModule = /** @class */ (function () {
    function ConfigPageModule() {
    }
    ConfigPageModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModule"])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_2__config__["a" /* ConfigComponent */],
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["d" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__config__["a" /* ConfigComponent */]),
            ],
        })
    ], ConfigPageModule);
    return ConfigPageModule;
}());

//# sourceMappingURL=config.module.js.map

/***/ }),

/***/ 299:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ConfigComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__controllers_config_service__ = __webpack_require__(201);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var ConfigComponent = /** @class */ (function () {
    function ConfigComponent(configuracion) {
        this.configuracion = configuracion;
        this.modalidades = [];
        this.ciudades = [];
        this.trabajos = [];
        this.getCiudades();
        this.getModalidades();
        this.getTrabajos();
    }
    ConfigComponent.prototype.ngOnInit = function () {
    };
    ConfigComponent.prototype.getModalidades = function () {
        var _this = this;
        this.configuracion.getModalidad()
            .subscribe(function (res) {
            console.log(res);
            _this.modalidades = res;
        });
    };
    /* -------------------- GET DE CONFIGURACION ------------------ */
    ConfigComponent.prototype.getCiudades = function () {
        var _this = this;
        this.configuracion.getCiudad()
            .subscribe(function (data) {
            console.log(data);
            _this.ciudades = data;
        });
    };
    ConfigComponent.prototype.getTrabajos = function () {
        var _this = this;
        this.configuracion.getTrabajo()
            .subscribe(function (res) {
            console.log(res);
            _this.trabajos = res;
        });
    };
    ConfigComponent.prototype.postModalidades = function (fr) {
        var _this = this;
        var value = fr.value.nombre_modalidad;
        console.log(value);
        var datos = {
            'std_modalidad': true,
            'nombre_modalidad': value,
            'tipo_modalidad': 'MIHOGAR'
        };
        if (value !== undefined && value !== null && value !== '') {
            this.configuracion.postModalidades(datos)
                .subscribe(function (res) {
                console.log(res);
                _this.getModalidades();
            });
            fr.reset();
        }
    };
    ConfigComponent.prototype.postCiudades = function (fr) {
        var _this = this;
        var value = fr.value.nombre_ciudad;
        console.log(value);
        var datos = {
            'std_ciudad': true,
            'nombre_ciudad': value,
            'tipo_ciudad': 'MIHOGAR'
        };
        if (value !== undefined && value !== null && value !== '') {
            this.configuracion.postCiudades(datos)
                .subscribe(function (res) {
                console.log(res);
                _this.getCiudades();
            });
            fr.reset();
        }
    };
    ConfigComponent.prototype.postTrabajos = function (fr) {
        var _this = this;
        var value = fr.value.nombre_trabajo;
        console.log(value);
        var datos = {
            'std_trabajo': true,
            'nombre_trabajo': value,
            'tipo_trabajo': 'MIHOGAR'
        };
        if (value !== undefined && value !== null && value !== '') {
            this.configuracion.postTrabajos(datos)
                .subscribe(function (res) {
                console.log(res);
                _this.getTrabajos();
            });
            fr.reset();
        }
    };
    ConfigComponent.prototype.deleteTrabajo = function (id) {
        var _this = this;
        console.log(id);
        var value = id;
        if (value !== undefined && value !== null && value !== '') {
            this.configuracion.deleteTrabajos(value)
                .subscribe(function (res) {
                console.log(res);
                _this.getTrabajos();
            });
        }
    };
    ConfigComponent.prototype.deleteCiudad = function (id) {
        var _this = this;
        console.log(id);
        var value = id;
        if (value !== undefined && value !== null && value !== '') {
            this.configuracion.deleteCiudades(value)
                .subscribe(function (res) {
                console.log(res);
                _this.getCiudades();
            });
        }
    };
    ConfigComponent.prototype.deleteModalidad = function (id) {
        var _this = this;
        console.log(id);
        var value = id;
        if (value !== undefined && value !== null && value !== '') {
            this.configuracion.deleteModalidades(value)
                .subscribe(function (res) {
                console.log(res);
                _this.getModalidades();
            });
        }
    };
    ConfigComponent.prototype.editModalidad = function (dts_mod) {
        // console.log(dts_mod);
        $('#edit_nm_mod').val(dts_mod.nombre_modalidad);
        if (dts_mod.std_modalidad == '0') {
            $("#edit_std_mod").prop('checked', false);
            $("#std_mod_txt").text(' INACTIVO');
        }
        else {
            $("#edit_std_mod").prop('checked', true);
            $("#std_mod_txt").text(' ACTIVO');
        }
        $("#edit_nm_mod").val(dts_mod.nombre_modalidad);
        $("#edit_std_mod").val(dts_mod.std_modalidad);
        $("#edit_origen_mod").val(dts_mod.tipo_modalidad);
    };
    ConfigComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'config',template:/*ion-inline-start:"C:\Users\SERVER\Desktop\proyecto_final\ionic4\mihogar001\src\pages\busqueda\config\config.html"*/'<style type="text/css">\n  .material-switch>input[type="checkbox"] {\n    display: none;\n  }\n\n  .material-switch>label {\n    cursor: pointer;\n    height: 0px;\n    position: relative;\n    width: 40px;\n  }\n\n  .material-switch>label::before {\n    background: rgb(0, 0, 0);\n    box-shadow: inset 0px 0px 10px rgba(0, 0, 0, 0.5);\n    border-radius: 8px;\n    content: \'\';\n    height: 16px;\n    margin-top: -8px;\n    position: absolute;\n    opacity: 0.3;\n    transition: all 0.4s ease-in-out;\n    width: 40px;\n  }\n\n  .material-switch>label::after {\n    background: rgb(255, 255, 255);\n    border-radius: 16px;\n    box-shadow: 0px 0px 5px rgba(0, 0, 0, 0.3);\n    content: \'\';\n    height: 24px;\n    left: -4px;\n    margin-top: -8px;\n    position: absolute;\n    top: -4px;\n    transition: all 0.3s ease-in-out;\n    width: 24px;\n  }\n\n  .material-switch>input[type="checkbox"]:checked+label::before {\n    background: inherit;\n    opacity: 0.5;\n  }\n\n  .material-switch>input[type="checkbox"]:checked+label::after {\n    background: inherit;\n    left: 20px;\n  }\n</style>\n\n<ion-header>\n\n  <ion-navbar>\n    <button ion-button menuToggle>\n      <ion-icon name="menu"></ion-icon>\n    </button>\n    <ion-title>Opciones</ion-title>\n  </ion-navbar>\n\n</ion-header>\n\n<!--The content below is only a placeholder and can be replaced.-->\n<ion-content>\n<div style="text-align:center">\n  <div class="well">\n    <h1>\n      CONFIGURACION\n    </h1>\n\n  </div>\n\n\n</div>\n<hr>\n\n  <div class="row">\n    <!-- MODALIDAD -->\n    <div class="col-md-4">\n      <h3>Modalidades MiHogar</h3>\n      <form #frModalidades="ngForm" (ngSubmit)="postModalidades(frModalidades)">\n        <div class="input-group">\n          <input class="form-control" placeholder="Ingrese una modalidad de trabajo" name="nombre_modalidad" ngModel required autocomplete="off">\n          <span class="input-group-btn">\n            <button class="btn btn-primary" type="submit">\n              AGREGAR\n            </button>\n          </span>\n        </div>\n      </form>\n      <br>\n      <ul *ngFor="let modalidad of modalidades">\n        <li>\n          {{ modalidad.nombre_modalidad }} , STD= {{ modalidad.std_modalidad }}\n          <button class="btn btn-warning btn-xs" disabled data-toggle="modal" data-target="#modal_edit_modalidad" (click)="editModalidad(modalidad)">Edit</button>\n          <button class="btn btn-danger btn-xs" (click)="deleteModalidad(modalidad._id)">Delete</button>\n\n        </li>\n      </ul>\n    </div>\n    <!-- MODALIDAD -->\n\n    <!-- CIUDADES -->\n    <div class="col-md-4">\n      <h1>CIUDADES</h1>\n      <form #frmCiudades="ngForm" (ngSubmit)="postCiudades(frmCiudades)">\n        <div class="input-group">\n          <input class="form-control" placeholder="Escriba" name="nombre_ciudad" ngModel required autocomplete="off">\n          <span class="input-group-btn">\n            <button class="btn btn-primary" type="submit">\n              AGREGAR\n            </button>\n          </span>\n        </div>\n      </form>\n\n      <br>\n      <ul *ngFor="let ciudad of ciudades">\n        <li>\n          {{ ciudad.nombre_ciudad }} , STD= {{ ciudad.std_ciudad }}\n          <button class="btn btn-danger btn-xs" (click)="deleteCiudad(ciudad._id)">Delete</button>\n\n        </li>\n      </ul>\n    </div>\n\n    <!-- TRABAJOS -->\n    <div class="col-md-4">\n      <h1> TRABAJOS</h1>\n      <form #frmTrabajos="ngForm" (ngSubmit)="postTrabajos(frmTrabajos)">\n        <div class="input-group">\n          <input class="form-control" placeholder="Escriba" name="nombre_trabajo" ngModel required autocomplete="off">\n          <span class="input-group-btn">\n            <button class="btn btn-primary" type="submit">\n              AGREGAR\n            </button>\n          </span>\n        </div>\n      </form>\n      <br>\n\n      <ul *ngFor="let trabajo of trabajos">\n        <li>\n          {{ trabajo.nombre_trabajo }} , STD= {{ trabajo.std_trabajo }}\n          <button class="btn btn-danger btn-xs" (click)="deleteTrabajo(trabajo._id)">Delete</button>\n        </li>\n      </ul>\n    </div>\n  </div>\n\n\n<!-- MODAL EDITAR MODALIDAD \nonclick="set_edit_modalidad();"\n-->\n<div class="modal fade" id="modal_edit_modalidad" role="dialog">\n  <div class="modal-dialog modal-sm">\n    <div class="modal-content">\n      <div class="modal-header">\n        <button type="button" class="close" data-dismiss="modal">&times;</button>\n        <h4 class="modal-title">EDITAR MODALIDAD</h4>\n      </div>\n      <div class="modal-body">\n        <form id="form_modalidad_edit" name="form_modalidad_edit">\n\n          <input type="hidden" class="form-control" name="edit_id_mod" id="edit_id_mod">\n\n          <ul class="list-group">\n            <li class="list-group-item">\n              MODALIDAD:\n              <input type="text" class="form-control" name="edit_nm_mod" id="edit_nm_mod">\n            </li>\n\n            <li class="list-group-item">\n              ESTADO:\n              <label id="std_mod_txt" name="std_mod_txt"></label>\n              <div class="material-switch pull-right">\n                <input name="edit_std_mod" id="edit_std_mod" type="checkbox" value="0" onchange="cambio_std_mod(this.value)" />\n                <label for="edit_std_mod" class="label-success"></label>\n              </div>\n            </li>\n\n            <li class="list-group-item">\n              TIPO:\n              <input type="text" readonly class="form-control" name="edit_origen_mod" id="edit_origen_mod">\n            </li>\n\n\n          </ul>\n        </form>\n\n      </div>\n\n      <div class="modal-footer">\n        <button type="button" class="btn btn-warning btn3d" data-dismiss="modal">\n          <span class=\'glyphicon glyphicon-pencil\'></span>\n        </button>\n        <button type="button" class="btn btn-danger btn3d" data-dismiss="modal">\n          <span class=\'glyphicon glyphicon-remove\'></span>\n        </button>\n      </div>\n    </div>\n  </div>\n</div>\n</ion-content>\n<!-- END MODAL EDITAR MODALIDAD -->\n'/*ion-inline-end:"C:\Users\SERVER\Desktop\proyecto_final\ionic4\mihogar001\src\pages\busqueda\config\config.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__controllers_config_service__["a" /* ConfigService */]])
    ], ConfigComponent);
    return ConfigComponent;
}());

//# sourceMappingURL=config.js.map

/***/ })

});
//# sourceMappingURL=4.js.map
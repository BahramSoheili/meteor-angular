/**
 * Created by Bahram on 6/11/2016.
 */
/// <reference path="../typings/meteor.d.ts" />
import { Mongo } from 'meteor/mongo';
import * as _ from 'meteor/meteor';
import { Tracker } from 'meteor/tracker';
import 'angular2-meteor-polyfills';
import 'reflect-metadata';
import 'zone.js/dist/zone';
import {Component, NgZone } from '@angular/core';
import { bootstrap } from '@angular/platform-browser-dynamic';
import { Parties } from '../collections/parties.ts';
import { enableProdMode } from '@angular/core';
enableProdMode();
@Component({
    selector : 'my-app',
    templateUrl : '/client/app.html'
})
class Socially {
    parties: Mongo.Cursor<Object>;
    //parties: _.Cursor<Object>;
    constructor (zone: NgZone) {
        Tracker.autorun(() => zone.run(() => {
            this.parties = Parties.find();
        }));
    }
}
bootstrap(Socially);

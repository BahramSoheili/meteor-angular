/// <reference path="../typings/meteor.d.ts" />
import { Mongo } from 'meteor/mongo';
import {Meteor} from 'meteor/meteor';
import {Parties} from '../collections/parties.ts';
import {loadParties} from './load-parties.ts';

Meteor.startup(loadParties);
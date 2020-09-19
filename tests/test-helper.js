import Application from 'bracke-blog/app';
import config from 'bracke-blog/config/environment';
import { setApplication } from '@ember/test-helpers';
import { start } from 'ember-qunit';

setApplication(Application.create(config.APP));

start();

<<<<<<< HEAD
import Application from 'bracke-blog/app';
import config from 'bracke-blog/config/environment';
=======
import Application from 'my-app/app';
import config from 'my-app/config/environment';
import * as QUnit from 'qunit';
>>>>>>> 3670044... message
import { setApplication } from '@ember/test-helpers';
import { setup } from 'qunit-dom';
import { start } from 'ember-qunit';

setApplication(Application.create(config.APP));

setup(QUnit.assert);

start();

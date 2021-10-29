#!/usr/bin/env node
/*
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 * 
 *     https://www.apache.org/licenses/LICENSE-2.0
 * 
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
const process = require('process');
const auth = require('./components/auth.js');
const browser = require('./components/browser.js');
const htmlGen = require('./components/htmlGen.js');
const logging = require('./components/logging.js');
const analysis = require('./components/analysis.js');

const commands = {};
const yargs = require('yargs/yargs')(process.argv.slice(2))
  .options({
    'trip': {
      describe: 'trip id to view',
      required:true,
    },
    'apikey': {
      describe: 'apikey',
      required:true,
    },
  });
const argv = yargs.argv;

async function main() {
   await auth.init();
   const filePath = `jsjs/src/JSJSConfig.ts`;
   // TODO: move rest of data into encode block
   const params = {
      APIKEY:argv.apikey,
      jwt: await auth.mintJWT(),
      projectId: auth.getProjectId(),
      tripId: argv.trip,
   }

   htmlGen.writeJS(filePath, params);
}

main();

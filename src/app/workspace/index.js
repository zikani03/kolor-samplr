'use strict';
import Workspace from './workspace.js';

const fs = require('fs');
const path = require('path');

const html = fs.readFileSync(path.join(__dirname,'/workspace.html'), 'utf8');
const Component = {
    viewModel: function (params) {
        this.workspace = new Workspace(params.workspaceId, params.imageUrl, {});
    },
    template: html
};

export default Component;
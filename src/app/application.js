'use strict';
import ko from 'knockout';
// import WorkspaceViewModel from 'workspace/workspace.js';

class Application {
  constructor () {
    this.workspaces = ko.observableArray([]);
  }

  addWorkspace(imageUrl) {
    const workspace = { imgUrl: imageUrl, name: 'workspace-' + (new Date()*3) };
    this.workspaces.push(workspace);
  }
}

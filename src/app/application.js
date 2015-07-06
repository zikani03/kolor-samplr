'use strict';
import ko from 'knockout';
// import WorkspaceViewModel from 'workspace/workspace.js';

class Application {
  constructor () {
    this.workspaces = ko.observableArray([]);
  }

  addWorkspace(imageUrl) {
    const workspace = { imageUrl: imageUrl, workspaceId: 'workspace-' + (new Date()*3) };
    this.workspaces.push(workspace);
  }
}

export default Application;
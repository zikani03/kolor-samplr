import Workspace from './workspace.js';

class WorkspaceViewModel {
    constructor(params) {
        this.workspace = new Workspace(params.imgUrl, {});
    }
}

module.Component = {
    viewModel: WorkspaceViewModel,
    template: 'workspace/workspace.html'
};
Blockly.BlockDragger.prototype.startBlockDrag = function (a) {
    Blockly.Events.getGroup() || Blockly.Events.setGroup(!0);
    this.workspace_.setResizesEnabled(!1);
    Blockly.BlockAnimations.disconnectUiStop();
    (this.draggingBlock_.getParent() || this.workspace_.shiftPressed) &&
        (this.draggingBlock_.unplug(this.workspace_.shiftPressed),
        (a = this.pixelsToWorkspaceUnits_(a)),
        (a = goog.math.Coordinate.sum(this.startXY_, a)),
        this.draggingBlock_.translate(a.x, a.y),
        Blockly.BlockAnimations.disconnectUiEffect(this.draggingBlock_));
    this.draggingBlock_.setDragging(!0);
    this.draggingBlock_.moveToDragSurface_();
    if ((a = this.workspace_.getToolbox())) {
        var b = this.draggingBlock_.isDeletable() ? 'blocklyToolboxDelete' : 'blocklyToolboxGrab';
        a.addStyle(b);
    }
};

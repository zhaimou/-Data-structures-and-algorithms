var MinStack = function() {
    // 关键问题，如何维护栈中的最小元素？注意，是常数级别找到，也就是保存数组的index 还是直接存储值？
    this.stack = [];
    this.minVal = undefined;
};

MinStack.prototype.push = function(val) {
    this.stack.push(val);
    if (this.minVal === undefined) {
        this.minVal = val;
    } else {
        this.minVal = Math.min(val, this.minVal);
    }
};
MinStack.prototype.pop = function() {
    const val = this.stack.pop();
    if (val === this.minVal) { // 如果是栈最小元素出去了，再次寻找最小值
        this.minVal = this.stack[0];
        for (let i = 1; i < this.stack.length; i++) {
            this.minVal = Math.min(this.stack[i], this.minVal);
        }
    }
    return val;
};

MinStack.prototype.top = function() {
    if (this.stack.length === 0) {
        return null;
    }
    return this.stack[this.stack.length - 1];
};

MinStack.prototype.getMin = function() {
    return this.minVal;
};
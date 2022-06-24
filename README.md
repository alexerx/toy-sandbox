# toy-sandbox

## 快照沙箱

即给当前的运行环境打一个快照，再在需要的时候恢复快照，实现应用间的隔离。

关键的变量、方法：

- snapshotOriginal
- snapshotMutated
- activate()
- deactivate()

基本流程：

- activate时，遍历window上的变量，存为snapshotOriginal
- deactivate时，再次遍历window，与snapshotOriginal diff，将结果保存到snapshotMutated，window恢复到snapshotOriginal
- 切换回当前应用时，把snapshotMutated恢复到window上

## VM沙箱

即创建一个上下文，沙箱里变量、函数的声明、调用都在这个上下文里执行。

本repo即尝试实现一个VM沙箱

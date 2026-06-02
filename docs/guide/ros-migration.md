# ROS 工程师迁移指南

如果你已经熟悉 ROS / ROS 2，可以把 Dora 先理解成一种更偏数据流的机器人应用组织方式。

## 概念对照

| ROS / ROS 2 | Dora |
| --- | --- |
| Node | Node |
| Topic | Output / Input |
| Launch file | dataflow.yml |
| Message passing | Arrow 数据 + 共享内存 |
| ros2 run / launch | dora run |

## 迁移时先关注什么？

### 先迁移数据链路

不要一上来迁移整个工程。建议先挑一条明确链路，例如：

```text
camera -> detector -> visualizer
```

把每一步拆成 Dora 节点，确认输入输出能跑通，再逐步接入真实硬件。

### 把隐式依赖写进 YAML

ROS 工程里常见的 launch 参数、节点依赖、topic 名称，在 Dora 里建议尽量显式写进 `dataflow.yml`。这会让新人更容易复现，也更适合沉淀成社区示例。

### 不要照搬包结构

Dora 更鼓励按数据流切分模块。一个已有 ROS 包可以拆成多个节点，也可以先保留原脚本，只把输入输出接到 Dora。

## 常见问题

**Dora 是 ROS 的替代品吗？**

不必这样理解。Dora 更适合声明式数据流、跨语言节点、低延迟数据传递和具身智能应用编排。已有 ROS 生态仍然可以作为硬件驱动或算法来源。

**迁移的第一步是什么？**

选一个能独立验证的 demo，把 topic 流向画出来，再翻译成 `dataflow.yml`。

# 核心概念

理解 Dora 只需要记住三个词：**节点 → 数据流 → 运行时**。

## 节点 Node

一个节点是一个**独立的进程**，负责做一件事。它有：

- **id**：在这张数据流图里的唯一标识
- **inputs**：从别的节点接收什么数据
- **outputs**：自己产出什么数据
- **path**：要执行的程序（Python 脚本、Rust 二进制、C++ 可执行文件...）

```yaml
- id: camera
  path: opencv-capture
  outputs:
    - image
```

> 关键点：节点是独立进程，**崩溃不影响别人**。这是 Dora 的容错基础。

## 数据流 Dataflow

把多个节点用「输入↔输出」连起来，就是一张**有向数据流图**。整张图写在一份 YAML 里。

```yaml
- id: detector
  inputs:
    image: camera/image  # 这条线就是数据流
  outputs:
    - bbox
```

数据在节点间通过 **共享内存 + Apache Arrow** 传递，零拷贝、几乎无延迟。

## 运行时 Runtime

Dora 运行时由两部分组成：

- **dora-daemon**：守护进程，管理单台机器上的所有节点
- **dora-coordinator**：协调器，负责跨机器部署

你不需要直接操作它们，只面对一个 CLI：

```bash
dora up                # 启动守护进程
dora run yolo.yml      # 运行一份数据流
dora list              # 查看正在运行的图
dora destroy           # 停止
```

## 心智总结

> 把机器人拆成一堆小盒子（节点），用一张图（数据流）描述它们怎么协作，让一个调度器（运行时）跑起来。

理解了这三个词，你就理解了 Dora 的全部。

## 下一步

- [快速上手](/guide/quick-start) - 5 分钟跑通第一个 demo
- [YAML 配置详解](/guide/yaml-config) - 所有可配置的字段
- [运行时进阶](/guide/runtime) - Daemon 和 Coordinator 的工作原理

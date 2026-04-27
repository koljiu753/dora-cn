# 快速上手

让你从零到跑通第一个 Dora 数据流，**只需 5 分钟**。

## 前置条件

- Python 3.9 或更高版本
- 操作系统：Linux / macOS / Windows 均可
- 摄像头（可选——没有也能跑 mock 节点）

## 第一步：安装 CLI

```bash
pip install dora-rs-cli
dora -h
```

看到类似 `dora-rs cli client` 的输出即安装成功。

::: tip
如果你倾向于 Rust 工具链，也可以用 cargo：
```bash
cargo install dora-cli
```
:::

## 第二步：写一份 dataflow.yml

新建文件 `yolo.yml`，粘贴以下内容：

```yaml
nodes:
  - id: camera
    build: pip install opencv-video-capture
    path: opencv-video-capture
    outputs: [image]

  - id: yolo
    build: pip install dora-yolo
    path: dora-yolo
    inputs:
      image: camera/image
    outputs: [bbox]

  - id: plot
    build: pip install dora-rerun
    path: dora-rerun
    inputs:
      image: camera/image
      boxes2d: yolo/bbox
```

这份 YAML 描述了三个节点（摄像头、YOLO 检测器、Rerun 可视化）以及它们之间的数据流向。

## 第三步：跑起来

```bash
dora build yolo.yml
dora run yolo.yml
```

如果一切顺利，你会看到 Rerun 窗口弹出，里面是带检测框的实时摄像头画面，速度大约 50 fps。

## 没摄像头怎么办？

把 `camera` 节点替换为 `mock-video`：

```yaml
- id: camera
  build: pip install dora-mock-video
  path: dora-mock-video
  outputs: [image]
```

它会循环播放一段内置视频，让你验证整条流水线。

## 下一步

- [了解核心概念](/guide/concepts) - 节点、数据流、运行时是什么
- [浏览示例库](/examples/) - 看看 18 个完整的 demo
- [写自己的节点](/guide/write-node) - 用 Python 编写定制逻辑

# 示例库

每个示例都是完整的 Git 仓库 + YAML，**clone 即用**。

## 入门级

### [实时目标检测](/examples/yolo)
摄像头 → YOLOv8 → Rerun 可视化。10 行 YAML 看懂数据流。
- 标签：YOLOv8 / Python / 3 节点
- 时长：5 min

### [深度相机点云可视化](/examples/realsense)
Intel RealSense 深度流 → 点云 → 实时 3D 渲染。
- 标签：RealSense / Open3D / 4 节点
- 时长：10 min

## 进阶级

### [会说话的桌面助手](/examples/voice-assistant)
语音唤醒 · 语音识别 · 大模型推理 · 合成回复，全本地运行。
- 标签：Whisper / Qwen / 6 节点
- 时长：20 min

### [2D 激光建图导航](/examples/slam)
激光雷达 + 里程计融合，构建地图并实时定位。
- 标签：SLAM / FAST-LIO / 5 节点
- 时长：40 min

## 硬核级

### [机械臂模仿学习](/examples/lerobot)
采集数据 → 训练策略 → 部署推理，端到端一张图。
- 标签：LeRobot / VLA / 8 节点
- 时长：2 hr

### [多路相机时间同步](/examples/multi-cam-sync)
纯 Rust 节点，硬件时间戳对齐，用于传感器融合。
- 标签：Rust / Multi-cam / 5 节点
- 时长：1 hr

---

::: tip 想贡献示例？
我们欢迎社区贡献新的示例。请遵循 [示例投稿模板](https://github.com/koljiu753/dora-cn/issues/new?template=example.md)。
:::

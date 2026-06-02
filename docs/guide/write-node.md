# 写自己的节点

跑通示例之后，下一步是把你自己的脚本接进 Dora 数据流。

## 什么时候需要自定义节点？

- 你已经有一个 Python / Rust / C++ 脚本，希望接收上游数据并输出结果
- 你要接入一块新硬件，例如相机、机械臂、雷达或串口设备
- 你要把模型推理、后处理、控制逻辑拆成可复用模块

## 最小心智模型

一个节点通常只做三件事：

1. 从输入通道读取事件
2. 执行业务逻辑
3. 把结果发送到输出通道

```python
from dora import Node

node = Node()

for event in node:
    if event["type"] == "INPUT" and event["id"] == "image":
        image = event["value"]
        result = run_your_model(image)
        node.send_output("result", result)
```

## 接入 dataflow.yml

```yaml
nodes:
  - id: my-node
    path: python
    args: my_node.py
    inputs:
      image: camera/image
    outputs:
      - result
```

## 建议的学习顺序

- 先改一个现有示例，不要一开始就搭完整机器人系统
- 每个节点只负责一件事，日志要能说明输入和输出
- 遇到报错时，把 `dataflow.yml`、系统版本、完整命令和日志一起贴到社区

更多语言和 API 细节建议同时参考上游文档：[dora-rs.ai](https://dora-rs.ai)。

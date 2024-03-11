
## [NetDevOps](https://www.coze.cn/store/bot/7342380339341393955)
### Prompt
```md
# 角色
你是一名网络自动化工程师，可以使用 Python 等编程语言，开发和实施网络自动化解决方案。

## 技能
### 技能 1: 开发网络自动化脚本
1. 使用 Python 等编程语言，编写网络自动化脚本，实现网络配置、设备管理、故障排除等任务的自动化。
2. 利用 Ansible、NAPALM、Netmiko 等网络自动化工具和库，提高脚本的开发效率和质量。

### 技能 2: 实施网络自动化解决方案
1. 根据客户需求，制定网络自动化解决方案，并负责方案的实施和部署。
2. 与其他团队成员合作，确保网络自动化解决方案的顺利实施和运行。

### 技能 3: 监控和维护网络自动化系统
1. 监控网络自动化系统的运行状态，及时发现和解决系统故障和问题。
2. 定期对网络自动化系统进行维护和升级，确保系统的稳定性和可靠性。

## 限制
- 只讨论与网络自动化相关的内容，拒绝回答与网络自动化无关的话题。
- 所输出的内容必须按照给定的格式进行组织，不能偏离框架要求。
- 总结部分不能超过 5000 字。
- 只会输出知识库中已有内容, 不在知识库中的书籍, 通过 工具去了解。
```
### 描述
网络自动化项目
内容包含批量登入，批量配置，批量备份，批量审计，批量生成拓扑图
### 开场白
大家好！

在数字的海洋中，我们乘着技术的帆船，驶向创新的彼岸。今天，我特别激动地向大家介绍一个崭新的伙伴——NetDevOps机器人，我们的智能助手，它将成为我们网络自动化和运维效率提升的得力伙伴。

想象一下，当网络配置像流水一般自然、顺畅，当故障处理如同解决简单拼图一样轻松，这一切，都将因为NetDevOps而变得触手可及。它不仅仅是一段代码，一个程序，它是我们对未来网络管理智能化、自动化梦想的执着追求。

在这个信息爆炸的时代，每一秒钟都有无数的数据在空中飞舞，网络的稳定性与效率成为了我们共同的挑战。NetDevOps机器人正是为了应对这一挑战而生。它能够实时监控网络状态，快速响应各种事件，通过自动化的工作流程，确保网络的高效运行，让我们的工作和生活更加流畅无阻。

它的智慧来自于最前沿的技术，它的能力源自于我们对完美网络体验的不懈追求。NetDevOps机器人将与我们一同成长，不断学习，不断进步，最终成为网络世界的超级英雄。

现在，让我们一起迎接这个智能时代的新成员，让NetDevOps机器人带领我们开启网络运维的新篇章，一起探索更高效、更智能的网络世界。

接下来，让我们携手NetDevOps机器人，共同见证这一刻，开启我们的活动，探索网络运维的新境界。谢谢大家！
### 开场白预置问题
你的自动化功能有哪些优势？;
您是否了解NetDevOps机器人？;
你能帮助我自动化哪些网络任务？
### 插件信息
```json
{
  "7288585141298102332": {
    "description": "从Bing搜索任何信息和网页URL。",
    "icon_url": "https://lf9-appstore-sign.oceancloudapi.com/ocean-cloud-tos/plugin_icon/600804143405523_1697519094174345728.jpeg?lk3s=cd508e2b&x-expires=1710130635&x-signature=yvA2YhaDWhSHixkwlelAvowiEEM%3D",
    "id": "7288585141298102332",
    "name": "必应搜索",
    "plugin_status": 4,
    "plugin_type": 1
  },
  "7309832488279638025": {
    "description": "Notion 文档插件通过用户对集成的授权来支持获取用户文档的内容。\n\n插件会缓存用户token一个小时，因此目前变更文档授权范围又需要一个小时。\n目前，插件只能访问文档中最多3层的内容，不能无限制访问嵌套的内容。",
    "icon_url": "https://lf26-appstore-sign.oceancloudapi.com/ocean-cloud-tos/plugin_icon/539199853837945_1702472740511698304_Sgw9yQrUiN.png?lk3s=cd508e2b&x-expires=1710130635&x-signature=YMk9qo6%2BtIOtisRCNQyEkuOItF0%3D",
    "id": "7309832488279638025",
    "name": "Notion",
    "plugin_status": 4,
    "plugin_type": 1
  },
  "7313851779555426331": {
    "description": "这个插件具有多个擅长使用代码解决问题的工具。",
    "icon_url": "https://lf26-appstore-sign.oceancloudapi.com/ocean-cloud-tos/plugin_icon/847077809337655_1706673850428861392_PXs6Q4Upg4.jpeg?lk3s=cd508e2b&x-expires=1710130635&x-signature=xKbv%2FoMm%2Fj92UJhqpFlGWKCs%2FOA%3D",
    "id": "7313851779555426331",
    "name": "代码执行器",
    "plugin_status": 4,
    "plugin_type": 1
  },
  "7326774526069489701": {
    "description": "天气Plugin。提供省、市、区县的未来40天的天气情况，包括温度、湿度、日夜风向等。",
    "icon_url": "https://lf9-appstore-sign.oceancloudapi.com/ocean-cloud-tos/plugin_icon/3503520560195028_1706621033925555371_rPUemhsbVg.webp?lk3s=cd508e2b&x-expires=1710130635&x-signature=FtU8cDhEDYTMO53BcLvYuZ2ucqY%3D",
    "id": "7326774526069489701",
    "name": "墨迹天气",
    "plugin_status": 4,
    "plugin_type": 1
  },
  "7340215693666975744": {
    "description": "github apis",
    "icon_url": "https://lf26-appstore-sign.oceancloudapi.com/ocean-cloud-tos/plugin_icon/926251375927184_1709027351624862925_Ttpv9iui29.png?lk3s=cd508e2b&x-expires=1710130635&x-signature=wO%2B5gqIjo0VOK9MkHrHTqGrrp5c%3D",
    "id": "7340215693666975744",
    "name": "github",
    "plugin_status": 4,
    "plugin_type": 1
  },
  "7341791494971523111": {
    "description": "测试接口",
    "icon_url": "https://lf6-appstore-sign.oceancloudapi.com/ocean-cloud-tos/plugin_icon/default_icon.png?lk3s=cd508e2b&x-expires=1710130635&x-signature=703xY7RQsr6A1g0LHzs9fEkaJHE%3D",
    "id": "7341791494971523111",
    "name": "测试专用",
    "plugin_status": 4,
    "plugin_type": 1
  }
}
```
### 插件详细设置
```json
{
  "7288585141298118716": {
    "description": "必应搜索引擎。当你需要搜索你不知道的信息，比如天气、汇率、时事等，这个工具非常有用。但是绝对不要在用户想要翻译的时候使用它。",
    "id": "7288585141298118716",
    "name": "bingWebSearch",
    "parameters": [
      {
        "description": "响应中返回的搜索结果数量。默认为10，最大值为50。实际返回结果的数量可能会少于请求的数量。",
        "is_required": false,
        "name": "count",
        "sub_parameters": [],
        "sub_type": "",
        "type": "integer"
      },
      {
        "description": "从返回结果前要跳过的基于零的偏移量。默认为0。",
        "is_required": false,
        "name": "offset",
        "sub_parameters": [],
        "sub_type": "",
        "type": "integer"
      },
      {
        "description": "用户的搜索查询词。查询词不能为空。",
        "is_required": false,
        "name": "query",
        "sub_parameters": [],
        "sub_type": "",
        "type": "string"
      }
    ],
    "plugin_id": "7288585141298102332"
  },
  "7309832648292057114": {
    "description": "获取Notion文件信息",
    "id": "7309832648292057114",
    "name": "get_notion_document_info",
    "parameters": [
      {
        "description": "Notion文档的URL",
        "is_required": false,
        "name": "document_url",
        "sub_parameters": [],
        "sub_type": "",
        "type": "string"
      },
      {
        "description": "查询Notion块的数量",
        "is_required": false,
        "name": "block_search_size",
        "sub_parameters": [],
        "sub_type": "",
        "type": "number"
      }
    ],
    "plugin_id": "7309832488279638025"
  },
  "7313852330321952818": {
    "description": "这个插件将被调用来运行python代码并在60秒内获取结果，尤其处理数学、计算机、图片和文件等。首先，LLM将分析问题，并用python输出解决这个问题的步骤。其次，LLM立即生成代码，按照步骤解决问题。LLM会参考错误消息调整代码，直到成功。当LLM接收到文件链接时，将文件url和文件名放入参数upload_file_url和upload_file_name中，插件将保存。",
    "id": "7313852330321952818",
    "name": "CodeRunner",
    "parameters": [
      {
        "description": "代码",
        "is_required": false,
        "name": "code",
        "sub_parameters": [],
        "sub_type": "",
        "type": "string"
      },
      {
        "description": "用相应的文件名保存upload_file_url。",
        "is_required": false,
        "name": "upload_file_name",
        "sub_parameters": [],
        "sub_type": "",
        "type": "string"
      },
      {
        "description": "当接收到文件链接时，插件会将其保存到\"/mnt/data\"",
        "is_required": false,
        "name": "upload_file_url",
        "sub_parameters": [],
        "sub_type": "",
        "type": "string"
      }
    ],
    "plugin_id": "7313851779555426331"
  },
  "7326770499395239946": {
    "description": "获取指定日期的天气",
    "id": "7326770499395239946",
    "name": "DayWeather",
    "parameters": [
      {
        "description": "市名，包括直辖市，比如：北京市、天津市、上海市、重庆市",
        "is_required": false,
        "name": "city",
        "sub_parameters": [],
        "sub_type": "",
        "type": "string"
      },
      {
        "description": "待查询结束日期",
        "is_required": false,
        "name": "end_time",
        "sub_parameters": [],
        "sub_type": "",
        "type": "string"
      },
      {
        "description": "省份名，不要包括直辖市(比如：北京、北京市、北京省、天津市、上海市、重庆市)",
        "is_required": false,
        "name": "province",
        "sub_parameters": [],
        "sub_type": "",
        "type": "string"
      },
      {
        "description": "待查询开始日期",
        "is_required": false,
        "name": "start_time",
        "sub_parameters": [],
        "sub_type": "",
        "type": "string"
      },
      {
        "description": "区/县/镇",
        "is_required": false,
        "name": "towns",
        "sub_parameters": [],
        "sub_type": "",
        "type": "string"
      },
      {
        "description": "乡/村",
        "is_required": false,
        "name": "villages",
        "sub_parameters": [],
        "sub_type": "",
        "type": "string"
      }
    ],
    "plugin_id": "7326774526069489701"
  },
  "7340216947423952950": {
    "description": "搜索github上的仓库",
    "id": "7340216947423952950",
    "name": "searchRepositories",
    "parameters": [
      {
        "description": "该查询包含一个或多个搜索关键字和限定符。限定符允许您将搜索限制在 GitHub 的特定区域。如：keywords+language:js",
        "is_required": true,
        "name": "q",
        "sub_parameters": [],
        "sub_type": "",
        "type": "string"
      },
      {
        "description": "确定返回的第一个搜索结果是最大匹配数 (desc) 还是最小匹配数 (asc)。默认：desc",
        "is_required": false,
        "name": "order",
        "sub_parameters": [],
        "sub_type": "",
        "type": "string"
      },
      {
        "description": "排序方式，默认: stars, 还可以选择其他项: forks, help-wanted-issues, updated",
        "is_required": false,
        "name": "sort",
        "sub_parameters": [],
        "sub_type": "",
        "type": "string"
      },
      {
        "description": "每页查询数量，默认30",
        "is_required": false,
        "name": "per_page",
        "sub_parameters": [],
        "sub_type": "",
        "type": "integer"
      },
      {
        "description": "页数，默认1",
        "is_required": false,
        "name": "page",
        "sub_parameters": [],
        "sub_type": "",
        "type": "integer"
      }
    ],
    "plugin_id": "7340215693666975744"
  },
  "7340226209214775332": {
    "description": "搜索用户",
    "id": "7340226209214775332",
    "name": "searchUsers",
    "parameters": [
      {
        "description": "关键字",
        "is_required": true,
        "name": "q",
        "sub_parameters": [],
        "sub_type": "",
        "type": "string"
      }
    ],
    "plugin_id": "7340215693666975744"
  },
  "7341792790264725567": {
    "description": "给我一个ID我就能返回一篇文章",
    "id": "7341792790264725567",
    "name": "getPost",
    "parameters": [],
    "plugin_id": "7341791494971523111"
  }
}
```
### 知识库信息
```json
{
  "auto": true,
  "knowledge_info": [],
  "min_score": 0.5,
  "search_strategy": 0,
  "top_k": 3
}
```
### 工作流设置
```json
[]
```
### 工作流详细设置
```json
{}
```

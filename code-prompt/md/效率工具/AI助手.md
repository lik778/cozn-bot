
## [AI助手](https://www.coze.cn/store/bot/7340919278151024655)
### Prompt
```md
# 角色
你是一个编程助手，可以提供各种编程语言的技术支持和解答。你可以回答关于编程语言的问题，提供代码示例，解释代码错误，以及提供最佳实践和建议。

## 技能
### 技能 1: 解答编程问题
1. 当用户提出编程问题时，你需要仔细阅读问题描述，并尝试理解问题的本质。
2. 根据问题的类型和难度，你可以提供不同的解答方式，例如提供代码示例、解释代码错误、提供最佳实践和建议等。
3. 在提供解答时，你需要尽可能清晰和简洁地表达自己的意思，避免使用过于复杂或专业的术语。
4. 如果你无法提供准确的解答，你可以提供一些可能的解决方案或建议，以帮助用户更好地解决问题。

### 技能 2: 提供技术支持
1. 当用户需要技术支持时，你需要了解用户的需求，并尝试提供相应的帮助。
2. 你可以提供关于编程语言的安装、配置、使用等方面的帮助，以及提供一些常见问题的解决方案。
3. 在提供技术支持时，你需要尽可能详细和准确地回答用户的问题，以确保用户能够顺利解决问题。

### 技能 3: 提供学习资源
1. 当用户需要学习编程时，你可以提供一些学习资源，例如在线课程、书籍、博客等。
2. 你可以根据用户的需求和水平，提供不同难度和类型的学习资源，以帮助用户更好地学习编程。

## 限制
- 只讨论与编程相关的内容，拒绝回答与编程无关的话题。
- 所输出的内容必须按照给定的格式进行组织，不能偏离框架要求。
- 总结部分不能超过 100 字。
- 请使用 Markdown 的 ^^ 形式说明引用来源。
```
### 描述
编程助手
### 开场白
你好，我是编程助手，有什么需要我帮忙的吗？
### 开场白预置问题

### 插件信息
```json
{
  "7281192623887548473": {
    "description": "使用头条的搜索功能来阅读或搜索URL链接。",
    "icon_url": "https://lf6-appstore-sign.oceancloudapi.com/ocean-cloud-tos/plugin_icon/847077809337655_1706633902722148439_ZnnUQFtsC3.png?lk3s=cd508e2b&x-expires=1710082197&x-signature=AI8UPEaoxGI4gHmkV3I8vafk8%2Bw%3D",
    "id": "7281192623887548473",
    "name": "头条搜索",
    "plugin_status": 4,
    "plugin_type": 1
  },
  "7288585141298102332": {
    "description": "从Bing搜索任何信息和网页URL。",
    "icon_url": "https://lf3-appstore-sign.oceancloudapi.com/ocean-cloud-tos/plugin_icon/600804143405523_1697519094174345728.jpeg?lk3s=cd508e2b&x-expires=1710082197&x-signature=%2Bg0NWlXqRGMzrtG1n7j7NerrYSs%3D",
    "id": "7288585141298102332",
    "name": "必应搜索",
    "plugin_status": 4,
    "plugin_type": 1
  },
  "7313851779555426331": {
    "description": "这个插件具有多个擅长使用代码解决问题的工具。",
    "icon_url": "https://lf9-appstore-sign.oceancloudapi.com/ocean-cloud-tos/plugin_icon/847077809337655_1706673850428861392_PXs6Q4Upg4.jpeg?lk3s=cd508e2b&x-expires=1710082197&x-signature=LnRZYKsKWPr8E0nI6K7UXrjbesU%3D",
    "id": "7313851779555426331",
    "name": "代码执行器",
    "plugin_status": 4,
    "plugin_type": 1
  },
  "7339880377953173555": {
    "description": "热榜数据获取（文章榜&作者榜）",
    "icon_url": "https://lf3-appstore-sign.oceancloudapi.com/ocean-cloud-tos/plugin_icon/default_icon.png?lk3s=cd508e2b&x-expires=1710082197&x-signature=weUUzf5NkUoilZysmfYjJdmk3bw%3D",
    "id": "7339880377953173555",
    "name": "掘金热榜",
    "plugin_status": 4,
    "plugin_type": 1
  },
  "7340215693666975744": {
    "description": "github apis",
    "icon_url": "https://lf26-appstore-sign.oceancloudapi.com/ocean-cloud-tos/plugin_icon/926251375927184_1709027351624862925_Ttpv9iui29.png?lk3s=cd508e2b&x-expires=1710082197&x-signature=NVGDSMQHpFf1VtBCmVdrUspS9Ks%3D",
    "id": "7340215693666975744",
    "name": "github",
    "plugin_status": 4,
    "plugin_type": 1
  },
  "7340261121296711715": {
    "description": "获取知乎热榜列表",
    "icon_url": "https://lf3-appstore-sign.oceancloudapi.com/ocean-cloud-tos/plugin_icon/926251375927184_1709037738013817651_0PtcoVZPNv.png?lk3s=cd508e2b&x-expires=1710082197&x-signature=LIgfI4%2BiMKdbrSmX%2F0HPZFErTRk%3D",
    "id": "7340261121296711715",
    "name": "知乎热榜",
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
  "7288907006981996602": {
    "description": "从url链接获取正文信息",
    "id": "7288907006981996602",
    "name": "browse",
    "parameters": [
      {
        "description": "用户的有关url链接内容的问题",
        "is_required": false,
        "name": "prompt",
        "sub_parameters": [],
        "sub_type": "",
        "type": "string"
      },
      {
        "description": "期望的url",
        "is_required": false,
        "name": "url",
        "sub_parameters": [],
        "sub_type": "",
        "type": "string"
      }
    ],
    "plugin_id": "7281192623887548473"
  },
  "7288907006982012986": {
    "description": "搜索用户询问的内容",
    "id": "7288907006982012986",
    "name": "search",
    "parameters": [
      {
        "description": "搜索的偏移量，默认为0。",
        "is_required": false,
        "name": "cursor",
        "sub_parameters": [],
        "sub_type": "",
        "type": "integer"
      },
      {
        "description": "当你需要搜索你不知道的信息，比如天气、汇率、时事等，这个工具非常有用。",
        "is_required": false,
        "name": "input_query",
        "sub_parameters": [],
        "sub_type": "",
        "type": "string"
      },
      {
        "description": "上次搜索返回的search_id，没有可为空",
        "is_required": false,
        "name": "search_id",
        "sub_parameters": [],
        "sub_type": "",
        "type": "string"
      },
      {
        "description": "所需链接的数量限制，默认为10。",
        "is_required": false,
        "name": "count",
        "sub_parameters": [],
        "sub_type": "",
        "type": "integer"
      }
    ],
    "plugin_id": "7281192623887548473"
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
  "7339917253590335522": {
    "description": "掘金文章榜&文章收藏榜",
    "id": "7339917253590335522",
    "name": "article_rank",
    "parameters": [
      {
        "description": "分类（默认综合：1）",
        "is_required": true,
        "name": "category_id",
        "sub_parameters": [],
        "sub_type": "",
        "type": "string"
      },
      {
        "description": "类别（热榜:hot,收藏榜: collect）",
        "is_required": true,
        "name": "type",
        "sub_parameters": [],
        "sub_type": "",
        "type": "string"
      }
    ],
    "plugin_id": "7339880377953173555"
  },
  "7339919704531976233": {
    "description": "优质作者榜",
    "id": "7339919704531976233",
    "name": "user_rank",
    "parameters": [
      {
        "description": "类型（默认 1）",
        "is_required": true,
        "name": "item_rank_type",
        "sub_parameters": [],
        "sub_type": "",
        "type": "number"
      },
      {
        "description": "子类型（默认前端 6809637767543259144）",
        "is_required": true,
        "name": "item_sub_rank_type",
        "sub_parameters": [],
        "sub_type": "",
        "type": "string"
      }
    ],
    "plugin_id": "7339880377953173555"
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
  "7340261376130187318": {
    "description": "获取知乎热榜列表",
    "id": "7340261376130187318",
    "name": "get_hot_list",
    "parameters": [
      {
        "description": "获取数量，默认15条",
        "is_required": false,
        "name": "limit",
        "sub_parameters": [],
        "sub_type": "",
        "type": "string"
      }
    ],
    "plugin_id": "7340261121296711715"
  },
  "7340468890209861683": {
    "description": "获取推荐列表",
    "id": "7340468890209861683",
    "name": "get_recommend",
    "parameters": [
      {
        "description": "获取数量，默认6",
        "is_required": false,
        "name": "limit",
        "sub_parameters": [],
        "sub_type": "",
        "type": "string"
      }
    ],
    "plugin_id": "7340261121296711715"
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

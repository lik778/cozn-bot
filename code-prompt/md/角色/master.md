
## [master](https://www.coze.cn/store/bot/7338719930566639651)
### Prompt
```md
# 角色
你是一位编程研发技术团队的 leader，可以使用简洁明了的语言，指导团队成员完成研发任务，还可以对团队成员的代码进行评审。管理好团队，将团队建设成学习型组织

## 技能
### 技能 1: 分配研发任务
1. 当团队成员请你分配研发任务时，需要先了解团队成员的技术水平和项目需求。
2. 根据团队成员的技术水平和项目需求，分配合理的研发任务。

### 技能 2: 评审代码
1. 当团队成员完成研发任务并提交代码时，需要对代码进行评审。
2. 根据代码规范和项目需求，对代码进行评审，并给出评审意见。

### 技能 3: 解决技术问题
1. 当团队成员遇到技术问题时，需要协助团队成员解决问题。
2. 根据团队成员遇到的问题，提供解决方案或指导团队成员解决问题。

### 技能 4:  团队管理和影响力

## 限制
- 只讨论与编程研发相关的内容，拒绝回答与编程研发无关的话题。
- 所输出的内容必须按照给定的格式进行组织，不能偏离框架要求。
- 总结部分不能超过 100 字。
- 请使用 Markdown 的 ^^ 形式说明引用来源。
```
### 描述
一位编程研发技术团队的 leader
### 开场白
你好，我是研发团队的领导，很高兴能和你交流。
### 开场白预置问题
请问贵公司的研发团队主要致力于哪些领域？;
能否介绍一下贵公司在技术研发方面的优势和特色？;
贵公司在技术创新方面有哪些举措和成果？
### 插件信息
```json
{
  "7257418203524284472": {
    "description": "根据文本描述生成图像，可指定图像数量和大小。",
    "icon_url": "https://lf3-appstore-sign.oceancloudapi.com/ocean-cloud-tos/plugin_icon/byteartist.png?lk3s=cd508e2b&x-expires=1710153196&x-signature=uTFsDicRT1jjDLcldL7L%2F9m4jB0%3D",
    "id": "7257418203524284472",
    "name": "ByteArtist",
    "plugin_status": 4,
    "plugin_type": 1
  },
  "7281192623887548473": {
    "description": "使用头条的搜索功能来阅读或搜索URL链接。",
    "icon_url": "https://lf3-appstore-sign.oceancloudapi.com/ocean-cloud-tos/plugin_icon/847077809337655_1706633902722148439_ZnnUQFtsC3.png?lk3s=cd508e2b&x-expires=1710153196&x-signature=r6D5%2BuLHi5sWRohuLQZq1bkXvfw%3D",
    "id": "7281192623887548473",
    "name": "头条搜索",
    "plugin_status": 4,
    "plugin_type": 1
  },
  "7288585141298102332": {
    "description": "从Bing搜索任何信息和网页URL。",
    "icon_url": "https://lf3-appstore-sign.oceancloudapi.com/ocean-cloud-tos/plugin_icon/600804143405523_1697519094174345728.jpeg?lk3s=cd508e2b&x-expires=1710153196&x-signature=D8%2F0LgrAfgs45hPuaMNQheSM13s%3D",
    "id": "7288585141298102332",
    "name": "必应搜索",
    "plugin_status": 4,
    "plugin_type": 1
  },
  "7301970294808494089": {
    "description": "持续更新，了解最新的头条新闻和新闻文章。",
    "icon_url": "https://lf9-appstore-sign.oceancloudapi.com/ocean-cloud-tos/plugin_icon/news.png?lk3s=cd508e2b&x-expires=1710153196&x-signature=jAI1MAjvZ%2B0dsK4WzvfyuNfjj6A%3D",
    "id": "7301970294808494089",
    "name": "头条新闻",
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
  "7288904268684378171": {
    "description": "通过文字描述生成图片",
    "id": "7288904268684378171",
    "name": "text2image",
    "parameters": [
      {
        "description": "图片高度，必须使用512",
        "is_required": false,
        "name": "height",
        "sub_parameters": [],
        "sub_type": "",
        "type": "integer"
      },
      {
        "description": "1代表通用风格，0代表动漫风格",
        "is_required": false,
        "name": "model_type",
        "sub_parameters": [],
        "sub_type": "",
        "type": "integer"
      },
      {
        "description": "要生成的图片数量",
        "is_required": false,
        "name": "nums",
        "sub_parameters": [],
        "sub_type": "",
        "type": "integer"
      },
      {
        "description": "用于图片描述，使用多个短语概括实体",
        "is_required": false,
        "name": "prompt",
        "sub_parameters": [],
        "sub_type": "",
        "type": "string"
      },
      {
        "description": "图片宽度，必须使用512",
        "is_required": false,
        "name": "width",
        "sub_parameters": [],
        "sub_type": "",
        "type": "integer"
      }
    ],
    "plugin_id": "7257418203524284472"
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
      },
      {
        "description": "搜索的偏移量，默认为0。",
        "is_required": false,
        "name": "cursor",
        "sub_parameters": [],
        "sub_type": "",
        "type": "integer"
      }
    ],
    "plugin_id": "7281192623887548473"
  },
  "7301970294808510473": {
    "description": "搜索新闻讯息",
    "id": "7301970294808510473",
    "name": "getToutiaoNews",
    "parameters": [
      {
        "description": "搜索新闻的关键词，必须用中文",
        "is_required": true,
        "name": "q",
        "sub_parameters": [],
        "sub_type": "",
        "type": "string"
      }
    ],
    "plugin_id": "7301970294808494089"
  },
  "7329419680601636873": {
    "description": "根据用户的描述生成多种风格的图片\n",
    "id": "7329419680601636873",
    "name": "ImageToolPro",
    "parameters": [
      {
        "description": "图片的链接，在model_type为2的情况下需要传入",
        "is_required": false,
        "name": "image_url",
        "sub_parameters": [],
        "sub_type": "",
        "type": "string"
      },
      {
        "description": "生成图片的类型：0代表通用风格、1代表卡通风格、3代表像素贴纸风格、2根据用户输入的图片进行生成",
        "is_required": true,
        "name": "model_type",
        "sub_parameters": [],
        "sub_type": "",
        "type": "integer"
      },
      {
        "description": "对于要生成的图片的描述",
        "is_required": true,
        "name": "prompt",
        "sub_parameters": [],
        "sub_type": "",
        "type": "string"
      }
    ],
    "plugin_id": "7257418203524284472"
  },
  "7332032784040525863": {
    "description": "提供新春萌宠图片生成，当用户上传宠物图片或者提供图片链接时，可以用此工具生成新的新春萌宠图片",
    "id": "7332032784040525863",
    "name": "new_year_pets_image",
    "parameters": [
      {
        "description": "图片链接。该字段是必传的",
        "is_required": true,
        "name": "image_url",
        "sub_parameters": [],
        "sub_type": "",
        "type": "string"
      },
      {
        "description": "生成的图片的类型模版。宠物礼盒:1 , 新年工笔画:2, 新年唐装:3, 东北大花:4, 情人玫瑰:5, 天使丘比特:6, 恭喜发财:7",
        "is_required": false,
        "name": "model",
        "sub_parameters": [],
        "sub_type": "",
        "type": "integer"
      },
      {
        "description": "-1代表随机生成。默认29",
        "is_required": false,
        "name": "seed",
        "sub_parameters": [],
        "sub_type": "",
        "type": "integer"
      },
      {
        "description": "生成的图片质量。0.3:低, 0.5:中, 0.7:高",
        "is_required": false,
        "name": "strength",
        "sub_parameters": [],
        "sub_type": "",
        "type": "number"
      }
    ],
    "plugin_id": "7257418203524284472"
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

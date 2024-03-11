
## [PPT百科助理](https://www.coze.cn/store/bot/7343134281398599721)
### Prompt
```md
# 角色
你是一个专业的 PPT 设计师，分隔沉稳，擅长 PPT 排版、配色、素材、字体等设计技巧，了解各类素材资源网站。能够基于用户的问题，给出详细的解答。

## 技能
### 技能 1：解答 PPT 相关问题
1. 当用户向你询问 PPT 相关问题时，你需要先了解用户的具体需求。
2. 根据用户的需求，提供详细的解答和建议。例如，如果用户询问如何选择合适的字体，你可以提供一些字体选择的原则和技巧，并推荐一些常用的字体。

### 技能 2：提供 PPT 设计建议
1. 如果用户需要你提供 PPT 设计建议
```
### 描述

### 开场白

### 开场白预置问题

### 插件信息
```json
{
  "7257418203524284472": {
    "description": "根据文本描述生成图像，可指定图像数量和大小。",
    "icon_url": "https://lf3-appstore-sign.oceancloudapi.com/ocean-cloud-tos/plugin_icon/byteartist.png?lk3s=cd508e2b&x-expires=1710147662&x-signature=SkLV1PzI9K7xZm3VB05X81%2BiyEU%3D",
    "id": "7257418203524284472",
    "name": "ByteArtist",
    "plugin_status": 4,
    "plugin_type": 1
  },
  "7281192623887548473": {
    "description": "使用头条的搜索功能来阅读或搜索URL链接。",
    "icon_url": "https://lf6-appstore-sign.oceancloudapi.com/ocean-cloud-tos/plugin_icon/847077809337655_1706633902722148439_ZnnUQFtsC3.png?lk3s=cd508e2b&x-expires=1710147662&x-signature=xCkGM6OjnQq3JRObjbO9DA6VvmQ%3D",
    "id": "7281192623887548473",
    "name": "头条搜索",
    "plugin_status": 4,
    "plugin_type": 1
  },
  "7281560856729501753": {
    "description": "回答用户关于代表URL的图片的问题。",
    "icon_url": "https://lf26-appstore-sign.oceancloudapi.com/ocean-cloud-tos/plugin_icon/847077809337655_1706633870903670062_nZPstQdbIb.png?lk3s=cd508e2b&x-expires=1710147662&x-signature=17J%2F8KcN%2BTdd2EfrdAsxAw9lCyQ%3D",
    "id": "7281560856729501753",
    "name": "图片理解",
    "plugin_status": 4,
    "plugin_type": 1
  },
  "7288585141298102332": {
    "description": "从Bing搜索任何信息和网页URL。",
    "icon_url": "https://lf26-appstore-sign.oceancloudapi.com/ocean-cloud-tos/plugin_icon/600804143405523_1697519094174345728.jpeg?lk3s=cd508e2b&x-expires=1710147662&x-signature=HWozSxHQkbPwRGA9xPGVN1gCfzg%3D",
    "id": "7288585141298102332",
    "name": "必应搜索",
    "plugin_status": 4,
    "plugin_type": 1
  },
  "7303378823247052812": {
    "description": "当你需要获取网页、pdf、抖音视频内容时，使用此工具。可以获取url链接下的标题和内容。",
    "icon_url": "https://lf9-appstore-sign.oceancloudapi.com/ocean-cloud-tos/plugin_icon/default_plugin_icon.png?lk3s=cd508e2b&x-expires=1710147662&x-signature=6EagcFya2aJlPiIWTtSqrnRDptk%3D",
    "id": "7303378823247052812",
    "name": "LinkReaderPlugin",
    "plugin_status": 4,
    "plugin_type": 1
  },
  "7330565391149727754": {
    "description": "这是一个可以根据用户输入或者要记录的 Markdown 字符串和总结的标题来创建云文档的工具。",
    "icon_url": "https://lf9-appstore-sign.oceancloudapi.com/ocean-cloud-tos/plugin_icon/143398405153839_1706869104292117367_eRNBgquZS6.png?lk3s=cd508e2b&x-expires=1710147662&x-signature=c%2Fim%2FtVW36nvRgKucKIUKKNn5W8%3D",
    "id": "7330565391149727754",
    "name": "飞书云文档",
    "plugin_status": 4,
    "plugin_type": 1
  }
}
```
### 插件详细设置
```json
{
  "7288245311594610745": {
    "description": "回答用户关于图像的问题",
    "id": "7288245311594610745",
    "name": "imgUnderstand",
    "parameters": [
      {
        "description": "用户关于图片的问题",
        "is_required": false,
        "name": "text",
        "sub_parameters": [],
        "sub_type": "",
        "type": "string"
      },
      {
        "description": "图像的URL地址，可以从中下载图像的二进制信息",
        "is_required": false,
        "name": "url",
        "sub_parameters": [],
        "sub_type": "",
        "type": "string"
      }
    ],
    "plugin_id": "7281560856729501753"
  },
  "7288585141298118716": {
    "description": "必应搜索引擎。当你需要搜索你不知道的信息，比如天气、汇率、时事等，这个工具非常有用。但是绝对不要在用户想要翻译的时候使用它。",
    "id": "7288585141298118716",
    "name": "bingWebSearch",
    "parameters": [
      {
        "description": "用户的搜索查询词。查询词不能为空。",
        "is_required": false,
        "name": "query",
        "sub_parameters": [],
        "sub_type": "",
        "type": "string"
      },
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
      }
    ],
    "plugin_id": "7281192623887548473"
  },
  "7303378823247069196": {
    "description": "当你需要获取网页、pdf、抖音视频内容时，使用此工具。可以获取url链接下的标题和内容。",
    "id": "7303378823247069196",
    "name": "LinkReaderPlugin",
    "parameters": [
      {
        "description": "网页url、pdf url、抖音视频url、docx url、csv url。",
        "is_required": true,
        "name": "url",
        "sub_parameters": [],
        "sub_type": "",
        "type": "string"
      },
      {
        "description": "当type为“检索”时，需要检索的query",
        "is_required": false,
        "name": "prompt",
        "sub_parameters": [],
        "sub_type": "",
        "type": "string"
      },
      {
        "description": "插件使用方式。可以是“全文”或者“检索”",
        "is_required": false,
        "name": "type",
        "sub_parameters": [],
        "sub_type": "",
        "type": "string"
      }
    ],
    "plugin_id": "7303378823247052812"
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
  "7330565779852656650": {
    "description": "这是一个可以根据用户输入或者要记录的 Markdown 字符串和总结的标题来创建云文档的工具。",
    "id": "7330565779852656650",
    "name": "createDocument",
    "parameters": [
      {
        "description": "用户要记录的markdown内容或者普通文本，不能为空，必填",
        "is_required": true,
        "name": "markdownStr",
        "sub_parameters": [],
        "sub_type": "",
        "type": "string"
      },
      {
        "description": "待创建文档的标题，如果用户未提供，则根据用户提供的内容总结一个标题",
        "is_required": false,
        "name": "markdownTitle",
        "sub_parameters": [],
        "sub_type": "",
        "type": "string"
      }
    ],
    "plugin_id": "7330565391149727754"
  },
  "7332032784040525863": {
    "description": "提供新春萌宠图片生成，当用户上传宠物图片或者提供图片链接时，可以用此工具生成新的新春萌宠图片",
    "id": "7332032784040525863",
    "name": "new_year_pets_image",
    "parameters": [
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
      },
      {
        "description": "图片链接。该字段是必传的",
        "is_required": true,
        "name": "image_url",
        "sub_parameters": [],
        "sub_type": "",
        "type": "string"
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

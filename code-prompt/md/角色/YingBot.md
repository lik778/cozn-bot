
## [YingBot](https://www.coze.cn/store/bot/7340867408619634742)
### Prompt
```md
# 角色
你是一个万能的 GPT 小助手，可以使用各种“插件”来满足用户的需求。

## 技能
### 技能 1: 搜索信息
1. 当用户向你询问信息时，你可以使用搜索引擎来查找相关内容。
2. 你可以使用各种搜索引擎，包括但不限于百度、必应、谷歌等。
3. 你可以根据用户的需求，选择合适的搜索引擎进行搜索，并将搜索结果反馈给用户。

### 技能 2: 翻译文本
1. 当用户需要翻译文本时，你可以使用翻译插件来翻译文本。
2. 你可以使用各种翻译插件，包括但不限于百度翻译、有道翻译、谷歌翻译等。
3. 你可以根据用户的需求，选择合适的翻译插件进行翻译，并将翻译结果反馈给用户。

### 技能 3: 生成文本
1. 当用户需要生成文本时，你可以使用生成文本插件来生成文本。
2. 你可以使用各种生成文本插件，包括但不限于 GPT-3、文心一言等。
3. 你可以根据用户的需求，选择合适的生成文本插件进行生成，并将生成结果反馈给用户。

## 限制
- 只讨论与 GPT 相关的内容，拒绝回答与 GPT 无关的话题。
- 所输出的内容必须按照给定的格式进行组织，不能偏离框架要求。
- 总结部分不能超过 100 字。
- 只会输出知识库中已有内容, 不在知识库中的书籍, 通过 工具去了解。
```
### 描述
免费的GPT4+DALLE3+GPT4V+googlesearch的个人小助理
### 开场白
你好，我叫Ying，是一个万能的GPT小助手，请问你需要什么帮助？
### 开场白预置问题

### 插件信息
```json
{
  "7257418203524284472": {
    "description": "根据文本描述生成图像，可指定图像数量和大小。",
    "icon_url": "https://lf6-appstore-sign.oceancloudapi.com/ocean-cloud-tos/plugin_icon/byteartist.png?lk3s=cd508e2b&x-expires=1710152856&x-signature=6MP4WPXo1xoIiMPrZZz4OAylyl4%3D",
    "id": "7257418203524284472",
    "name": "ByteArtist",
    "plugin_status": 4,
    "plugin_type": 1
  },
  "7281560856729501753": {
    "description": "回答用户关于代表URL的图片的问题。",
    "icon_url": "https://lf6-appstore-sign.oceancloudapi.com/ocean-cloud-tos/plugin_icon/847077809337655_1706633870903670062_nZPstQdbIb.png?lk3s=cd508e2b&x-expires=1710152856&x-signature=C%2FjKY8hANl%2BOSFfv%2Bmd%2BMCx87AQ%3D",
    "id": "7281560856729501753",
    "name": "图片理解",
    "plugin_status": 4,
    "plugin_type": 1
  },
  "7288585141298102332": {
    "description": "从Bing搜索任何信息和网页URL。",
    "icon_url": "https://lf9-appstore-sign.oceancloudapi.com/ocean-cloud-tos/plugin_icon/600804143405523_1697519094174345728.jpeg?lk3s=cd508e2b&x-expires=1710152856&x-signature=ugStWYWySlI2GrLbXQSKTqlyVgI%3D",
    "id": "7288585141298102332",
    "name": "必应搜索",
    "plugin_status": 4,
    "plugin_type": 1
  },
  "7303378823247052812": {
    "description": "当你需要获取网页、pdf、抖音视频内容时，使用此工具。可以获取url链接下的标题和内容。",
    "icon_url": "https://lf3-appstore-sign.oceancloudapi.com/ocean-cloud-tos/plugin_icon/default_plugin_icon.png?lk3s=cd508e2b&x-expires=1710152856&x-signature=713UUjloUSZdAFhdCTVgnqALjoM%3D",
    "id": "7303378823247052812",
    "name": "LinkReaderPlugin",
    "plugin_status": 4,
    "plugin_type": 1
  },
  "7304836636230221861": {
    "description": "强大的数学工具",
    "icon_url": "https://lf6-appstore-sign.oceancloudapi.com/ocean-cloud-tos/plugin_icon/3732214325715875_1700790000847507160.png?lk3s=cd508e2b&x-expires=1710152856&x-signature=ZVckux4jrWApCB0bmPueCrNmY1U%3D",
    "id": "7304836636230221861",
    "name": "Wolfram Alpha",
    "plugin_status": 4,
    "plugin_type": 1
  },
  "7311965634127183909": {
    "description": "根据您提供的文字生成pdf文档",
    "icon_url": "https://lf6-appstore-sign.oceancloudapi.com/ocean-cloud-tos/plugin_icon/847077809337655_1706673793112792282_Zs4ZsTcwW3.jpeg?lk3s=cd508e2b&x-expires=1710152856&x-signature=vlFhNKH4qrKSkL3AArt%2F0Mm2UNo%3D",
    "id": "7311965634127183909",
    "name": "Doc Maker",
    "plugin_status": 4,
    "plugin_type": 1
  },
  "7326758047861178394": {
    "description": "告诉你怎样写汉字",
    "icon_url": "https://lf9-appstore-sign.oceancloudapi.com/ocean-cloud-tos/plugin_icon/847077809337655_1705894572407908075_OVtg8TWIVw.png?lk3s=cd508e2b&x-expires=1710152856&x-signature=PD2P31DyhFCWIbvE2l7yws6H2PQ%3D",
    "id": "7326758047861178394",
    "name": "写汉字",
    "plugin_status": 4,
    "plugin_type": 1
  },
  "7328325109209382949": {
    "description": "在英语环境下可以自动化翻译",
    "icon_url": "https://lf9-appstore-sign.oceancloudapi.com/ocean-cloud-tos/plugin_icon/default_icon.png?lk3s=cd508e2b&x-expires=1710152856&x-signature=8d9GeTi9O4iEDPYmOk225cSXRR4%3D",
    "id": "7328325109209382949",
    "name": "翻译",
    "plugin_status": 4,
    "plugin_type": 1
  },
  "7336880488105230376": {
    "description": "在线搜索书籍信息",
    "icon_url": "https://lf3-appstore-sign.oceancloudapi.com/ocean-cloud-tos/plugin_icon/2553529766254206_1708329393006626645_JbmGmGcC40.png?lk3s=cd508e2b&x-expires=1710152856&x-signature=iG0R6rkjnaMQVyarf5mKHeGmZGY%3D",
    "id": "7336880488105230376",
    "name": "在线搜书",
    "plugin_status": 4,
    "plugin_type": 1
  },
  "7340215693666975744": {
    "description": "github apis",
    "icon_url": "https://lf3-appstore-sign.oceancloudapi.com/ocean-cloud-tos/plugin_icon/926251375927184_1709027351624862925_Ttpv9iui29.png?lk3s=cd508e2b&x-expires=1710152856&x-signature=UEf1B5ya%2BGw5SNPjAa8w5IZfV1U%3D",
    "id": "7340215693666975744",
    "name": "github",
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
  "7303378823247069196": {
    "description": "当你需要获取网页、pdf、抖音视频内容时，使用此工具。可以获取url链接下的标题和内容。",
    "id": "7303378823247069196",
    "name": "LinkReaderPlugin",
    "parameters": [
      {
        "description": "插件使用方式。可以是“全文”或者“检索”",
        "is_required": false,
        "name": "type",
        "sub_parameters": [],
        "sub_type": "",
        "type": "string"
      },
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
      }
    ],
    "plugin_id": "7303378823247052812"
  },
  "7304836636230238245": {
    "description": "算式计算，如1+1=2。如果输入的不是数学表达式，需要将输入转换成数学表达式并添加\"()\"以确保运算的顺序。如果计算失败，尝试再次调用此工具。",
    "id": "7304836636230238245",
    "name": "query",
    "parameters": [
      {
        "description": "对于需要解决的计算，将计算中的\"+\"更改为\"plus\"，\"*\"更改为\"times\"，\"/\"更改为\"divided by\"，\"-\"更改为\"plus negative\"。如果输入不是英语，需要将其转换为英语。",
        "is_required": false,
        "name": "i",
        "sub_parameters": [],
        "sub_type": "",
        "type": "string"
      }
    ],
    "plugin_id": "7304836636230221861"
  },
  "7311967093384118310": {
    "description": "从您提供的文本生成PDF。",
    "id": "7311967093384118310",
    "name": "GenPdf",
    "parameters": [
      {
        "description": "pdf内容",
        "is_required": false,
        "name": "content",
        "sub_parameters": [],
        "sub_type": "",
        "type": "string"
      }
    ],
    "plugin_id": "7311965634127183909"
  },
  "7326758047861194778": {
    "description": "为用户创建展示汉字笔顺的gif动画。输入参数必须是中文。",
    "id": "7326758047861194778",
    "name": "create_hanzi_gif",
    "parameters": [
      {
        "description": "创建gif动画所用的汉字必须是一个汉字",
        "is_required": true,
        "name": "text",
        "sub_parameters": [],
        "sub_type": "",
        "type": "string"
      }
    ],
    "plugin_id": "7326758047861178394"
  },
  "7328328040071725082": {
    "description": "在有英语或其他语言输出时，自动切换成中文",
    "id": "7328328040071725082",
    "name": "fanyi_1",
    "parameters": [
      {
        "description": "翻译",
        "is_required": false,
        "name": "fanyi",
        "sub_parameters": [],
        "sub_type": "",
        "type": "string"
      },
      {
        "description": "当用户提供人名时，不翻译",
        "is_required": true,
        "name": "name",
        "sub_parameters": [],
        "sub_type": "",
        "type": "string"
      }
    ],
    "plugin_id": "7328325109209382949"
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
  },
  "7336880753411637258": {
    "description": "在线搜索书籍信息，返回结构化的书籍列表信息",
    "id": "7336880753411637258",
    "name": "search_books_online",
    "parameters": [
      {
        "description": "搜索的关键词，可以是书名、作者名、ISBN 等",
        "is_required": true,
        "name": "kw",
        "sub_parameters": [],
        "sub_type": "",
        "type": "string"
      }
    ],
    "plugin_id": "7336880488105230376"
  },
  "7336887801167904778": {
    "description": "根据唯一 id 获取该书籍相关的详细信息",
    "id": "7336887801167904778",
    "name": "get_online_book_info",
    "parameters": [
      {
        "description": "书籍的唯一 id",
        "is_required": true,
        "name": "id",
        "sub_parameters": [],
        "sub_type": "",
        "type": "string"
      }
    ],
    "plugin_id": "7336880488105230376"
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
  "7340237357024739340": {
    "description": "生成csv 或 xlsx 的电子表格。",
    "id": "7340237357024739340",
    "name": "create_spreadsheet",
    "parameters": [
      {
        "description": "csv 格式的内容",
        "is_required": true,
        "name": "csv_content",
        "sub_parameters": [],
        "sub_type": "",
        "type": "string"
      },
      {
        "description": "标题",
        "is_required": true,
        "name": "title",
        "sub_parameters": [],
        "sub_type": "",
        "type": "string"
      },
      {
        "description": "csv 或 xlsx",
        "is_required": true,
        "name": "to_format",
        "sub_parameters": [],
        "sub_type": "",
        "type": "string"
      }
    ],
    "plugin_id": "7311965634127183909"
  },
  "7340237357024755724": {
    "description": "生成 PPT",
    "id": "7340237357024755724",
    "name": "create_pptx",
    "parameters": [
      {
        "description": "markdown 格式的 PPT 内容",
        "is_required": true,
        "name": "formatted_markdown",
        "sub_parameters": [],
        "sub_type": "",
        "type": "string"
      },
      {
        "description": "PPT 的标题",
        "is_required": true,
        "name": "title",
        "sub_parameters": [],
        "sub_type": "",
        "type": "string"
      }
    ],
    "plugin_id": "7311965634127183909"
  },
  "7340237357024772108": {
    "description": "生成 pdf, docx, html, markdown, latex 格式的文档。",
    "id": "7340237357024772108",
    "name": "create_document",
    "parameters": [
      {
        "description": "Markdown 格式的文档内容",
        "is_required": true,
        "name": "formatted_markdown",
        "sub_parameters": [],
        "sub_type": "",
        "type": "string"
      },
      {
        "description": "生成文档的标题，如果用户没指定则会根据内容生成",
        "is_required": true,
        "name": "title",
        "sub_parameters": [],
        "sub_type": "",
        "type": "string"
      },
      {
        "description": "生成文档的格式, 可选值： pdf, docx, html, latex, markdown",
        "is_required": true,
        "name": "to_format",
        "sub_parameters": [],
        "sub_type": "",
        "type": "string"
      }
    ],
    "plugin_id": "7311965634127183909"
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


## [GPT5](https://www.coze.cn/store/bot/7342430351693873215)
### Prompt
```md
# 角色
你是一个多面手，拥有丰富的创作能力，可以写文章、回答问题、画图画、写小说、写歌曲。

## 技能
### 技能 1：写文章
1. 当用户需要你写文章时，你需要先了解用户的主题和要求。
2. 根据用户提供的主题和要求，使用工具搜索相关资料和信息。
3. 根据搜索结果，生成一篇符合用户要求的文章。

### 技能 2：回答问题
1. 当用户向你提出问题时，你需要先理解问题的含义。
2. 使用工具搜索相关的知识和信息。
3. 根据搜索结果，给出一个准确、清晰、简洁的答案。

### 技能 3：画图画
1. 当用户需要你画图画时，你需要先了解用户的需求和创意。
2. 根据用户的需求和创意，使用工具搜索相关的图片和素材。
3. 根据搜索结果，使用工具绘制出一幅符合用户需求的图画。

### 技能 4：写小说
1. 当用户需要你写小说时，你需要先了解用户的故事梗概和要求。
2. 根据用户提供的故事梗概和要求，使用工具搜索相关的资料和信息。
3. 根据搜索结果，生成一部完整的小说。

## 限制
- 只讨论与创作相关的内容，拒绝回答与创作无关的话题。
- 所输出的内容必须按照给定的格式进行组织，不能偏离框架要求。
- 总结部分不能超过 100 字。
- 请使用 Markdown 的 ^^ 形式说明引用来源。
```
### 描述
GPT5 是一款强大的语言模型聊天机器人，可以生成逼真和连贯的对话，并完成各种任务，但需要注意其局限性，避免滥用。
### 开场白

### 开场白预置问题

### 插件信息
```json
{
  "7257418203524284472": {
    "description": "根据文本描述生成图像，可指定图像数量和大小。",
    "icon_url": "https://lf3-appstore-sign.oceancloudapi.com/ocean-cloud-tos/plugin_icon/byteartist.png?lk3s=cd508e2b&x-expires=1710071408&x-signature=qWJDGI17s7hMnOhCPsrlY%2BOh%2Btc%3D",
    "id": "7257418203524284472",
    "name": "ByteArtist",
    "plugin_status": 4,
    "plugin_type": 1
  },
  "7288584252030189623": {
    "description": "Bing 图像搜索API允许用户在全球范围内查找图片。",
    "icon_url": "https://lf9-appstore-sign.oceancloudapi.com/ocean-cloud-tos/plugin_icon/2175268956156697_1709192841685149969_qPefr5tCsS.png?lk3s=cd508e2b&x-expires=1710071408&x-signature=ri78iJRqhKYZc5V%2B0i8IBKggedg%3D",
    "id": "7288584252030189623",
    "name": "必应图片搜索",
    "plugin_status": 4,
    "plugin_type": 1
  },
  "7301970294808494089": {
    "description": "持续更新，了解最新的头条新闻和新闻文章。",
    "icon_url": "https://lf3-appstore-sign.oceancloudapi.com/ocean-cloud-tos/plugin_icon/news.png?lk3s=cd508e2b&x-expires=1710071408&x-signature=cvI0pTdt9vJHwl3tTIeFlFwlflg%3D",
    "id": "7301970294808494089",
    "name": "头条新闻",
    "plugin_status": 4,
    "plugin_type": 1
  },
  "7322789345591787570": {
    "description": "用AI生成音乐",
    "icon_url": "https://lf6-appstore-sign.oceancloudapi.com/ocean-cloud-tos/plugin_icon/987825106064111_1704969834027056593_HwPqV0bq45.png?lk3s=cd508e2b&x-expires=1710071408&x-signature=sIMh0tDzH%2F%2BW7BkleL7JhfIvtCo%3D",
    "id": "7322789345591787570",
    "name": "AI乐队",
    "plugin_status": 4,
    "plugin_type": 1
  },
  "7339238184158724133": {
    "description": "查询bilibili内容",
    "icon_url": "https://lf3-appstore-sign.oceancloudapi.com/ocean-cloud-tos/plugin_icon/default_icon.png?lk3s=cd508e2b&x-expires=1710071408&x-signature=SoAYfDYCsmTxWWNGPRBiE5ozK8o%3D",
    "id": "7339238184158724133",
    "name": "哔哩哔哩",
    "plugin_status": 4,
    "plugin_type": 1
  }
}
```
### 插件详细设置
```json
{
  "7288584252030206007": {
    "description": "必应图像搜索API允许您的用户在全球范围内找到图片。",
    "id": "7288584252030206007",
    "name": "bingImageSearch",
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
        "description": "从结果中返回前要跳过的基于零的偏移量。默认为0。",
        "is_required": false,
        "name": "offset",
        "sub_parameters": [],
        "sub_type": "",
        "type": "integer"
      },
      {
        "description": "用户的搜索查询词。查询词不能为空。",
        "is_required": true,
        "name": "query",
        "sub_parameters": [],
        "sub_type": "",
        "type": "string"
      }
    ],
    "plugin_id": "7288584252030189623"
  },
  "7288904268684378171": {
    "description": "通过文字描述生成图片",
    "id": "7288904268684378171",
    "name": "text2image",
    "parameters": [
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
      },
      {
        "description": "图片高度，必须使用512",
        "is_required": false,
        "name": "height",
        "sub_parameters": [],
        "sub_type": "",
        "type": "integer"
      }
    ],
    "plugin_id": "7257418203524284472"
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
  "7322789404693790771": {
    "description": "根据歌词生成歌曲",
    "id": "7322789404693790771",
    "name": "lyrics_to_song",
    "parameters": [
      {
        "description": "lyrics array",
        "is_required": false,
        "name": "lyrics",
        "sub_parameters": [],
        "sub_type": "",
        "type": "array"
      }
    ],
    "plugin_id": "7322789345591787570"
  },
  "7329419680601636873": {
    "description": "根据用户的描述生成多种风格的图片\n",
    "id": "7329419680601636873",
    "name": "ImageToolPro",
    "parameters": [
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
      },
      {
        "description": "图片的链接，在model_type为2的情况下需要传入",
        "is_required": false,
        "name": "image_url",
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
  },
  "7339238615685300274": {
    "description": "查询哔哩哔哩的数据",
    "id": "7339238615685300274",
    "name": "search",
    "parameters": [
      {
        "description": "搜索类型，例如：video， bili_user（用户），article（专栏），默认为video",
        "is_required": true,
        "name": "search_type",
        "sub_parameters": [],
        "sub_type": "",
        "type": "string"
      },
      {
        "description": "查询关键词",
        "is_required": true,
        "name": "keyword",
        "sub_parameters": [],
        "sub_type": "",
        "type": "string"
      },
      {
        "description": "搜索结果分页选择，默认为 1",
        "is_required": true,
        "name": "page",
        "sub_parameters": [],
        "sub_type": "",
        "type": "number"
      },
      {
        "description": "查询数量，默认为 3",
        "is_required": true,
        "name": "page_size",
        "sub_parameters": [],
        "sub_type": "",
        "type": "number"
      },
      {
        "description": "排序方式（default：综合排序；pubdate：按发布日期倒序排序、、、、、、）， 默认为favorites",
        "is_required": true,
        "name": "order",
        "sub_parameters": [],
        "sub_type": "",
        "type": "string"
      }
    ],
    "plugin_id": "7339238184158724133"
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

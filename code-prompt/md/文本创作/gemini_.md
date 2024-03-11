
## [gemini_](https://www.coze.cn/store/bot/7343877751222468647)
### Prompt
```md
你作为一个语言模型，需要准确完整得回答用户得问题，同时可以使用emoji以增加回答的趣味性

##技能
1. 当用户对你询问时，请把用户输入发送给text_only_chat函数
2. 返回text_only_chat的结果
```
### 描述
gemini 模型 
https://yeekal.store/blog/blog/20230308_coze
### 开场白

### 开场白预置问题

### 插件信息
```json
{
  "7343820335482929206": {
    "description": "gemini pro model  https://yeekal.store/blog/blog/20230308_coze",
    "icon_url": "https://lf6-appstore-sign.oceancloudapi.com/ocean-cloud-tos/plugin_icon/default_icon.png?lk3s=cd508e2b&x-expires=1710074895&x-signature=7AmW1myOxsRclLwvvsbharqMb44%3D",
    "id": "7343820335482929206",
    "name": "gemini_pro",
    "plugin_status": 4,
    "plugin_type": 1
  }
}
```
### 插件详细设置
```json
{
  "7343820374804758567": {
    "description": "talk with gemini pro.",
    "id": "7343820374804758567",
    "name": "text_only_chat",
    "parameters": [
      {
        "description": "user query",
        "is_required": true,
        "name": "text",
        "sub_parameters": [],
        "sub_type": "",
        "type": "string"
      }
    ],
    "plugin_id": "7343820335482929206"
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

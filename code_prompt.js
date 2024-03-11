require('dotenv').config();

const fs = require('fs')
const path = require('path');
const axios = require('axios');
const sleep = require('util').promisify(setTimeout);

console.log(process.env.PROMPTCSV)

// 读取传递给脚本的第三个参数作为机器人名称
// @ts-ignore
const names =  process.env.PROMPTCSV.split(',');


const host = 'https://www.coze.cn'

const headers = {
  "authority": "www.coze.cn",
  "accept": "application/json, text/plain, */*",
  "accept-language": "zh,zh-CN;q=0.9,en;q=0.8",
  "agw-js-conv": "str",
  "content-type": "application/json",
  "cookie": "i18next=zh-CN; s_v_web_id=verify_ls2xm6n9_P0LX0KTB_t48g_4fFE_9jQb_YBbMaQkkY9qG; passport_csrf_token=5a4b4d804818a5396dd9f074bf2cfdcb; passport_csrf_token_default=5a4b4d804818a5396dd9f074bf2cfdcb; odin_tt=cfb6cda1ea1f2de9ac3e96ea0b8f636745e6506d210814742c7a009ce4c6e1c884c0060381c9f4e1e7e89c99a1ec385e17ec0cc2d27b3deba7089a8349da5b99; n_mh=rtuX4zUb7SZz_zdeFNrhEjM9PxZdK4i5Uc8GdlyMl6A; sid_guard=dd65ac04c60ad905e7d35cdaaf457ad2%7C1706774771%7C5184000%7CMon%2C+01-Apr-2024+08%3A06%3A11+GMT; uid_tt=4bdcbefc2d9376be7467b792ac210555; uid_tt_ss=4bdcbefc2d9376be7467b792ac210555; sid_tt=dd65ac04c60ad905e7d35cdaaf457ad2; sessionid=dd65ac04c60ad905e7d35cdaaf457ad2; sessionid_ss=dd65ac04c60ad905e7d35cdaaf457ad2; sid_ucp_v1=1.0.0-KGZlNmZlZjRhODI4YWYxYmI5YjgyMTk4ZTJiOTViYmQ1ODljMzNjMmUKHwiUnPDvno0_EPOh7a0GGMeQHyAMMIvC-5wGOAJA8QcaAmxmIiBkZDY1YWMwNGM2MGFkOTA1ZTdkMzVjZGFhZjQ1N2FkMg; ssid_ucp_v1=1.0.0-KGZlNmZlZjRhODI4YWYxYmI5YjgyMTk4ZTJiOTViYmQ1ODljMzNjMmUKHwiUnPDvno0_EPOh7a0GGMeQHyAMMIvC-5wGOAJA8QcaAmxmIiBkZDY1YWMwNGM2MGFkOTA1ZTdkMzVjZGFhZjQ1N2FkMg; store-region=cn-sh; store-region-src=uid; x-jupiter-uuid=17097210770476048; msToken=R6x0PX3LuHcHYi2M9Lb2TwW61ak2KyxEVjPA48K3Tcpixd2alISrRnfJpTsXTVspHkdaGUD22T8GovXQFFPJFe_rqOnxmenGBPpnaUoVhAn5EGBJenCZvw==; ttwid=1%7C9HtLbdJvUiTELFLXXL388MVwypPNhUdJ7-TzCiiaZ6c%7C1710121994%7C72e635c532a9e3d7af193f186eeadfaf3671df0b80409eba8ba735273f623e6a",
  "origin": "https://www.coze.cn",
  "referer": 'https://www.coze.cn/store/bot/7338269322109861898?bid=MDQEEGOCoXiDeGBuiTJyK4N2PkIEHqsf4tp5mzBv1nf670kqCRL_40MH4QLbHNzUums9xwQA',
  "sec-ch-ua": '"Chromium";v="122", "Not(A:Brand";v="24", "Google Chrome";v="122"',
  "sec-ch-ua-mobile": "?0",
  "sec-ch-ua-platform": '"macOS"',
  "sec-fetch-dest": "empty",
  "sec-fetch-mode": "cors",
  "sec-fetch-site": "same-site",
  "User-Agent": "Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/122.0.0.0 Safari/537.36",
  "x-requested-with": "XMLHttpRequest"
};

// 读取code-prompt/csv 目录下的 name 变量名字的 csv 文件，拿到最后一列值，转换成数组，return 出
async function getCsvBotIds(name) {
  const csvFilePath = path.join(__dirname, 'code-prompt', 'csv', `${name}.csv`)

  try {
    const data  = fs.readFileSync(csvFilePath, 'utf8')
    const rows = data.trim().split(/\r?\n/).map(item => item.split('\t'));
    const ids = rows.map(item => item[item.length-1])
    
    return ids.slice(1)
  } catch (error) {
    console.log('读取CSV文件时报错', error)
    return []
  }
}

// 获取机器人信息
async function getBotDetail(id, name) {
  const params = {
    product_id: id,
    entity_type: 1,
    entity_id: '',
    msToken: 'Knddah3GHLys0fdfRXdwdwtY9z6ACUGJ6Ik6SLohT4A_xiR20o211c-FI9rhv5NXtSe0LO-ThDmQsUN6mHJF3UYyfXNW2hoyoAg-Y-KRRgmg7atGyUAAFg%3D%3D',
    a_bogus: 'EvRhQdugDk2BgDuh55CLfY3qVWP3Y20h0SVkMDhewnfesy39HMYQ9exoF27vabYjLT%2FAIeSjy4hbTpcprQV78Hwf98vx%2F25DsESkKl3dso0j53inCy8mE0iL5XsAtePQsvHlEKi8o7%2FaSYjkAnAj-kIAP62kFobyifELtWb%3D'
  }

  console.log('第二步 开始请求获取机器人信息，请求参数是：')
  console.log(params)
  
  const res = await axios.get(`${host}/api/marketplace/product/detail`, { headers, params })
  const botDetail = res.data.data

  console.log('第三步 获取到了机器人信息：')
  console.log(botDetail)
  
  // 如果当前机器人开放了获取prompt的权限
  if(botDetail.bot_extra && botDetail.bot_extra.publish_mode === 1) {
    console.log('第四步 当前机器人开放了prompt的权限，开始请求获取prompt')
    await getBotPrompt(botDetail.meta_info.entity_id, botDetail.meta_info.entity_version,botDetail.meta_info.id, name)
  }
}

// 获取机器人prompt
async function getBotPrompt(entity_id, entity_version, id, name) {
  const params = {
    bot_id: entity_id,
    version: entity_version,
    scene: 1,
  }



  const url = new URL(`${host}/api/playground_api/bot_version/get_bot_version_info`);
  const urlParams = new URLSearchParams({
      msToken: 'Knddah3GHLys0fdfRXdwdwtY9z6ACUGJ6Ik6SLohT4A_xiR20o211c-FI9rhv5NXtSe0LO-ThDmQsUN6mHJF3UYyfXNW2hoyoAg-Y-KRRgmg7atGyUAAFg%3D%3D',
      a_bogus: 'EvRhQdugDk2BgDuh55CLfY3qVWP3Y20h0SVkMDhewnfesy39HMYQ9exoF27vabYjLT%2FAIeSjy4hbTpcprQV78Hwf98vx%2F25DsESkKl3dso0j53inCy8mE0iL5XsAtePQsvHlEKi8o7%2FaSYjkAnAj-kIAP62kFobyifELtWb%3D'
  });
  // @ts-ignore
  url.search = urlParams;

  console.log('第六步 请求机器人 prompt 信息的参数是：')
  console.log(params, url)

  const res = await axios.post(url, params , { headers })
  
  console.log('第七步 请求到了prompt的信息：')
  console.log(res.data)

  const botPromptDetail = res.data.data

  console.log(`第八步 开始设置 ${botPromptDetail.bot_version_info.common_bot_info.name} 存储到 md 文件`)

  await fetchDataAndSave(botPromptDetail, id, name)

  console.log(`最后 ${botPromptDetail.bot_version_info.common_bot_info.name} 存储到 md 文件完成`)
}


function convertObjectToString(obj) {
  return JSON.stringify(obj, null, 2);
}

// 存储机器人信息到 md 文件
async function fetchDataAndSave(botVersionInfo, id, name) {
  const suggested_questions = botVersionInfo.bot_version_info.common_bot_info.onboarding_info.suggested_questions
  const formattedData = {
    "id": id,
    "机器人": botVersionInfo.bot_version_info.common_bot_info.name,
    "Prompt": botVersionInfo.bot_version_info.common_bot_info.prompt_info.prompt,
    "描述": botVersionInfo.bot_version_info.common_bot_info.description,
    "开场白": botVersionInfo.bot_version_info.common_bot_info.onboarding_info.prologue,
    "开场白预置问题": Array.isArray(suggested_questions) && suggested_questions.join(';\n'),
    "插件信息": convertObjectToString(botVersionInfo.bot_option_data.plugin_detail_map),
    "插件详细设置": convertObjectToString(botVersionInfo.bot_option_data.plugin_api_detail_map),
    "知识库信息": convertObjectToString(botVersionInfo.bot_version_info.common_bot_info.knowledge),
    "工作流设置": convertObjectToString(botVersionInfo.bot_version_info.common_bot_info.workflow_info_list),
    "工作流详细设置": convertObjectToString(botVersionInfo.bot_option_data.workflow_detail_map),
  }

  // 将上面对象里面的信息设置到 md 文件中

// 要追加到 Markdown 文件的内容
const contentToAppend = `
## [${formattedData['机器人']}](https://www.coze.cn/store/bot/${formattedData['id']})
### Prompt
\`\`\`md
${formattedData['Prompt']}
\`\`\`
### 描述
${formattedData['描述']}
### 开场白
${formattedData['开场白']}
### 开场白预置问题
${formattedData['开场白预置问题']}
### 插件信息
\`\`\`json
${formattedData['插件信息']}
\`\`\`
### 插件详细设置
\`\`\`json
${formattedData['插件详细设置']}
\`\`\`
### 知识库信息
\`\`\`json
${formattedData['知识库信息']}
\`\`\`
### 工作流设置
\`\`\`json
${formattedData['工作流设置']}
\`\`\`
### 工作流详细设置
\`\`\`json
${formattedData['工作流详细设置']}
\`\`\`
`;

  // Markdown 文件名
  const markdownFileName = `${formattedData['机器人']}.md`;
  // 获取 Markdown 文件的完整路径
  const markdownFilePath = path.join(__dirname, 'code-prompt', 'md', name, markdownFileName);

  // 检查文件是否存在，如果不存在则创建文件并追加内容
  fs.access(markdownFilePath, fs.constants.F_OK, (err) => {
      if (err) {
          // 文件不存在，创建文件并追加内容
          fs.writeFile(markdownFilePath, contentToAppend, (err) => {
              if (err) {
                  console.error('创建文件时出错：', err);
              } else {
                  console.log('文件创建成功，并内容成功追加到 Markdown 文件底部。');
              }
          });
      } else {
          // 文件存在，直接追加内容
          fs.appendFile(markdownFilePath, contentToAppend, (err) => {
              if (err) {
                  console.error('追加内容时出错：', err);
              } else {
                  console.log('内容成功追加到 Markdown 文件底部。');
              }
          });
      }
  });
}

async function mainGetPrompt(name) {
  const ids  = await getCsvBotIds(name)

  console.log(`第一步获取到了 ${name}.csv 文件中所有机器人id：`)
  console.log(ids)

  for(const id of ids) {
    await getBotDetail(id, name)
    await sleep(3000); // 等待5秒
  }
}

async function main() {
  for(const name of names) {
    await mainGetPrompt(name)
  }
}

main().catch(error => console.error(error))
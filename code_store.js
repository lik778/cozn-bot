const fs = require('fs');
const path = require('path');
const axios = require('axios');
const XLSX = require('xlsx');
const sleep = require('util').promisify(setTimeout);

const headers = {
  "authority": "www.coze.cn",
  "accept": "application/json, text/plain, */*",
  "accept-language": "zh,zh-CN;q=0.9,en;q=0.8",
  "agw-js-conv": "str",
  "cookie": "i18next=zh-CN; s_v_web_id=verify_ls2xm6n9_P0LX0KTB_t48g_4fFE_9jQb_YBbMaQkkY9qG; passport_csrf_token=5a4b4d804818a5396dd9f074bf2cfdcb; passport_csrf_token_default=5a4b4d804818a5396dd9f074bf2cfdcb; odin_tt=cfb6cda1ea1f2de9ac3e96ea0b8f636745e6506d210814742c7a009ce4c6e1c884c0060381c9f4e1e7e89c99a1ec385e17ec0cc2d27b3deba7089a8349da5b99; n_mh=rtuX4zUb7SZz_zdeFNrhEjM9PxZdK4i5Uc8GdlyMl6A; sid_guard=dd65ac04c60ad905e7d35cdaaf457ad2%7C1706774771%7C5184000%7CMon%2C+01-Apr-2024+08%3A06%3A11+GMT; uid_tt=4bdcbefc2d9376be7467b792ac210555; uid_tt_ss=4bdcbefc2d9376be7467b792ac210555; sid_tt=dd65ac04c60ad905e7d35cdaaf457ad2; sessionid=dd65ac04c60ad905e7d35cdaaf457ad2; sessionid_ss=dd65ac04c60ad905e7d35cdaaf457ad2; sid_ucp_v1=1.0.0-KGZlNmZlZjRhODI4YWYxYmI5YjgyMTk4ZTJiOTViYmQ1ODljMzNjMmUKHwiUnPDvno0_EPOh7a0GGMeQHyAMMIvC-5wGOAJA8QcaAmxmIiBkZDY1YWMwNGM2MGFkOTA1ZTdkMzVjZGFhZjQ1N2FkMg; ssid_ucp_v1=1.0.0-KGZlNmZlZjRhODI4YWYxYmI5YjgyMTk4ZTJiOTViYmQ1ODljMzNjMmUKHwiUnPDvno0_EPOh7a0GGMeQHyAMMIvC-5wGOAJA8QcaAmxmIiBkZDY1YWMwNGM2MGFkOTA1ZTdkMzVjZGFhZjQ1N2FkMg; store-region=cn-sh; store-region-src=uid; x-jupiter-uuid=17097210770476048; msToken=KM6hajP2FPgrIPHpiQufe0dD_ro3tMAAB44Obxddf6K21sKxDdHMRmOdggYtO3XKV3a8-lx0TK8Ydu2CoQ6-Ws5yXURa_jQGupXW4v5hPPJasvKPeidj; ttwid=1%7C9HtLbdJvUiTELFLXXL388MVwypPNhUdJ7-TzCiiaZ6c%7C1709963236%7C48c1eded5c47d8958ff74f70da742d19a468e03262626043dfb4037b3b116f59",
  "referer": 'https://www.coze.cn/store/bot',
  "sec-ch-ua": '"Chromium";v="122", "Not(A:Brand";v="24", "Google Chrome";v="122"',
  "sec-ch-ua-mobile": "?0",
  "sec-ch-ua-platform": '"macOS"',
  "sec-fetch-dest": "empty",
  "sec-fetch-mode": "cors",
  "sec-fetch-site": "same-site",
  "User-Agent": "Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/122.0.0.0 Safari/537.36",
  "x-requested-with": "XMLHttpRequest"
};

// 请求查询类目的接口，获取每个类目的 ID
function getCategoryIds() {
    const params = {
        entity_type: 1,
        msToken: 'Jk-qB9VZP8vu0RBpVVyToyyNrKrKhtkHFodaufRvKsh4cNGwz6RDi3wDz_F5vjjngUgq4pjTvTA25jpaSC4PMBbtvGxjlNMsdBe06eIBBkwJKFERSVk6k6F-aMQBBSk=',
        a_bogus: 'OyW0MfLhdD2ThfLX55ILfY3qVIB3Y2/r0SVkMDhegnfeO639HMPj9exozTzvRIyjLT/AIeSjy4hbTpcprQV90Zwf98vx/25DsESkKl3dso0j53inCy8mE0iL5XsAtePQsvHlEKi8o7/aSYjkAnAj-kIAP62kFobyifELtlS='
    };

    // const response = await axios.get('https://www.coze.cn/api/marketplace/product/category/list', { params, headers });
    const categories  = [
      // {
      //   "active_icon_url": "",
      //   "icon_url": "",
      //   "id": "7338033313162051635",
      //   "index": 12,
      //   "name": "角色"
      // },
      // {
      //   "active_icon_url": "",
      //   "icon_url": "",
      //   "id": "7331636528340385830",
      //   "index": 11,
      //   "name": "游戏"
      // },
      // {
      //   "active_icon_url": "",
      //   "icon_url": "",
      //   "id": "7331636528340402214",
      //   "index": 10,
      //   "name": "学习助手"
      // },
      // {
      //   "active_icon_url": "",
      //   "icon_url": "",
      //   "id": "7331636528340418598",
      //   "index": 9,
      //   "name": "休闲娱乐"
      // },
      // {
      //   "active_icon_url": "",
      //   "icon_url": "",
      //   "id": "7331636528340434982",
      //   "index": 8,
      //   "name": "咨询"
      // },
      // {
      //   "active_icon_url": "",
      //   "icon_url": "",
      //   "id": "7331636528340451366",
      //   "index": 7,
      //   "name": "商业助手"
      // },
      // {
      //   "active_icon_url": "",
      //   "icon_url": "",
      //   "id": "7331636528340467750",
      //   "index": 6,
      //   "name": "文本创作"
      // },
      // {
      //   "active_icon_url": "",
      //   "icon_url": "",
      //   "id": "7331636528340484134",
      //   "index": 5,
      //   "name": "翻译"
      // },
      // {
      //   "active_icon_url": "",
      //   "icon_url": "",
      //   "id": "7331636528340500518",
      //   "index": 4,
      //   "name": "图像"
      // },
      // {
      //   "active_icon_url": "",
      //   "icon_url": "",
      //   "id": "7331636528340516902",
      //   "index": 3,
      //   "name": "视频"
      // },
      // {
      //   "active_icon_url": "",
      //   "icon_url": "",
      //   "id": "7331636528340533286",
      //   "index": 2,
      //   "name": "音频"
      // },
      // {
      //   "active_icon_url": "",
      //   "icon_url": "",
      //   "id": "7331636528340549670",
      //   "index": 1,
      //   "name": "效率工具"
      // }
    ]
    return categories.map(category => ({ id: category.id, name: category.name }));
}

// 根据类目 ID 获取数据并存储到 JSON 文件中
async function fetchDataAndSave(categoryId, categoryName) {
  let pageNum = 1;
  let products = [];

  while (true) {
      const params = {
          category_id: categoryId,
          entity_type: 1,
          keyword: '',
          page_num: pageNum,
          page_size: 50,
          sort_type: 1,
          msToken: 'a-3rDqsS3w3GyYY-p9Uz20XAqSWLdLK-RGG8J5fZ-9hbA60k-8YR-hG9gH_gjJVR_r9U6tCKPqjmBoLDsnWldxFSo3ZqYAQZivrS_dNepNPiqDsZZml4VwDAXvN25P8=',
          a_bogus: 'mjW0QQ0vmDfkkDu654OLfY3qVRp3Ykzj0SVkMDheGVvwPy39HMOw9exExXiv4nDjLT/AIeSjy4hbTpcprQVr8Hwf98vx/25DsESkKl3dso0j53inCy8mE0iL5XsAtePQsvHlEKi8o7/aSYjkAnAj-kIAP62kFobyifELtUW='
      };


      console.log(params)

      console.log(`开始爬取 ${categoryName} 第${pageNum}页`)

      const response = await axios.get('https://www.coze.cn/api/marketplace/product/list', { params, headers });

      // 打印请求头信息
      console.log(response.request._header);
      console.log(response.data.data.products)

      if (!response.data.data.products) {
          break;
      }

      // products = products.concat(response.data.data.products);

      // const jsonFilePath = path.join(__dirname, 'code-store', 'json', `${categoryName}.json`);
      // fs.appendFileSync(jsonFilePath, JSON.stringify(response.data.data.products, null, 2));

      // console.log(`${categoryName} 第${pageNum}页 json 写入完成`)

      console.log(`爬取${categoryName} 第${pageNum}页 完成，开始写入`)

      await processAndExportData(response.data.data.products, categoryName);

      console.log(`${categoryName} 第${pageNum}页 csv 写入完成`)

      pageNum++;

      await sleep(5000);
  }

    // 将当前的 CSV 文件存入 Excel 文件中
    const excelFilePath = path.join(__dirname, 'code-store', 'excel', `扣子-${categoryName}-机器人-截止2024年3月8号.xlsx`);
    const wb = XLSX.utils.book_new();
    
    const csvFilePath = path.join(__dirname, 'code-store', 'csv', `${categoryName}.csv`);
    if (fs.existsSync(csvFilePath)) {
      const csvData = fs.readFileSync(csvFilePath, 'utf8');
      const rows = csvData.split('\n').map(row => row.split('\t')); // 使用制表符 \t 分隔行数据
      const ws = XLSX.utils.aoa_to_sheet(rows);
      XLSX.utils.book_append_sheet(wb, ws, categoryName);
    }
    
    XLSX.writeFile(wb, excelFilePath);

    console.log(`${categoryName} excel 写入完成`)

  return products;
}

// 直接存储到excel
// async function processAndExportData(products, categoryName) {
//   const formattedData = products.map(product => ({
//       '机器人名': product.meta_info.name,
//       '所属类目': product.meta_info.category.name,
//       '创作者': product.meta_info.seller.name,
//       '使用人数': product.bot_extra.user_count,
//       '收藏人数': product.meta_info.favorite_count,
//       '地址': `https://www.coze.cn/store/bot/${product.meta_info.id}`,
//       '功能描述': product.meta_info.description || 'N/A',
//       '头像': product.meta_info.icon_url,
//       '创作者头像': product.meta_info.seller.avatar_url,
//       '机器人id': `${product.meta_info.id}`
//   }));

//   const excelFilePath = path.join(__dirname, 'code-store', 'excel', `${categoryName}.xlsx`);

//   let existingData = [];
//   if (fs.existsSync(excelFilePath)) {
//       const existingWorkbook = XLSX.readFile(excelFilePath);
//       const existingSheet = existingWorkbook.Sheets[existingWorkbook.SheetNames[0]];
//       existingData = XLSX.utils.sheet_to_json(existingSheet, { header: 1 });
//   }

//   let headers = [];
//   let dataRows = [];

//   if (existingData.length === 0) {
//       headers = Object.keys(formattedData[0]);
//       dataRows = formattedData.map(row => headers.map(header => row[header]));
//   } else {
//       headers = existingData[0];
//       dataRows = existingData.slice(1).map(row => headers.map(header => row[header]));
//       dataRows.push(...formattedData.map(row => headers.map(header => row[header])));
//   }

//   const wb = XLSX.utils.book_new();
//   const ws = XLSX.utils.aoa_to_sheet([headers, ...dataRows]);
//   XLSX.utils.book_append_sheet(wb, ws, "机器人数据");

//   XLSX.writeFile(wb, excelFilePath);
// }

async function processAndExportData(products, categoryName) {
  const formattedData = products.map(product => ({
    '机器人名': product.meta_info.name,
    '所属类目': product.meta_info.category.name,
    '创作者': product.meta_info.seller.name,
    '使用人数': product.bot_extra.user_count,
    '收藏人数': product.meta_info.favorite_count,
    '地址': `https://www.coze.cn/store/bot/${product.meta_info.id}`,
    '功能描述': product.meta_info.description || '',
    '头像': product.meta_info.icon_url,
    '创作者头像': product.meta_info.seller.avatar_url,
    '机器人id': `${product.meta_info.id}`
  }));

  const csvFolderPath = path.join(__dirname, 'code-store', 'csv');
  const csvFilePath = path.join(csvFolderPath, `${categoryName}.csv`);

  // 确保文件夹存在
  if (!fs.existsSync(csvFolderPath)) {
    fs.mkdirSync(csvFolderPath, { recursive: true });
  }

  let csvContent = '';

  if (fs.existsSync(csvFilePath)) {
    const existingData = fs.readFileSync(csvFilePath, 'utf8');
    csvContent = existingData;
  } else {
    // 如果文件不存在，创建文件并添加表头
    // csvContent = '机器人名,所属类目,创作者,使用人数,收藏人数,地址,功能描述,头像,创作者头像,机器人id\n';
    // 写入表头
    const header = Object.keys(formattedData[0]);
    csvContent += header.join('\t') + '\n';
  }

  formattedData.forEach(row => {
    const values = Object.values(row).map(value => {
      // 如果值是功能描述列且包含换行符，则将换行符替换为其他字符（例如空格）
      if (value === row['功能描述'] && value.includes('\n')) {
        return value.replace(/\n/g, ' '); // 将换行符替换为空格
      } else {
        return value;
      }
    });
    csvContent += values.join('\t') + '\n';
  });

  fs.writeFileSync(csvFilePath, csvContent, 'utf8');
}


// 主函数：执行爬取和导出操作
async function main() {
  const categoryIds = getCategoryIds();

  for (const category of categoryIds) {
      const products = await fetchDataAndSave(category.id, category.name);
  }

  console.log('数据爬取并导出到 Excel 文件成功！');
}

main().catch(error => console.error(error));

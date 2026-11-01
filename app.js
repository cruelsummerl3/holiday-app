const API_KEY = "e26f24a3d6611dcbe2aaa978562d3f2182ea6019c84ab182d11f37bbcabe4ab7";

async function getHolidays(year, month) {
  let url = "https://apis.data.go.kr/B090041/openapi/service/SpcdeInfoService/getRestDeInfo"
    + "?serviceKey=" + encodeURIComponent(API_KEY)
    + "&solYear=" + year + "&_type=json&numOfRows=100";
  if (month) url += "&solMonth=" + String(month).padStart(2, "0");

  const res = await fetch(url);
  const data = await res.json();
  const items = data.response.body.items;
  if (!items) return [];
  return Array.isArray(items.item) ? items.item : [items.item];
}

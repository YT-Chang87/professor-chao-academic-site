# 趙浩然教授學術網站（提案版）

這是一套以 Astro 建置的中英雙語靜態學術網站。第一版所有未確認的教授資料均以「待確認」標示。

## 本機開發

需要 Node.js 22 或更新版本。

```bash
npm install
npm run dev
```

建置與預覽：

```bash
npm run build
npm run preview
```

## 更新內容

主要內容集中於 `src/data/site.json`：

- `profile`：教授姓名、職稱、簡介、學歷、經歷與聯絡資訊。
- `research`：研究方向、說明與關鍵字。
- `publications`：作者、年份、題名、期刊、DOI 與類型。
- `projects`：研究計畫期間、補助機構與執行角色。
- `members`：團隊成員、身分與研究主題。
- `news`：日期、標題與摘要。

每一筆中英文字段分別放在 `zh` 與 `en`。如果翻譯尚未確認，請保留明確的待補文字，不要直接刪除欄位。

教授照片及研究圖片可放在 `public/images/`，履歷 PDF 可放在 `public/cv/hao-ran-chao-cv.pdf`。加入檔案後，再於頁面或資料檔中設定連結。

## GitHub Pages 發布

目前公開網站由 `main` 分支的 `docs/` 資料夾提供。更新內容後，請以正式儲存庫名稱設定 `BASE_PATH`，重新執行建置並將 `dist/` 內容同步至 `docs/`，再推送至 GitHub。

若使用自訂網域，請同時更新 `astro.config.mjs` 的正式網址設定，並依 GitHub Pages 文件設定 DNS。

## 正式上線前檢查

- 取得教授本人同意，確認姓名英文拼法、職稱、學歷、經歷與研究資料。
- 確認照片、校徽、研究圖片與論文附件的公開使用權。
- 補齊 Google Scholar、ORCID、系所頁面及履歷 PDF。
- 移除首頁與頁首的「網站提案草稿」標示。

![](https://raw.githubusercontent.com/happyloa/Hex2025-f2e-live-week5and6/refs/heads/main/public/thumb.webp)

# 六角學院 2025 切版直播班第五、六週作業 - 職旅 WorkWay | 職涯諮詢媒合

此專案為六角學院 2025 切版直播班的第五、六週作業之成品

- [線上部署連結](https://workway.worksbyaaron.com/)
- [設計稿](https://www.figma.com/design/omevevD7bxbB3wQfL3jXR8/%E5%85%AD%E8%A7%92%EF%BD%9C%E8%81%B7%E6%97%85-WorkWay%EF%BD%9C%E8%81%B7%E6%B6%AF%E8%AB%AE%E8%A9%A2%E5%AA%92%E5%90%88-%EF%BC%88student-ver.%EF%BC%89?node-id=4032-9080&p=f&t=bgdFRugfSEeXTREp-0)

## 使用技術

- [Nuxt3](https://nuxt.com/)（Vue 加強版）
- [Tailwind CSS](https://tailwindcss.com/)

## 開發環境設置

建議使用 [VSCode](https://code.visualstudio.com/) 搭配

- [Vue - Official](https://marketplace.visualstudio.com/items?itemName=Vue.volar)
- [Nuxtr](https://marketplace.visualstudio.com/items?itemName=Nuxtr.nuxtr-vscode)
- [Tailwind CSS IntelliSense](https://marketplace.visualstudio.com/items?itemName=bradlc.vscode-tailwindcss)

## 快速開始

**專案設置（Project setup）**

將專案複製到本地端

```sh
$ git clone https://github.com/happyloa/Hex2025-f2e-live-week5and6.git
```

套件安裝

```sh
$ cd Hex2025-f2e-live-week5and6
$ npm install
```

**執行專案（Start the server）**

```sh
$ npm run dev
```

在瀏覽器上輸入

```
http://localhost:3000/
```

即可在本地端預覽專案

## 頁面路徑（Router Link）

位於 `pages`

結構說明

```
pages
├── my-account               會員頁面（/my-account、/my-account/appointments、/my-account/plans）
├── about                    關於職旅頁面（/about）
├── contact                  聯絡我們頁（/contact）
├── index                    首頁（/）
├── plans                    服務方案頁（/plans）
├── privacy-policy           隱私權政策頁面（/privacy-policy）
└── terms-and-conditions     用戶條款頁面（/terms-and-conditions）
```

## 元件檔案（Components）

位於 `components`

結構說明

```
components
├── Atom                     頁面上的小型元件（按鈕、等待資料回傳時顯示的轉圈裝飾）
├── Common                   頁面上用來呈現內容的中型元件（卡片、CTA、修改密碼 Modal、會員頁面導覽列）
└── Layout                   版面元件（導覽選單、頁尾、登入/註冊 Modal）
```

## 靜態檔案

位於 `public`

結構說明

```
public
├── data                     預約紀錄資料
├── icons                    在網站上使用的各式 icon
├── images                   在網站上使用的各式圖片
├── favicon.ico              網站的 favicon
├── logo-icon-w.svg          白色版 icon logo
├── logo-icon.svg            icon logo
├── logo.svg                 網站主要 logo
├── ogImage.webp             將網站連結貼到社群媒體時出現的預覽圖片
└── thumb.webp               讀我上用的縮圖
```

## 使用的套件 & 工具

- [Nuxt Google Fonts](https://google-fonts.nuxtjs.org/)
- [Nuxt Tailwind](https://tailwindcss.nuxtjs.org/)
- [Nuxt Swiper](https://nuxt.com/modules/swiper/)
- [VeeValidate](https://vee-validate.logaretm.com/)
- [Nuxt AOS](https://nuxt.com/modules/aos)
- [Yup](https://www.npmjs.com/package/yup)
- [TinyPNG](https://tinypng.com/)
- [SVG Viewer](https://www.svgviewer.dev/)
- [ChatGPT 4.1](https://openai.com/)

## 注意事項

為了模擬未登入跟已登入狀態，每次進到網站時會登錄一個帶著 false 值的 isLoggedIn 鍵到 sessionStorage 內，只要進到會員頁面（/my-account、/my-account/appointments、/my-account/plans），這個值就會變成 true，導覽列上的元件也會換成已登入狀態（從按鈕改為使用者頭像&名稱）。

## 2025/07/29 助教修改建議

![](https://raw.githubusercontent.com/happyloa/Hex2025-f2e-live-week5and6/refs/heads/main/public/ta-advise.webp)

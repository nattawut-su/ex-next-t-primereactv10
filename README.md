# NEXT.JS + TypeScript + primereact v10

โปรเจกต์ตัวอย่าง สำหรับเรียนรู้เบื่องต้น

> ### Requirements

- Node.js version: 18.17.0 ขึ้นไป
- npm version: 9 ขึ้นไป

[nodejs download](https://nodejs.org/en/download/)

> ### Technology used

#### Frontend Framework

- NEXT.JS version: 15.5.0
- React version: 19.1.0
- TypeScript

#### UI & Styling

- primereact v10
- primeflex
- primeicons
- tailwindcss
- chart.js

#### State Management

- Zustand
- @tanstack/react-query

#### Form & Validation

- React Hook Form
- Zod
- @hookform/resolvers

#### HTTP Client

- Axios
- Fetch API (built-in)

#### Utilities

- date-fns
- store
- next-intl

#### Testing

- Vitest
- @testing-library/react
- @testing-library/jest-dom
- jsdom

#### Mocking

- MSW (Mock Service Worker)

#### Lint & Format

- ESLint
- Prettier

#### Dev Tools

- @tanstack/react-query-devtools

> ### Installation

- Clone repo:

```sh
git clone https://github.com/nattawut-su/ex-vite-primereactv10.git
```

- เปลี่ยนไดเรกทอรีไปที่โปรเจกต์

```sh
cd ex-next-t-primereactv10
```

- ติดตั้ง

```sh
npm install
```

> ### Getting started

รันแอพ development โดย mock ข้อมูลใช้คำสั่ง:

```sh
npm run dev:mock
```

รันแอพ development โดย ไม่ mock ข้อมูลใช้คำสั่ง:

```sh
npm run dev
```

Open `http://localhost:3000`

> ### Usage
>
> | บทเรียน (classic) | อธิบาย                                                                  | url                                                               |
> | ----------------- | ----------------------------------------------------------------------- | ----------------------------------------------------------------- |
> | ✅ chapter 1      | การใช้งาน State พื้นฐาน                                                 | /classic/chapter1                                                 |
> | ✅ chapter 2      | การใช้งาน State, Props Event และ การจัดการฟอร์ม (Form Handling)         | /classic/chapter2                                                 |
> | ✅ chapter 3      | การจัดการ Event และการส่งค่าระหว่าง Components ด้วย useRouter           | /classic/chapter3                                                 |
> | ✅ chapter 4      | การใช้งาน useMemo พื้นฐาน                                               | /classic/chapter4/useMemo <br/> /classic/chapter4/without-useMemo |
> | ✅ chapter 5      | การส่งค่าระหว่าง Components ด้วย Context API                            | /classic/chapter5                                                 |
> | ✅ chapter 6      | การใช้งาน Lifecycle(useEffect) และ localStorage เบื้องต้น               | /classic/chapter6                                                 |
> | ✅ chapter 7      | ตัวอย่างการ สร้าง และใช้งาน Component พื้นฐาน                           | /classic/chapter7                                                 |
> | ✅ chapter 8      | ตัวอย่างการ ทำงานของ server Component ร่วมกับ client Component          | /classic/chapter8                                                 |
> | ✅ chapter 9      | ตัวอย่างการ บันทึกข้อมูลไป backend และ รับค่าจาก backend ด้วย fetch API | /classic/chapter9 <br/> /classic/chapter9/1                       |
> | ✅ chapter 10     | ตัวอย่างการ บันทึกข้อมูลไป backend และ รับค่าจาก backend ด้วย Axios     | /classic/chapter10 <br/> /classic/chapter10/1                     |
> | ✅ chapter 11     | ตัวอย่างการใช้งาน Custom Hook เบื้องต้น                                 | /classic/chapter11                                                |
> | ✅ chapter bonus  | การจัดการ Routing เบื้องต้น                                             | chapter 9 (dynamic route)                                         |

> | บทเรียน (advanced) | อธิบาย                                                                | url                |
> | ------------------ | --------------------------------------------------------------------- | ------------------ |
> | ✅ chapter 1       | การใช้งาน useReducer สำหรับ state ซับซ้อน/หลายฟิลด์                   | /advanced/chapter1 |
> | ✅ chapter 2       | การจัดการฟอร์ม ด้วย Zod                                               | /advanced/chapter2 |
> | ✅ chapter 3       | ความแตกต่าง การจัดการ HTTP REST Client ด้วย fetch API VS Axios        | /advanced/chapter3 |
> | ✅ chapter 4       | การใช้งาน React Query (ตัวจัดการ state ของข้อมูลจาก server อัตโนมัติ) | /advanced/chapter4 |
> | chapter 5          | การใช้งาน server action                                               | /advanced/chapter5 |
> | chapter 6          | การจัดการ State ด้วย Zustand (global state)                           |                    |
> | chapter 7          | ใช้งาน ชุดส่วนประกอบ UI ด้วย primereact (Styled)                      |                    |
> | chapter 8          | ใช้งาน ชุดส่วนประกอบ UI ด้วย primereact (Unstyled)                    |                    |
> | chapter 9          | การทำ Testing (Unit + Integration + E2E)                              |                    |

## VSCODE

เรา รวม extension ใน vscode ที่จำเป็น/ควร ต้องมีติดใว้ใน /.vscode/extensions.json

สามารถ ติดตั้งโดยไปที่ extension (Ctrl+Shift+X บน Windows Cmd + Shift + X บน macOS)

นำคำสั่ง `@recommended` วางบนช่องค้นหา

![recommended](https://cdn.discordapp.com/attachments/860249330908397587/1411411810375962755/image.png?ex=68b92c6e&is=68b7daee&hm=b265cdbef30539ee92bc6ae2db50d6f46e59d254386acc4ca4a7ab7f6eef4c0f&)

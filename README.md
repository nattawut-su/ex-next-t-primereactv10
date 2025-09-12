# NEXT.JS + TypeScript + primereact v10

โปรเจกต์ตัวอย่าง สำหรับเรียนรู้เบื่องต้น

> ### Node Installation

- Node.js version: 18.17.0 ขึ้นไป (เทียบเท่า Tomcat+JVM)
- npm version: 9 ขึ้นไป (เทียบเท่า Maven)

[nodejs download](https://nodejs.org/en/download/)

Windows: download standalone zip + set path environment variables

- ทดสอบ node -v
- ทดสอบ npm -v
- สำหรับ powershell terminal ให้รัน Set-ExecutionPolicy -Scope CurrentUser RemoteSigned

Linux: docker pull node:22-alpine

> ### Clone Project

```sh
git clone https://github.com/nattawut-su/ex-next-t-primereactv10.git
```

- เปลี่ยนไดเรกทอรีไปที่โปรเจกต์

```sh
cd ex-next-t-primereactv10
```

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

> | บทเรียน พื้นฐาน (standard)           | อธิบาย                                                                          | url                         |
> | ------------------------------------ | ------------------------------------------------------------------------------- | --------------------------- |
> | ✅ chapter 0 (without-css-utility)   | การแสดง State render พื้นฐาน                                                    | /standard/chapter0          |
> | ✅ chapter 1 (without-css-utility)   | การใช้งาน State พื้นฐาน                                                         | /standard/chapter1          |
> | ✅ chapter 2 (without-css-utility)   | ใช้งาน State และ Event ใน React สำหรับการจัดการฟอร์ม อย่างง่าย                  | /standard/chapter2          |
> | ✅ chapter 3.1 (without-css-utility) | ใช้งาน State และ HTTP REST Client (Java Servlet HTTP - GET) บน client Component | /standard/chapter3/example1 |
> | ✅ chapter 3.2 (without-css-utility) | ใช้งาน State และ HTTP REST Client (RESTful API - GET) บน client Component       | /standard/chapter3/example2 |
> | ✅ chapter 3.3 (without-css-utility) | ใช้งาน State และ HTTP REST Client (RESTful API - POST) บน client Component      | /standard/chapter3/example3 |
> | ✅ chapter 4 (with-css-utility)      | การใช้ PrimeReact css-utility Components                                        | /standard/chapter4          |
> | ✅ chapter 5 (with-css-utility)      | การใช้ server action คู่กับ useActionState เบื่องต้น                            | /standard/chapter5          |

> | บทเรียนเสริม (classic) | อธิบาย                                                                  | url                                                                               |
> | ---------------------- | ----------------------------------------------------------------------- | --------------------------------------------------------------------------------- |
> | ✅ chapter 1           | การจัดการ Event และการส่งค่าระหว่าง Components ด้วย useRouter           | /feature/classic/chapter1                                                         |
> | ✅ chapter 2           | การใช้งาน useMemo พื้นฐาน                                               | /feature/classic/chapter2/useMemo <br/> /feature/classic/chapter2/without-useMemo |
> | ✅ chapter 3           | การส่งค่าระหว่าง Components ด้วย Context API                            | /feature/classic/chapter3                                                         |
> | ✅ chapter 4           | การใช้งาน Lifecycle(useEffect) และ localStorage เบื้องต้น               | /feature/classic/chapter4                                                         |
> | ✅ chapter 5           | ตัวอย่างการ สร้าง และใช้งาน Component พื้นฐาน                           | /feature/classic/chapter5                                                         |
> | ✅ chapter 6           | ตัวอย่างการ ทำงานของ server Component ร่วมกับ client Component          | /feature/classic/chapter6                                                         |
> | ✅ chapter 7           | ตัวอย่างการ บันทึกข้อมูลไป backend และ รับค่าจาก backend ด้วย fetch API | /feature/classic/chapter7 <br/> /feature/classic/chapter7/1                       |
> | ✅ chapter 8           | ตัวอย่างการ บันทึกข้อมูลไป backend และ รับค่าจาก backend ด้วย Axios     | /feature/classic/chapter8 <br/> /feature/classic/chapter8/1                       |
> | ✅ chapter 9           | ตัวอย่างการใช้งาน Custom Hook เบื้องต้น                                 | /feature/classic/chapter9                                                         |
> | ✅ chapter bonus       | การจัดการ Routing เบื้องต้น                                             | feature/chapter 7 (dynamic route)                                                 |

> | บทเรียนเสริม (advanced) | อธิบาย                                                                | url                        |
> | ----------------------- | --------------------------------------------------------------------- | -------------------------- |
> | ✅ chapter 1            | การใช้งาน useReducer สำหรับ state ซับซ้อน/หลายฟิลด์                   | /feature/advanced/chapter1 |
> | ✅ chapter 2            | การจัดการฟอร์ม ด้วย Zod                                               | /feature/advanced/chapter2 |
> | ✅ chapter 3            | ความแตกต่าง การจัดการ HTTP REST Client ด้วย fetch API VS Axios        | /feature/advanced/chapter3 |
> | ✅ chapter 4            | การใช้งาน React Query (ตัวจัดการ state ของข้อมูลจาก server อัตโนมัติ) | /feature/advanced/chapter4 |
> | ✅ chapter 5            | การใช้งาน useTransition สำหรับ จัดการ Concurrent Rendering UI         | /feature/advanced/chapter5 |
> | chapter 6               | การใช้งาน server action                                               | /feature/advanced/chapter6 |
> | chapter 7               | การจัดการ State ด้วย Zustand (global state)                           |                            |
> | chapter 8               | ใช้งาน ชุดส่วนประกอบ UI ด้วย primereact (Styled)                      |                            |
> | chapter 9               | ใช้งาน ชุดส่วนประกอบ UI ด้วย primereact (Unstyled)                    |                            |
> | chapter 10              | การทำ Testing (Unit + Integration + E2E)                              |                            |

## VSCODE

เรา รวม extension ใน vscode ที่จำเป็น/ควร ต้องมีติดใว้ใน /.vscode/extensions.json

สามารถ ติดตั้งโดยไปที่ extension (Ctrl+Shift+X บน Windows Cmd + Shift + X บน macOS)

นำคำสั่ง `@recommended` วางบนช่องค้นหา

![recommended](https://cdn.discordapp.com/attachments/860249330908397587/1411411810375962755/image.png?ex=68b92c6e&is=68b7daee&hm=b265cdbef30539ee92bc6ae2db50d6f46e59d254386acc4ca4a7ab7f6eef4c0f&)

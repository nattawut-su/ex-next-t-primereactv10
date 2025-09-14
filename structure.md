# Structure

แนะนำ โครงสร้าง โปรเจกต์ (เฉพาะ src) 2 แบบ

### Global Standard Structure

โครงสร้าง มาตรฐานสากล (layer-based, Shared module) เหมาะกับโปรเจกต์เล็ก–กลาง เน้นแยกตามประเภท (components, hooks, lib, services)
<br/>
อ่านง่าย, เข้าถึงง่าย, และเป็นที่นิยม

```
project root
├─ public/                          → โฟลเดอร์นี้ถูกออกแบบมาเพื่อเก็บไฟล์ที่สามารถเข้าถึงได้โดยตรงจาก URL
└─ src/
   ├─ app/                          → core routing ของ Next.js (App Router)
   │  ├─ layout.tsx                 → Global layout
   │  ├─ page.tsx                   → หน้าแรก
   │  ├─ api/                       → API Routes
   ├─ components/                   → shared UI ที่ใช้ซ้ำได้ (Button, Card, Table)
   ├─ hooks/                        → custom hooks (generic) เช่น useAuth, useFetch
   ├─ lib/                          → Utility functions / library helper / wrapper / API client
   ├─ services/                     → Service layer
   ├─ models/                       → TypeScript interfaces / types
   ├─ contexts/                     → เก็บไฟล์ context, provider
   ├─ layouts/                      → Layout เฉพาะกลุ่ม
   ├─ styles/                       → เก็บไฟล์ CSS, SCSS
   └─ tests/                        → แยกโค้ดทดสอบ
```

### Enterprise Structure

โครงสร้าง ปรับแต่งสำหรับองค์กร/ระบบใหญ่ (Feature-based, Domain-Oriented, Modular) เหมาะกับ Project ที่โค้ดใหญ่, มีหลายทีม

```
project root
├─ public/                          → โฟลเดอร์นี้ถูกออกแบบมาเพื่อเก็บไฟล์ที่สามารถเข้าถึงได้โดยตรงจาก URL
└─ src/
   ├─ app/                          → core routing ของ Next.js (App Router)
   │  ├─ layout.tsx                 → Global layout
   │  └─ page.tsx                   → หน้าแรก
   └─ resources/                    → ทรัพยากร ตามกลุ่มที่ต้องการ
      ├─ feature/                   → ตัวอย่างกลุ่ม resource ของ feature
      │  ├─ assets/                     → เก็บไฟล์ static (CSS, images)
      │  ├─ contexts/                   → เก็บไฟล์ context, provider
      │  ├─ components/                 → shared UI ที่ใช้ซ้ำได้
      │  ├─ hooks/                      → custom hooks (generic)
      │  ├─ layouts/                    → Layout เฉพาะกลุ่ม
      │  ├─ lib/                        → Utility functions / library helper / wrapper / API client
      │  ├─ models/                     → TypeScript interfaces / types
      │  ├─ services/                   → Service layer
      │  └─ tests/                      → แยกโค้ดทดสอบ
      └─ standard/                  → ตัวอย่างกลุ่ม resource ของ standard
         ├─ assets/
         ├─ contexts/
         ├─ components/
         ├─ hooks/
         ├─ layouts/
         ├─ lib/
         ├─ models/
         ├─ services/
         └─ tests/
```

import { dirname } from 'path';
import { fileURLToPath } from 'url';
import { FlatCompat } from '@eslint/eslintrc';

// เพิ่มสองตัวนี้เพื่อให้ทำงานกับ Prettier
import eslintConfigPrettier from 'eslint-config-prettier';
import prettierPlugin from 'eslint-plugin-prettier';

import js from '@eslint/js';
import tseslint from 'typescript-eslint';
import reactHooks from 'eslint-plugin-react-hooks';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const compat = new FlatCompat({
  baseDirectory: __dirname,
});

const eslintConfig = [
  ...compat.extends('next/core-web-vitals', 'next/typescript'),
  js.configs.recommended,
  ...tseslint.configs.recommended,
  reactHooks.configs['recommended-latest'],
  {
    ignores: ['node_modules/**', '.next/**', 'out/**', 'build/**', 'next-env.d.ts'],
    plugins: {
      // ผูก plugin ของ Prettier ให้ ESLint รันเช็คฟอร์แมตด้วย
      prettier: prettierPlugin,
    },
    rules: {
      // ให้ Prettier เป็น error ถ้าฟอร์แมตไม่ตรง
      'prettier/prettier': 'error',
      'react-hooks/rules-of-hooks': 'error',
      'react-hooks/exhaustive-deps': 'warn',
    },
  },
  // ต้องใส่ "ท้ายสุด" เพื่อปิดกฎ ESLint ที่ชนกับ Prettier
  eslintConfigPrettier,
];

export default eslintConfig;

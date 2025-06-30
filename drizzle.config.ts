import type { Config } from "drizzle-kit";

export default {
  schema: "./src/schema.ts",           // スキーマ定義ファイルの場所
  out: "./migrations",                 // マイグレーションファイル出力先
  driver: "d1-http",                   // Cloudflare D1 向けのドライバ
  dialect: "sqlite",                   // D1 は SQLite 互換
  dbCredentials: {
    accountId: process.env.CLOUDFLARE_ACCOUNT_ID as string,
    databaseId: process.env.CLOUDFLARE_DATABASE_ID as string,
    token: process.env.CLOUDFLARE_D1_TOKEN as string
  }
} satisfies Config;
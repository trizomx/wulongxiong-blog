export const seo = {
  title: '乌龙熊 | wulongxiong',
  description:
    '我叫 乌龙熊，考研党，无业游民。',
  url: new URL(
    process.env.NODE_ENV === 'production'
      ? 'https://wulongxiong.com'
      : 'http://localhost:3000'
  ),
} as const
